// Lista de imágenes disponibles
const imagenes = [
    "Foto.png",
    "Foto1.png",
    "Foto3.png",
    "Foto4.png"
];


// Número de fotos rebotando
const cantidad = 5;

// Array donde guardaremos cada objeto
const objetos = [];

// Crear varios elementos <img> dinámicamente
for (let i = 0; i < cantidad; i++) {

    const img = document.createElement("img");
    img.src = imagenes[i % imagenes.length];
    img.className = "pelota";
    document.body.appendChild(img);

    objetos.push({
        elemento: img,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() * 4) + 2,
        vy: (Math.random() * 4) + 2,
        indice: i % imagenes.length
    });
}

function animar() {

    const ancho = window.innerWidth;
    const alto = window.innerHeight;

    for (let obj of objetos) {

        obj.x += obj.vx;
        obj.y += obj.vy;

        const w = obj.elemento.offsetWidth;
        const h = obj.elemento.offsetHeight;

        let rebote = false;

        if (obj.x <= 0 || obj.x + w >= ancho) {
            obj.vx *= -1;
            rebote = true;
        }

        if (obj.y <= 0 || obj.y + h >= alto) {
            obj.vy *= -1;
            rebote = true;
        }

        if (rebote) {
            obj.indice = (obj.indice + 1) % imagenes.length;
            obj.elemento.src = imagenes[obj.indice];
        }

        obj.elemento.style.left = obj.x + "px";
        obj.elemento.style.top = obj.y + "px";
    }

    requestAnimationFrame(animar);
}

animar();
