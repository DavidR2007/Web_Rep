

  //Dark Mode Program

  function cambiartema() {
    const body = document.body;
    const button = document.getElementById("cambiartema");
  
    body.classList.toggle("dark-mode");
  
    if (body.classList.contains("dark-mode")) {
      button.textContent = "☀️";
    } else {
      button.textContent = "🌙";
    }
  }
    
