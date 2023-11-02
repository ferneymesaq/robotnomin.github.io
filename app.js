const open = document.getElementById("open");
const contener_modal = document.getElementById("contener_modal");
const close = document.getElementById("close");

open.addEventlistener("click" , () => {
    contener_modal.classList.add("show");
    alert("prueba");
});

close.addEventlistener("click", () => {
    contener_modal.classList.remove("show");
});

