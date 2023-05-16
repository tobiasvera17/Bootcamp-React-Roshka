
const leftrotate = (str, d) =>{
    var ans = str.substring(d, str.length) +
              str.substring(0, d);
    return ans;
}
let permutate = (arr, pos1, pos2) => {
    let temp = arr[pos1];
    arr[pos1] = arr[pos2];                                                                                          111
    arr[pos2] = temp;
    return arr;
}

let combinations = []

const nextBig = (num) => {
    let copy = num.toString()
    let initialValue = ""
    let currentNum = []
    for(let i = copy.length - 1; i >= 0; i -- ){
        let tempBefore = copy.substring(0, i)
        let tempAfter = copy.substring(i + 1, copy.length)
        let temp = copy[i]
        initialValue = temp + tempBefore + tempAfter
        if (!combinations.includes(Number(initialValue))){
            combinations.push(Number(initialValue))
        }
        initialValue = initialValue.split('')
        currentNum = []
        console.log(i + " initial:" + initialValue)
        // while(currentNum != initialValue){
        let u = 0
        while(u < 52){
            if(currentNum.length == 0){
                console.log(i + " a")
                for(let p = 0; p < initialValue.length; p ++){
                    currentNum[p] = initialValue[p]
                }
            }
            else{
                console.log(i + " b")
                currentNum = currentNum
            }

            for(let j = copy.length - 1; j > 0; j--){
                currentNum = permutate(currentNum, j, j-1)
                if(!combinations.includes(Number(currentNum.join(''))))
                    combinations.push(Number(currentNum.join('')))
            }
            u++
        }
    }
}
nextBig(12345)
console.log(combinations)