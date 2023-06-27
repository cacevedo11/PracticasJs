

import { scrollTopButton } from "./btn_scroll.js";
import countdown from "./countdown.js";
import webCam from "./deteccion_camara.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import searchFilter from "./filtro_busqueda.js";
import responsiveTester from "./formulario.js";
import getGeolocation from "./geolocalizacion.js";
import hamburgerMenu from "./menu_hamburguesa.js";
import responsiveMedia from "./objeto_responsive.js";
import { digitalClock, alarm } from "./reloj.js";
import carrusel from "./slider.js";
import draw from "./sorteo.js";
import { moveBall } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    
    alarm("../assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    
    countdown("countdown", "Nov 10, 2023 08:00:00", "Feliz Cumpleaños 🤓");
    
    scrollTopButton(".scroll-top-btn");
    
    responsiveMedia("youtube", 
    "(min-width: 1024px)", 
    `<a href="https://youtu.be/D21ASFgZEvU" target="_blank" rel="noopener">Ver video</a>`, 
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/D21ASFgZEvU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    responsiveMedia("gmaps", 
    "(min-width: 1024px)",  
    `<a href="https://goo.gl/maps/VaVL9Z6xwsD4R8MY9" target="_blank" rel="noopener">Ver mapa</a>`, 
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.760873167278!2d-75.69530628594428!3d4.811072442031946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e388747b25c62d3%3A0xdbfb406a17bc346e!2sVictoria%20Centro%20Comercial!5e0!3m2!1ses!2sco!4v1680219683621!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);

    responsiveTester("responsive-tester");
    
    userDeviceInfo("user-device");

    webCam("webcam");

    getGeolocation("geolocation");

    searchFilter(".card-filter", ".card");

    draw("#winner-btn", ".player");

    carrusel();

})

d.addEventListener("keydown", (e)=>{
    moveBall(e, ".ball", ".stage");
})

darkTheme(".dark-theme-btn", "dark-mode");

networkStatus();