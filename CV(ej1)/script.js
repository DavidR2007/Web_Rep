

  //Dark Mode Function

  function cambiartema() 
  {
    const body = document.body;
    const button = document.getElementById("cambiartema");
  
    body.classList.toggle("dark-mode");
  
    if (body.classList.contains("dark-mode")) 
    {
      button.textContent = "☀️";
    } else 
    {
      button.textContent = "🌙";
    }
  }

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

inputNombre.addEventListener("input", () => validarInput(inputNombre));
inputEmail.addEventListener("input", () => validarInput(inputEmail));

