
function generarGestores() {
    const gestor1 = {
        id: 1,
        usuario: 'gestor1',
        password: 'gestor1',
        correo: 'gestor1@mail.com'
    };
    
    const gestor2 = {
        id: 2,
        usuario: 'gestor2',
        password: 'gestor2',
        correo: 'gestor2@mail.com'
    };

    const gestores = [gestor1, gestor2, {
        id: 3,
        usuario: 'gestor3',
        password: 'gestor3',
        correo: 'gestor3@mail.com'
    }];

    return gestores;
} 

function generarClientes() {
    const cliente1 = {
        id: 1,
        id_gestor: 1,
        usuario: 'cliente1',
        password: 'cliente1',
        correo: 'cliente1@mail.com', 
        saldo: 4300.56   
    };
    
    const cliente2 = {
        id: 2,
        id_gestor: 1,
        usuario: 'cliente2',
        password: 'cliente2',
        correo: 'cliente2@mail.com', 
        saldo: 300.56 
    };

    const clientes = [cliente1, cliente2]
    clientes.push(
        {
            id: 3,
            id_gestor: 2,
            usuario: 'cliente3',
            password: 'cliente3',
            correo: 'cliente3@mail.com', 
            saldo: 400.56 
        }
    );    

    return clientes;
}