import { ajax } from './ajax.js';


const server = "localhost:8085";


export function obtenerGestores() {
  return new Promise((resolve, reject) => {
    const opcionesLogin = {
      url: `http://${server}/login/gestor/`,
      metodo: "POST",
      body: "usuario=gestor1&password=gestor1",
      cabeceras: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    //* === realiza la petición de login del 'gestor' | postman ===

    ajax(opcionesLogin, (data) => {
      // esta función se ejecuta cuando los datos
      // han sido devueltos por el servicio
      console.log(data);

      // convertir string (respuesta servidor) a objeto JS
      const respuesta = JSON.parse(data);
      console.log(respuesta.data.token);

      // guardar el token
      const token = respuesta.data.token;

      // solicitud para optener todos los 'gestores' | obtenerGestores | postman
      const opcionesObtenerGestores = {
        url: "http://localhost:8085/gestores/",
        metodo: "GET",
        cabeceras: {
          Authorization: `Basic ${token}`,
        },
      };

      ajax(opcionesObtenerGestores, (data) => {
        // data | tiene toda la info de los gestores en formato 'string'
        console.log(data);

        // convertir a objeto JS
        const respuesta = JSON.parse(data);
        console.log(respuesta);

        const gestores = respuesta.data;
        resolve(gestores);
        //mostrarGestores(gestores);
      });
    });
  });
}
