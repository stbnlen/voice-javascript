const contenido = document.querySelector(".contenido");
const btnGrabarTexto = document.querySelector(".btn-grabar");

/* Primero creamos los objetos para poder grabar nuestra voz con el microfono */
const reconocimientoVoz =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const reconocimiento = new reconocimientoVoz();

/* metodo que se ejecuta al empezar a grabar */
reconocimiento.onstart = () => {
  contenido.innerHTML = "Estamos grabando la voz...";
};

/* Metodo que se ejecuta al terminar la grabación */
reconocimiento.onresult = (event) => {
  let mensaje = event.results[0][0].transcript;
  contenido.innerHTML = mensaje;
  leerTextoCondicionado(mensaje);
};

/* Función que se lanza para locutar lo grabado */
const leerTextoSimple = (mensaje) => {
  const voz = new SpeechSynthesisUtterance();
  voz.text = mensaje;
  window.speechSynthesis.speak(voz);
};

/* Función que condiciona la respuesta dependiendo de el contenido de la grabación */
const leerTextoCondicionado = (mensaje) => {
  const voz = new SpeechSynthesisUtterance();
  if (mensaje.includes("la")) {
    // cambiar esto para condicionar una respuesta
    voz.text = "Wena seba";
  } else {
    voz.text = mensaje;
  }
  window.speechSynthesis.speak(voz);
};

/* Evento para empezar a grabar pulsado el boton */
btnGrabarTexto.addEventListener("click", () => {
  reconocimiento.start();
});
