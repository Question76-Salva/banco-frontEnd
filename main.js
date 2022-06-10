
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

console.table(gestor2);
console.table(cliente2);