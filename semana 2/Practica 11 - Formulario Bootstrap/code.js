const tipoDeDocumento = document.getElementById("inputTipoDeDocumento")
const numeroDeDocumento = document.getElementById("inputNumeroDeDocumento")
const buttonEnviar = document.getElementById("buttonEnviar")


tipoDeDocumento.addEventListener("change", () => {
    if (tipoDeDocumento.value !== "1") {
        // Restablecer estilo y disponibilidad del botón de envío
        numeroDeDocumento.removeAttribute("style");
        buttonEnviar.removeAttribute("disabled");
    }
});


numeroDeDocumento.addEventListener("input", () => {
    if(tipoDeDocumento.value == "1"){
        let input = numeroDeDocumento.value;
        console.log(input)
        const pattern = /^\d+-\d{1}$/
        if(pattern.test(input)){
            buttonEnviar.removeAttribute("disabled")
            numeroDeDocumento.removeAttribute("style")
        }
        else{
            buttonEnviar.setAttribute("disabled","true")
            numeroDeDocumento.setAttribute("style","border:1px solid red; background-color: rgba(251, 54, 54, 0.778)")
        }
    }
})