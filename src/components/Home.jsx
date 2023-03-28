import React from 'react';
import './Home.css';
import logo from "../img/logopag2.png"
import foto1 from "../img/homevideo.png"
import foto2 from "../img/ecommercebmw.png"
import foto3 from "../img/seguridad.png"
import foto4 from "../img/muebles.png"
import foto5 from "../img/event.png"
import foto6 from "../img/casino.png"
export default function Home() {


  return (
    <div>
      <div className='home'>
      <a style={{ width:"auto"}} href="https://api.whatsapp.com/send?phone=1176351958">  
      <div className='but'>
        <div className='navBtn'>  
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg>     
        </div>
      </div>
      </a>
            <img className='imgDos' src={logo} alt="img logo" />
            <img className='imagens' src="https://computerworldmexico.com.mx/wp-content/uploads/2021/02/Privacidad.jpg" alt="gif" />

        <div className='homeInterno'>
         
            <div className='cajaDisp'>
            <img className='imgLog' src="https://nubelab.com.ar/wp-content/uploads/2021/02/cel-desktop-a.jpg" alt="phone" />
            <div>
              <h4>Páginas web</h4>
              Optimizadas para dispositivos móviles
              Visualización normal desde una computadora y con funciones App si se ingresa desde un SmartPhone.

              Al visualizar la página desde el celular, el cliente vera tu sitio con el contenido adaptado a dispositivos móviles, además el sitio puede conectar con Apps del Smartphone, por eso podrán contactarte por WhatsApp, o abrir automáticamente el GPS, guiando al cliente a tu negocio, o permitiendo hacer llamadas directas, enviar emails desde el correo registrado en el celular, conexión con tus redes sociales y muchas funciones más.

              El sitio web desde el Smartphone luce como una verdadera App.

              Las posibilidades son realmente infinitas!
              Páginas web - Diseño Web - Tiendas online
            </div>
          </div>
          <div className='cajaDisp'>
          <div>
            <h4>Diseño Web responsive</h4>
            Tu Pagina web necesita verse bien en smartphones?
            Más del 90 % de los usuarios de Internet usan un Smartphone para navegar en la web.

            Si tu sitio es difícil de ver en un Smartphone, las probabilidades del que el usuario abandone el sitio son altas.

            Mejora la experiencia del cliente al poder contactarte por llamadas directas o por WhatsApp, mensajes de texto  y mucho mas!

            Un Sitio Web Responsive, implementa una técnica de diseño web cuyo objetivo es lograr una correcta visualización de una página web en diferentes dispositivos, como teléfonos celulares, tablets, laptops, computadoras de escritorios e incluso Smart TVs.

            Un sitio web hace que tu negocio sea real
            </div>
            <img className='imgLog' src="https://nubelab.com.ar/wp-content/uploads/2021/01/iPhone-12-1.png" alt="phones" />
          </div>
        </div>
        <br />
        <div>
        <div className="cajaWeb">
            <h4>Proyectos Realizados </h4>
            <h6>A continuación les mostramos algunos de nuestros trabajos realizados de diseño de páginas web. Hacemos diseño web en Argentina y para cualquier parte del mundo. También ofrecemos servicios de mantenimiento y optimización de sitios web realizados en javascript.
            </h6>
        </div>
          
          {/* <div className='web'>
            <div className='proyect'> 
              <img className='proyTre' src="https://lh3.googleusercontent.com/duRvQmkJ9ofoq21TngGQyX0yvfoc9i3PvJJEIesLHz3Zi3nZljaaToR-P7PCyQJDQA-Ud9bOh549pbeq1FcF652f33ImIFvoowXNo-loWQ" alt="imagenempanadas" />
              <img src="https://edrweb.com.ar/wp-content/uploads/2022/03/wala.webp" alt="imagenpizzados" />
              <img className='proy' src="https://user-images.githubusercontent.com/94568781/224850429-16c83c1b-33c5-43b2-9026-914058036283.png" alt="imagenhamburguesa" />
              <img src="https://edrweb.com.ar/wp-content/uploads/2022/12/hmg.webp" alt="imagenpapas" />
            </div>
          
        </div> */}
        </div>


        <div class="wrapper">
  <div class="slider" id="slider">
    <ul class="slides">
      <li class="slide" id="slide1">
        <a  href="#">
          <p  class="caption"></p>
          <img src={foto1} alt="homevideo"/>
        </a>
      </li>
      <li class="slide" id="slide2">
        <a  href="#">
          <p  class="caption"></p>
          <img src={foto2} alt="ecommercebmw"/>
        </a>
      </li>
      <li class="slide" id="slide3">
        <a href="#">
          <p  class="caption"></p>
          <img src={foto3} alt="Seguridad"/>
        </a>
      </li>
      <li class="slide" id="slide4">
        <a href="#">
          <p  class="caption"></p>
          <img src={foto4} alt="Muebleria"/>
        </a>
      </li>
      <li class="slide" id="slide5">
        <a href="#">
           <p  class="caption"></p>
           <img src={foto5} alt="Eventos"/>
        </a>
      </li>
      <li class="slide" id="slide6">
        <a href="#">
          <p  class="caption"></p>
          <img  src={foto6} alt="Casino Online"/>
        </a>
      </li>
    </ul>
     {/* <ul class="slider-controler">
      <li><a href="#slide1">.</a></li>
      <li><a href="#slide2">.</a></li>
      <li><a href="#slide3">.</a></li>
      <li><a href="#slide4">.</a></li>
      <li><a href="#slide5">.</a></li>
    </ul>  */}
  </div>
</div>

        <div className='cajaPie'>
        <a style={{ width:"auto"}} href="https://api.whatsapp.com/send?phone=1176351958">  

        <div className='piePag'>
          Whatsapp
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
</svg>
        </div>
        </a>
        <div className='piePag'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
  <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
</svg>
      <div>tusitiojml@gmail.com
      </div>
        </div>
        <div className='piePag'>
          <a href="https://www.instagram.com/tusitiojml_/">
        Instagram
        <br />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
          </svg>
          </a>
      </div>
      </div>
  </div> 
  </div>
  );
}



