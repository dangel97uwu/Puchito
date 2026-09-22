document.addEventListener("DOMContentLoaded", () => {
  const flores = document.getElementById("flores");
  const puchito = document.getElementById("puchito");
  const cancion = document.getElementById("cancion");

  let mostrandoFlores = true;

  function girarImagen() {
    if (mostrandoFlores) {
      flores.classList.add("animar-giro");
      setTimeout(() => {
        flores.style.display = "none";
        puchito.style.display = "block";
        puchito.classList.add("animar-giro");
        mostrandoFlores = false;
      }, 600);
    } else {
      reyna.classList.add("animar-giro");
      setTimeout(() => {
        puchito.style.display = "none";
        flores.style.display = "block";
        flores.classList.add("animar-giro");
        mostrandoFlores = true;
      }, 600);
    }
  }

  // Al hacer clic en cualquiera de las imágenes
  [flores, puchito].forEach(img => {
    img.addEventListener("click", () => {
      if (cancion.paused) {
        cancion.play();
      }
      girarImagen();
    });
  });
});
