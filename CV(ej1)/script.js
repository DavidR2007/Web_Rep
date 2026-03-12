

  // Dark Mode: cambiar tema y guardar preferencia

  function aplicartemaGuardado() 
  {
    const body = document.body;
    const button = document.getElementById("cambiartema");
    const temaGuardado = localStorage.getItem("tema") || "claro";

    if (temaGuardado === "oscuro") {
      body.classList.add("dark-mode");
      if (button) button.textContent = "☀️";
    } else {
      body.classList.remove("dark-mode");
      if (button) button.textContent = "🌙";
    }
  }

  function cambiartema() 
  {
    const body = document.body;
    const button = document.getElementById("cambiartema");
    if (!button) return;

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      button.textContent = "☀️";
      localStorage.setItem("tema", "oscuro");
    } else {
      button.textContent = "🌙";
      localStorage.setItem("tema", "claro");
    }
  }

  // Aplicamos el tema guardado al cargar cada página
  aplicartemaGuardado();
/* Trivia */

const respostes = document.querySelectorAll(".resposta");

respostes.forEach(resposta => {
    resposta.addEventListener("click", () => {
        const valor = resposta.dataset.valor;

        if (valor === "correcte") {
            resposta.classList.add("resposta-correcta");
        } else {
            resposta.classList.add("resposta-incorrecta");
        }
    });
});



/* Contact Log-In */

const inputNombre = document.querySelector("#input-nombre");
const inputEmail = document.querySelector("#input-email");

function validarInput(input) {
    if (input.checkValidity()) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}

// Solo añadimos los eventos en las páginas donde existan estos inputs
if (inputNombre && inputEmail) {
    inputNombre.addEventListener("input", () => validarInput(inputNombre));
    inputEmail.addEventListener("input", () => validarInput(inputEmail));
}

/* Cómo funciona script.js 
   - Dark Mode:
     La función cambiartema() coge el <body> y el botón con id="cambiartema".
     Alterna la clase "dark-mode" en el body (enciende/apaga modo oscuro)
     y cambia el icono del botón entre 🌙 y ☀️ según el modo activo.

   - Trivia:
     Buscamos todos los elementos con clase "resposta".
     A cada uno le añadimos un "click" que mira el data-valor ("correcte" o "incorrecte").
     Si es correcto, añade la clase "resposta-correcta"; si no, "resposta-incorrecta".

   - Contact Log-In:
     Guardamos las referencias a #input-nombre y #input-email.
     La función validarInput(input) usa checkValidity() para saber si el campo es válido.
     Según el resultado, añade la clase "valid" o "invalid" para cambiar el estilo del input.
     Solo ponemos los listeners "input" si esos campos existen en la página actual.
*/