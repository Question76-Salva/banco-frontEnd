
// === crear 4 objetos | 4 propieades del gestor ===

const gestor1 = {
    id: 1,
    usuario: 'gestor1',
    password: 'gestor1',
    correo: 'gestor1@mail.com'
}

const gestor2 = {
    id: 2,
    usuario: 'gestor2',
    password: 'gestor2',
    correo: 'gestor2@mail.com'
}

const cliente1 = {
    id: 1,
    id_gestor: 1,
    usuario: 'cliente1',
    password: 'cliente1',
    correo: 'cliente1@mail.com', 
    saldo: 4300.56   
}

const cliente2 = {
    id: 2,
    id_gestor: 1,
    usuario: 'cliente2',
    password: 'cliente2',
    correo: 'cliente2@mail.com', 
    saldo: 300.56 
}

// console.table(gestor2);
// console.table(cliente2);

//* ==========================================================================

/*
    Ejercicio 2 del proyecto: escribe un programa que almacene los objetos creados en el ejercio anterior del proyecto dentro de un array (un array por cada modelo de datos). A continuación, recorre cada uno de los arrays y muestra todas propiedades.
*/

const gestores = [ gestor1, gestor2 ];
const clientes = [ cliente1, cliente2 ];

// for...in
for (gestor in gestores) {
    console.table(gestores[gestor]);
}

for (cliente in clientes) {
    console.table(clientes[cliente]);
}

// for...of
for (gestor of gestores) {
    console.table(gestor);
}

for (cliente of clientes) {
    console.table(cliente);
}

for (gestor of gestores) {
    console.log(`id: ${gestor.id}`);
    console.log(`usuario: ${gestor.usuario}`);
    console.log(`password: ${gestor.password}`);
    console.log(`correo: ${gestor.correo}`);       
}

for (cliente of clientes) {
    console.log(`id: ${cliente.id}`);
    console.log(`usuario: ${cliente.usuario}`);
    console.log(`password: ${cliente.password}`);
    console.log(`correo: ${cliente.correo}`);
    console.log(`saldo: ${cliente.saldo}`);    
}

// forEach()
gestores.forEach( gestor => {
    console.table(gestor);
});
clientes.forEach( cliente => console.table(cliente));

// map()
const respuesta = clientes.map( cliente => {
    return cliente;
}); 
console.table(respuesta);

//* ==========================================================================