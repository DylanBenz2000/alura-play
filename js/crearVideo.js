import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector('[data-formulario]');

async function crearVideo(evento){
    
    evento.preventDefault();

    const imagem = document.querySelector('[data-imagen]').value;
    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const descripcion = Math.floor(Math.random()*10).toString();

    try{
        await conexionAPI.enviarVideo(titulo,descripcion,url, imagem);
        console.log("verificar que la redirección funciona")
        window.location.href="../pages/envio-concluido.html";
    }catch(e){
        alert(e);
    }

}

formulario.addEventListener('submit', evento => crearVideo(evento))