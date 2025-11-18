const HATE = [
    "ERES UN HIJUEPUTA",
    "USTED NO SABE HACER NI CHIMBA",
    "NO ME JODA MARICA",
    "MEJOR NO VUELVA A SUBIR NI MIERDA",
    "TODO LE QUEDA COMO UN CULO",
]

const resetTexto = "..."

const hateTexto = document.getElementById("textoHate");
const hater = document.getElementById("hater");

function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  const indHATE = numeroRandom(0, HATE.length);

  hateTexto.innerText = HATE[indHATE];
}


hater.addEventListener("mouseover", function () {
  generarPrediccion();
});

hater.addEventListener("mouseout", function () {
  hateTexto.innerText = resetTexto;
});

