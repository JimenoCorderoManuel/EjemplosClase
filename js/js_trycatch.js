const form = document.getElementById("form");
const input = document.getElementById("nombre");
const msg = document.getElementById("mensaje");

form.addEventListener("submit", (e)=>{

    e.preventDefault();

    msg.textContent = `Bienvenido usuario: ${input.value} a tu sistema de inscripciones `;
    msg.style.color = "green";
})
