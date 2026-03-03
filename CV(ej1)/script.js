

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

