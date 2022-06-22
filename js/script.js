let form = document.querySelector(".frm");
let input = document.querySelector(".frm__input");

let mensaje = document.createElement("p");
mensaje.className = "mensaje";


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(input.value);

    if (input.value === "") {
        // console.log("introduce un correo valido");
        mensaje.textContent = "introduce un correo valido";
        form.insertAdjacentElement("afterend", mensaje);
        mensaje.style.setProperty("color", "red");
        mensaje.style.setProperty("margin", "0 auto 10px 0");
        input.style.setProperty("border-color", "red");

        if (window.matchMedia("(max-width: 400px)").matches) {
            input.insertAdjacentElement("afterend", mensaje);
        }
    }
    else {
        let nodo = document.querySelector(".mensaje");

        if (nodo !== null){
            console.log("el nodo existe y se borro");
            nodo.remove();
            input.style.setProperty("border-color", "hsl(223, 100%, 88%)");
        }
        else {
            console.log("El nodo a eliminar no existe");
        }
    }
})