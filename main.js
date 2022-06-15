
// === Ejercicio 1 proyecto | crear objetos | 4 propieades para: gestor y cliente ===

/*
    Ejercicio 4.1: El resto de funcionalidades anteriores del programa deben abstraerse en funciones.
*/





//* guardo en una variable lo que retorna la función 'generarGestores'
// para poder acceder a ellos desde el exterior
// retorna un array | gestores
//const gestores = generarGestores();

//* guardo en una variable lo que retorna la función 'generarClientes'
// para poder acceder a ellos desde el exterior
// retorna un array | clientes
//const clientes = generarClientes();


console.log('==================');
console.log('==================');
console.log('==================');

//* ==========================================================================


/*
    Ejercicio 3 del proyecto: escribe un programa que realice la conversión a JSON del arrays 'clientes' y 'gestores' (y viceversa) creado en el ejercicio anterior del proyecto.
*/

// convertir arrays a JSON
// const gestoresJSON = JSON.stringify(gestores);
// console.log(gestoresJSON);

// const clientesJSON = JSON.stringify(clientes);
// console.log(clientesJSON);

// // convertir de JSON a objetos
// const clientesOriginal = JSON.parse(clientesJSON);
// console.table(clientesOriginal);

// const gestoresOriginal = JSON.parse(gestoresJSON);
// console.table(gestoresOriginal);


console.log('==================');
console.log('==================');
console.log('==================');

//* ==========================================================================


/*
    Realizar una petición a http://localhost:8085/ok 
    y mostrar la respuesta por pantalla
*/

// - las propiedades del objeto 'opciones' son:
//      url, metodo, body, cabeceras

const server = ''

const opciones = {
    url: 'http://localhost:8085/ok',
    metodo: 'GET'
};

ajax(opciones, (data) => {
    console.log(data);
})

// - enviar datos al servidor

const opcionesLogin = {
    url: 'http://localhost:8085/login/gestor/',
    metodo: 'POST',
    body: 'usuario=gestor1&password=gestor1',
    cabeceras: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
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
        url: 'http://localhost:8085/gestores/',
        metodo: 'GET',
        cabeceras: {
            Authorization: `Basic ${token}`
        }
    }

    ajax(opcionesObtenerGestores, (data) => {
        // data | tiene toda la info de los gestores en formato 'string'
        console.log(data);
        
        // convertir a objeto JS    
        const respuesta = JSON.parse(data);
        console.log(respuesta);

        const gestores = respuesta.data;
        mostrarGestores(gestores);
    });        
});




