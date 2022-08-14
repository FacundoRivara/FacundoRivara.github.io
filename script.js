const ingresarTexto = document.getElementById("textoEncriptar");
const egresarTexto = document.getElementById("texto2");

const botonEncriptar = document.getElementById("btn-encriptar");
const botonDesencriptar = document.getElementById("btn-desencriptar");
const botonCopiar = document.getElementById("btn-copiar");

function validarMensaje(texto){
    let letraValida = "abcdefghijklmnñopqrstuvwxyz "
    let mensaje = ingresarTexto.value
    if(mensaje===""){
        alert("Necesita ingresar un texto");
        return false;
    }
    for (let letra of mensaje) {
        if(!letraValida.includes(letra)){
            alert("Ingreso caracteres no permitidos!");
            return false;
        }
    }   return true;
}
    
function encriptar(){
    if(!validarMensaje())return;
    let mensaje = ingresarTexto.value;
    let mensajeEncriptado = mensaje.replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat");

    document.getElementById("imagenDerecha").style.display = "none";
    document.getElementById("imgTexto").style.display = "none";
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";

    egresarTexto.value = mensajeEncriptado;
    }
function desencriptar(){
    if(!validarMensaje())return;
    let mensaje = ingresarTexto.value;
    let mensajeDesencriptado = mensaje.replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");

    document.getElementById("imagenDerecha").style.display = "none";
    document.getElementById("imgTexto").style.display = "none";
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";

    egresarTexto.value = mensajeDesencriptado;
}    
function copiar(){
    let mensajeEncriptado = egresarTexto.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}
    
    botonEncriptar.onclick = encriptar;
    botonDesencriptar.onclick = desencriptar;
    botonCopiar.onclick = copiar;