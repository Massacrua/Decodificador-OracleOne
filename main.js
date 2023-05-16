const codeButton = document.querySelector(".codificar")
const decodeButton = document.querySelector(".decodificar")
const copyButtom = document.querySelector("#copiar")
const outputText = document.querySelector(".output-text")

function codeText() {
    let string = document.querySelector("#input").value
    if (string == "") {
        document.querySelector(".output-content").style.display = "block"
        document.querySelector(".output-text").innerHTML = ""
    }
    string = string.replaceAll("e", "enter")
    string = string.replaceAll("i", "imes")
    string = string.replaceAll("a", "ai")
    string = string.replaceAll("o", "ober")
    string = string.replaceAll("u", "ufat")
    printResult(string)
    return string
}

function decodeText() {
    let string = document.querySelector("#input").value
    if (string == "") {
        document.querySelector(".output-content").style.display = "block"
        document.querySelector(".output-text").innerHTML = ""
    }
    string = string.replaceAll("enter", "e")
    string = string.replaceAll("imes", "i")
    string = string.replaceAll("ai", "a")
    string = string.replaceAll("ober", "o")
    string = string.replaceAll("ufat", "u")
    printResult(string)
    return string
}

function printResult(string) {
    if (string.length > 0) {
        document.querySelector(".output-content").style.display = "none"
        document.querySelector(".output-text").innerHTML = string
    }
}

function copyText() {
    let text = document.querySelector(".output-text").innerHTML
    navigator.clipboard.writeText(text)
    copyButtom.innerHTML = "Copiado"
    setTimeout(() => {copyButtom.innerHTML = "Copiar";}, 2500)
}


codeButton.addEventListener("click", codeText);
decodeButton.addEventListener("click", decodeText);
copyButtom.addEventListener("click", copyText);
