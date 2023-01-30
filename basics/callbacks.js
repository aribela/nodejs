
const suma = (a,b, cb) => {
    cb(a+b);
}

const imprimir = (data) => {
    console.log("imprimir");
    console.log(data);
}

suma(1,2, (resultado) => {
    console.log(resultado);
})

suma(1,2, imprimir);