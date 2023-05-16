// 1
console.log("Ejercicio 1")

let num1 = 20;
let num2 = 10;

console.log("Suma: " + (num1 + num2));
console.log("Resta: " + (num1 - num2));
console.log("Multiplicación: " + (num1 * num2));
console.log("División: " + (num1 / num2));
console.log("Módulo: " + (num1 % num2));

// 2
console.log("Ejercicio 2")

if(num1 > num2){
    console.log(num1 + " > " + num2);
}else if(num1 < num2){
    console.log(num1 + " < " + num2);
}else{
    console.log(num1 + " == " + num2)
}

num2 = 20;
num1 = 10;
if(num1 > num2){
    console.log(num1 + " > " + num2);
}else if(num1 < num2){
    console.log(num1 + " < " + num2);
}else{
    console.log(num1 + " == " + num2)
}

num2 = 10;
num1 = 10;

if(num1 > num2){
    console.log(num1 + " > " + num2);
}else if(num1 < num2){
    console.log(num1 + " < " + num2);
}else{
    console.log(num1 + " == " + num2)
}

// 3
console.log("Ejercicio 3")

let myName = "Tobias";
console.log("Bienvenido " + myName);

// 4
console.log("Ejercicio 4")

myName = prompt("Ejericicio 4 - Cuál es tu nombre?");
console.log("Bienvenido " + myName);

// 5
console.log("Ejercicio 5")

let myNum = prompt("Ejericicio 5 - Cuál es tu número?");
if(isNaN(myNum)){
    console.log("No es un número")
}
else{
    if(myNum % 2 == 0){
        console.log(myNum + " es divisible entre 2")
    }else{
        console.log(myNum + " no es divisible entre 2")
    }
}

// 6
console.log("Ejercicio 6")

const IVA = 0.1;
let myPrice = prompt("Ejericicio 6 - Cuál es el precio del producto?");
if(isNaN(myPrice)){
    console.log("No es un número")
}
else{
    let finalPrice = Number(myPrice) + Number(myPrice) * IVA
    console.log("Precio final: " + finalPrice)
}

// 7
console.log("Ejercicio 7")

for(let i = 1; i <= 100; i ++){
    if((i % 2 == 0) && (i % 3 == 0)){
        console.log(i)
    }
}

// 8
console.log("Ejercicio 8")

myNum = 0;
do{
    myNum = prompt("Ejericicio 8 - Ingrese un número: ")
}
while(myNum < 0 || isNaN(myNum))
console.log("Numero ingresado:" + myNum);

// 9
console.log("Ejercicio 9")

const password = "si1234";
let pwdUser = "";
let i = 0;
let failedPwd = 0;
while(i < 3){
    pwdUser = prompt("Ejericicio 9 - Ingresar contraseña:");
    if(pwdUser == password){
        console.log("Correcto!")
        break;
    }
    else{
        i++;
        failedPwd++;
    }
}
if(failedPwd >=3){
    console.log("Fallaste jaja!!")
}

// 10
console.log("Ejercicio 10")

let day = prompt("Ejericicio 10 - Ingresa un día de la semana:");

switch(day){
    case "lunes":
    case "Lunes":
        console.log("Día laboral")
        break;
    case "martes":
    case "Martes":
        console.log("Día laboral")
        break;
    case "miercoles":
    case "Miercoles":
        console.log("Día laboral")
        break;
    case "jueves":
    case "Jueves":
        console.log("Día laboral")
        break;
    case "viernes":
    case "Viernes":
        console.log("Día laboral")
        break;
    case "sabado":
    case "Sabado":
        console.log("No es Día laboral")
        break;
    case "domingo":
    case "Domingo":
        console.log("No es Día laboral")
        break;
    default:
        console.log("El valor ingresado es inválido.")
}

