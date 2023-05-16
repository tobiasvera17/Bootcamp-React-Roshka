// 1
console.log("Ejercicio 1")
let e1 = []
for(let i = 0; i < 10; i++){
    e1.push(Math.floor(Math.random() * 10 - 5))
}
// e1.map((item, i) => console.log("Elemento " + i + ":" + item))
console.log(e1)
e1.sort(function(a, b) {
    return a - b;
  });
  let largest = e1[e1.length - 1];
  console.log("Elemento más grande:" + largest)

// 2
console.log("")
console.log("Ejercicio 2")
let e2 = []
for(let i = 0; i < 100; i++){
    e2.push(Math.floor(Math.random() * 60 - 30))
}
// e2.map((item, i) => console.log("Elemento " + i + ":" + item))
console.log(e2)
let max = { element:null,
            times:0 }
for(let i = 0; i < e2.length; i ++){
    let count = 0;
    for(let j = 0; j < e2.length; j++){
        if(e2[i] == e2[j]){
            count++
        }
    }
    if(count > max.times && count > 1){
        max.element = e2[i]
        max.times = count
    }
}
if(max.element)
    console.log("Elemento que se repite más veces:" + max.element)
else
    console.log("Ningún elemento se repite")

console.log("Elementos que no están presentes:")
for(let i = -30; i <= 30; i++){
    if(!e2.includes(i)){
        console.log(i)
    }

}

// 3
console.log("")
console.log("Ejercicio 3")
let e3 = prompt("Ejercicio 3 - Ingresa una frase:")
e3 = e3.match(/\w+/g).join("")  
let reversed = ""
for(let i = e3.length - 1; i >=0; i --){
    reversed += e3[i]
}

if(reversed == e3)
    console.log("La frase es palíndrome")
else
    console.log("La frase no es palíndrome")

// 4
console.log("")
console.log("Ejercicio 4")
let e4 = prompt("Ejercicio 4 - Ingrese una cadena de caracteres:")
let arrayE4 = e4.split("")
console.log(arrayE4)