document.addEventListener("DOMContentLoaded", function () {
  const textoAnimado = document.getElementById("text");
  const textoOriginal = textoAnimado.innerHTML;

  textoAnimado.innerHTML = "";

  for (let i = 0; i < textoOriginal.length; i++) {
    setTimeout(function () {
      textoAnimado.innerHTML += textoOriginal.charAt(i);
    }, 30 * i);
  }
});
