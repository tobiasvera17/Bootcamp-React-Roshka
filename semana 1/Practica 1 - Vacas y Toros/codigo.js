const insertedNumber = document.getElementById("insertedNumber");
const guessButton = document.getElementById("guessButton");
const resultRoot = document.getElementById("resultRoot")
const root = document.getElementById("root")
let arrayRandom = [];

let vacas = 0;
let toros = 0;

for(let i = 0; i<=3; i++){
    let random = Math.floor(Math.random() * 10).toString();
    while(arrayRandom.includes(random)){
        random = Math.floor(Math.random() * 10).toString();     
    }
    if(i == 0){
        while(random == 0){
            random = Math.floor(Math.random() * 10).toString();     
        }
    }
    arrayRandom.push(random)
}
// console.log(arrayRandom)

guessButton.addEventListener("click", () => {
    let num = insertedNumber.value;
    if(num.length == 4){
        let arrayNum = num.toString().split("");
        // console.log(arrayNum)
        for(let i=0; i<arrayNum.length; i++){
            for(let j=0; j<arrayRandom.length; j++){
                if((arrayNum[i] == arrayRandom[j]) && (i==j)){
                    toros++;
                    vacas--;
                }
            }
            if(arrayRandom.includes(arrayNum[i])){
                vacas++
            }
        }
        resultRoot.innerHTML = "";
        let divResult = document.createElement("DIV");
        if(toros == 4){
            root.innerHTML = `<h3>"Felicidaes! El número secreto era: ${arrayRandom.join("")}</h3>`
        }else{
            divResult.innerHTML = `<h3>${vacas} vacas, ${toros} toros</h3>
            <h4>Por favor, intente de nuevo.</h4>`;
            toros = 0;
            vacas = 0;
            insertedNumber.value = "";
        }
        resultRoot.appendChild(divResult);
        
    }
})