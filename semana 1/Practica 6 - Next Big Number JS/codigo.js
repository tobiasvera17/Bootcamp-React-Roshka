// Cree una función que tome un número entero positivo y devuelva el siguiente número más grande que se puede formar reorganizando sus dígitos. Por ejemplo:
// 12 -> 21     513 -> 531    2017 - 7210

let combinaciones =[]

let permutate = (arr, pos1, pos2) => {
    let temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
    return arr;
}


let nextBig = (number) => {
    let bigNumber = null

    let digits = number.toString().split('');

    // Si es de un digito
    if (digits.length == 1) {
        return bigNumber;
    }
    // Si son 2 digitos o mas
    else {
        // Recorrer de atras para adelante (Index Start es desde que posicion empieza a permutar )
        let findBigNumber = (indexStart) => {

            // Reiniciar el orden inicial de los numeros
            digits = number.toString().split('')

            for (let i = indexStart; i > 0; i--) {
                // Permutar el actual con el de la izquierda
                digits = permutate(digits, i, i - 1)
                if(!combinaciones.includes(digits.join('')))
                        combinaciones.push(digits.join('')) 
                // Si lo actual permutado es mayor
                if (digits.join('') > number) {
                    
                    // Ordenar los numeros de la derecha de lo permutado (orden ascendente)
                    let rightNumbers = digits.slice(i);
                    rightNumbers = rightNumbers.sort((a, b) => a - b);
                    
                    // Volver a colocar ordenado eliminando los desordenados
                    digits.splice(i, rightNumbers.length, rightNumbers.join(''))
                    
                    bigNumber = digits.join('');
                    if(!combinaciones.includes(bigNumber))
                        combinaciones.push(bigNumber)                
                }
            }

            // Si no se encontro un big number volver a permutar desde el ultimo -1 
            // hasta que index start sea 1 (no se puede permutar con 1 solo elemento)
            if (bigNumber == null && indexStart != 1) {
                findBigNumber(indexStart - 1)
            }
        }

        // Primera llamada a la funcion
        findBigNumber(digits.length - 1)

    }

    console.log("Numero: ", number);

    return bigNumber
}

console.log(combinaciones)
//Test
// console.log(nextBig(12))    //21
// console.log(nextBig(32))    //null
// console.log(nextBig(513))   //531
console.log(nextBig(2017))  //2071 
// console.log(nextBig(9))     // null
// console.log(nextBig(531))   // null
// console.log(nextBig(111))   // null
// console.log(nextBig(334))   // null
// console.log(nextBig(82045)) //82054 
// console.log(nextBig(82450)) //82540 
// console.log(nextBig(8475))  //8547 
// console.log(nextBig(2011))  //2101 
// console.log(nextBig(2001))  //2010
// console.log(nextBig(20100)) //21000
// console.log(nextBig(3150))  //3501 
// console.log(nextBig(5130))  //3501 
// console.log(nextBig(42510)) //45012 
