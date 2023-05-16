// 1
console.log("Ejercicio 1")
let a = prompt("Ejercicio 1 - valor a:")
let b = prompt("Ejercicio 1 - valor b:")
let c = prompt("Ejercicio 1 - valor c:")


if(isNaN(Number(a))){
    console.log(a + " no es un número.")
    console.log("Ejercicio 2")
    console.log(a + " no es un número.")
}
else if(isNaN(Number(b))){
    console.log(b + " no es un número.")
    console.log("Ejercicio 2")
    console.log(b + " no es un número.")
}
else if(isNaN(Number(c))){
    console.log(c + " no es un número.")
    console.log("Ejercicio 2")
    console.log(c + " no es un número.")
}
else{
    a = Number(a)
    b = Number(b)
    c = Number(c)
    let e1 = ((b * -1) + Math.sqrt((b * b) - 4 * a * c)) / (2 * a)
    console.log(e1)
    
    // 2
    let e2 = ((b * -1) - Math.sqrt((b * b) - 4 * a * c)) / (2 * a)
    console.log("Ejercicio 2")
    console.log(e2)
}

// 3
console.log("Ejercicio 3")
let id = prompt("Ejercicio 3 - Ingresar un id:")
let str = prompt("Ejercicio 3 - Ingresar un string:")
if(document.getElementById(`${id}`))
    document.getElementById(`${id}`).innerHTML = `${str}`
else
    console.log("Ese ID no existe.")

// 4
console.log("Ejercicio 4")
id = prompt("Ejercicio 4 - Ingresar un id:")
if(document.getElementById(`${id}`)){
    let random = Math.floor(Math.random() * 100 + 1)
    document.getElementById(`${id}`).innerHTML = `${random}`
}
else
    console.log("Ese ID no existe.")


