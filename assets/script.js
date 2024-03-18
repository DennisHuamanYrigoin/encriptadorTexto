const mensaje = document.querySelector(".mensaje");
const mensajeEnc = document.querySelector(".mensaje-desencriptado");
const texto1MD = document.querySelector(".texto1-md");
const texto2MD = document.querySelector(".texto2-md");

function encriptar(){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    texto = mensaje.value.toLowerCase();
    texto = texto.replaceAll(/[^a-zA-Z0-9 ]/g, "");

    for(let i=0; i < matrizCodigo.length; i++){
        if(texto.includes(matrizCodigo[i][0])){
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return texto;
}

function desencriptar(){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoDes = mensaje.value.toLowerCase();
    for(let i=0; i < matrizCodigo.length; i++){
        if(textoDes.includes(matrizCodigo[i][1])){
            textoDes = textoDes.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return textoDes;
}

function btnEncriptar(){
    const textoEncriptar = encriptar() 
    mensajeEnc.innerHTML = textoEncriptar;
    mensaje.value = "";
    mensajeEnc.style.backgroundImage = "none";
    texto1MD.innerHTML = "";
    texto2MD.innerHTML = "";
}

function btnDesencriptar() {
    const textoDesencriptar = desencriptar() 
    mensajeEnc.innerHTML = textoDesencriptar;
    mensajeEnc.style.backgroundImage = "none";
    mensaje.value = "";
    texto1MD.innerHTML = "";
    texto2MD.innerHTML = "";
}

function btnCopiar(){
    var copiado = mensajeEnc.innerHTML;
    console.log(copiado);
    navigator.clipboard.writeText(copiado);
}