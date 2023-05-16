// const leftrotate = (str, d) =>{
//     var ans = str.substring(d, str.length) +
//               str.substring(0, d);
//     return ans;
// }

// const nextBig = (num) => {
//     let copy = num.toString()
//     let combinations = [];
//     for(let i = 0; i < copy.length - 1; i ++){
//         let temp = ""
//         let tempBefore = copy.substring(0, i)
//         let tempAfter = copy.substring(i + 1, copy.length)
//         temp = copy[i] + tempBefore + tempAfter;
//         combinations.push(temp)
//         for(let j = 0; j <= copy.length - 2; j ++){
//             temp = leftrotate(temp, 1)
//             combinations.push(temp)
//         }
//     }
//     combinations.sort()
//     console.log(combinations)
//     let result = Number(combinations[combinations.indexOf(num.toString()) + 1])

//     if (result > num)
//         return result
//     else
//         return null
// }


const leftrotate = (str, d) =>{
    var ans = str.substring(d, str.length) +
              str.substring(0, d);
    return ans;
}

const nextBig = (num) => {
    let copy = num.toString()
    let combinations = [];
    let temp = ""
    console.log("ceil:" + Math.ceil(copy.length / 2))
    for(let i = 0; i <= copy.length + Math.ceil(copy.length / 2); i ++){
    // for(let i = 0; i <= 8; i ++){

        if (i < copy.length - 1){
            temp = ""
            let tempBefore = copy.substring(0, i)
            let tempAfter = copy.substring(i + 1, copy.length)
            temp = copy[i] + tempBefore + tempAfter;
            combinations.push(temp)
        }
        else if (i < copy.length ){
            tempBefore = temp.slice(Math.ceil(copy.length / 2), copy.length - 1)
            tempAfter = temp.slice(copy.length - 1, copy.length)
            temp = temp.slice(0, copy.length - 2)

            temp =  temp + tempAfter + tempBefore;
            // console.log("temp:::" + temp)
            combinations.push(temp)
        }
        // else if( i <= copy.length + Math.ceil(copy.length / 2)){
        else if (i > copy.length ){
            
            tempBefore = temp.slice(0, Math.ceil(copy.length / 2))
            tempBefore = leftrotate(tempBefore, 1)
            tempAfter = temp.slice(Math.ceil(copy.length / 2), copy.length)
            tempAfter = leftrotate(tempAfter, 1)
            temp = tempBefore + tempAfter;
            // console.log("temp:::" + temp)
        }

        for(let j = 0; j < copy.length + Math.ceil(copy.length / 2); j ++){
            temp = leftrotate(temp, 1)
            if(!combinations.includes(temp)){
                combinations.push(temp)
            }
        }
    }
    console.log(combinations)
    combinations.sort()
    let result = Number(combinations[combinations.indexOf(num.toString()) + 1])

    if (result > num)
        return result
    else
        return null
}

// 45012
// console.log(nextBig(2017))
// console.log(nextBig(8475))
// console.log(nextBig(1234))
// console.log(nextBig(42510))
// console.log(nextBig(513))
// console.log(nextBig(12))
// console.log(nextBig(531))
// console.log(nextBig(9))
// console.log(nextBig(111))
// console.log(nextBig(12))    //21
// console.log(nextBig(32))    //null
// console.log(nextBig(513))   //531
// console.log(nextBig(2017))  //2071 
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
console.log(nextBig(42510)) //45012 

