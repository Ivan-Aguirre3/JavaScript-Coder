let IngresarNumero = parseInt(prompt("Ingresar Numero"))

for (let i = 1; i <= 10; i++){
    let resultado = IngresarNumero * i ;
    alert (IngresarNumero + " X " + i + " = " + resultado);
}

let numero = 0
do {
    numero = prompt("Ingresar Numero");
    console.log(numero);
}while (parseInt(numero))

let entrada = prompt ("ingresar un dato")
while (entrada !="ESC"){
    alert("El usuario Ingreso" + entrada);
    entrada = prompt("Ingresar otro dato")
}