const countCharacters = (str) => {
    let repeatedCharactersCount = 0
    let repeatedCharactersArray = []
    for(let i = 0; i < str.length; i ++){
        if (!repeatedCharactersArray.includes(str[i].toLowerCase())){
            let count = 0;
            for(let j = i; j < str.length; j ++){
                    if (str[i].toLowerCase() == str[j].toLowerCase())
                        count++
            }
            if (count > 1){
                repeatedCharactersArray.push(str[i].toLowerCase())
                repeatedCharactersCount++
            }
        }
    }
    return str + " -> " + repeatedCharactersCount
}
console.log(countCharacters("Indivisibilities"))
console.log(countCharacters("Indivisibility"))
console.log(countCharacters("ABBA"))
console.log(countCharacters("AaBbCcddeFGG99800"))


