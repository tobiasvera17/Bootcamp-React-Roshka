import { objetoOriginal, arrayOriginal } from "./archivo1.js"

let objeto2 = { ...objetoOriginal,
            profesion: "programador"}

let array2 = [...arrayOriginal, "programador"]

console.log(objetoOriginal)
console.log(objeto2)
console.log(arrayOriginal)
console.log(array2)