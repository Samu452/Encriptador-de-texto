function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloAside = document.querySelector(".titulo__aside");
  let parrafoAside = document.querySelector(".parrafo__aside");
  let munecoAside = document.querySelector(".muneco__aside");

  if (texto.length !== 0) {
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

    tituloAside.textContent = "Texto encriptado con éxito";
    parrafoAside.textContent = textoCifrado;
    munecoAside.style.display = "none"; // Ocultar la imagen
  } else {
    munecoAside.style.display = "block"; // Restaurar la imagen
    tituloAside.textContent = "Ningún mensaje fue encontrado";
    parrafoAside.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    swal("¡Ooops!", "Debes ingresar un texto", "warning");
  }
}
function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.querySelector(".titulo__aside");
  let parrafo = document.querySelector(".parrafo__aside");
  let muneco = document.querySelector(".muneco__aside");

  if (texto.length !== 0) {
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");

    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    parrafo.textContent = "";
    muneco.src = ""; // Asegúrate de que esta imagen exista
  } else {
    muneco.src = ""; // Asegúrate de que esta imagen exista
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}
