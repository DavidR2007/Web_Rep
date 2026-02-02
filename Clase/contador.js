let valor = 0;

const contador = document.getElementById("contador");
const galleta = document.getElementById("galleta");

galleta.addEventListener("click", () => {
    valor++;
    contador.textContent = valor;
});
