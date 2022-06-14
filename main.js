
// === Ejercicio 1 proyecto | crear objetos | 4 propieades para: gestor y cliente ===

/*
    Ejercicio 4.1: El resto de funcionalidades anteriores del programa deben abstraerse en funciones.
*/



function mostrarGestor(gestor) {
    console.log(`id: ${gestor.id}`);
    console.log(`usuario: ${gestor.usuario}`);
    console.log(`password: ${gestor.password}`);
    console.log(`correo: ${gestor.correo}`);   
    console.log('------------------------------');    
}

function mostrarGestores(gestores) {
    console.log('--- GESTORES ---');
    for (gestor of gestores) {
        mostrarGestor(gestor);   
    }
}

function mostrarCliente(cliente) {
    console.log(`id: ${cliente.id}`);
    console.log(`usuario: ${cliente.usuario}`);
    console.log(`password: ${cliente.password}`);
    console.log(`correo: ${cliente.correo}`);
    console.log(`saldo: ${cliente.saldo}`); 
    console.log('------------------------------');
}

function mostrarClientes(clientes) {
    for (cliente of clientes) {
           mostrarCliente(cliente);
    }
}

// guardo en una variable lo que retorna la función 'generarGestores'
// para poder acceder a ellos desde el exterior
// retorna un array | gestores
const gestores = generarGestores();

// guardo en una variable lo que retorna la función 'generarClientes'
// para poder acceder a ellos desde el exterior
// retorna un array | clientes
const clientes = generarClientes();





console.log('==================');
console.log('==================');
console.log('==================');

//* ==========================================================================

/*
    Ejercicio 2 del proyecto: escribe un programa que almacene los objetos creados en el ejercio anterior del proyecto dentro de un array (un array por cada modelo de datos). A continuación, recorre cada uno de los arrays y muestra todas propiedades.
*/

// const gestores = [ gestor1, gestor2 ];
// const clientes = [ cliente1, cliente2 ];

// for...in
// for (gestor in gestores) {
//     console.table(gestores[gestor]);
// }

// for (cliente in clientes) {
//     console.table(clientes[cliente]);
// }

// for...of
// for (gestor of gestores) {
//     console.table(gestor);
// }

// for (cliente of clientes) {
//     console.table(cliente);
// }





// forEach()
// gestores.forEach( gestor => {
//     console.table(gestor);
// });
// clientes.forEach( cliente => console.table(cliente));

// // map()
// const respuesta = clientes.map( cliente => {
//     return cliente;
// }); 
// console.table(respuesta);

console.log('==================');
console.log('==================');
console.log('==================');

//* ==========================================================================


/*
    Ejercicio 3 del proyecto: escribe un programa que realice la conversión a JSON del arrays 'clientes' y 'gestores' (y viceversa) creado en el ejercicio anterior del proyecto.
*/

// convertir arrays a JSON
const gestoresJSON = JSON.stringify(gestores);
console.log(gestoresJSON);

const clientesJSON = JSON.stringify(clientes);
console.log(clientesJSON);

// convertir de JSON a objetos
const clientesOriginal = JSON.parse(clientesJSON);
console.table(clientesOriginal);

const gestoresOriginal = JSON.parse(gestoresJSON);
console.table(gestoresOriginal);


console.log('==================');
console.log('==================');
console.log('==================');

//* ==========================================================================



