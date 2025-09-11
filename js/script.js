const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function(){
   navLinks.classList.toggle("active");
   hamburger.classList.toggle("active");
});

const emailButton = document.getElementById("emailButton");
const emailText = document.getElementById("emailText");

emailButton.addEventListener("click", () => {
    if (emailText.style.display === "none") {
        emailText.style.display = "inline";
        // Es la opcion para selecccionar y copiar el gmail
        const range = document.createRange();
        range.selectNode(emailText);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    } else {
        emailText.style.display = "none";
        window.getSelection().removeAllRanges();
    }
});

// desde aqui sigue el constante para el cusor
const cursorShadow = document.querySelector('.cursor-shadow');

document.addEventListener('mousemove', (e) => {
  // Sigue la posición de la sombra para que siga al cursor
  cursorShadow.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});

// para las funciones del header ------------------------------------------
const header = document.querySelector('header');
const inicioSection = document.getElementById('inicio');

let lastScrollY = window.scrollY;
let isCursorAtTop = false;

function isInInicioSection() {
  const inicioRect = inicioSection.getBoundingClientRect();
  return inicioRect.bottom > 0;
}

document.addEventListener('scroll', () => {
  if (isInInicioSection()) {
    // Para mostrar siempre el encabezado en la seccion de inicio
    header.classList.remove('header-hidden');
    console.log('In inicio section - header shown');
  } else {
    // Para ocultar el encabezado al desplazarse hacia abajo fuera del inicio
    if (window.scrollY > lastScrollY) {
      header.classList.add('header-hidden');
      console.log('Scrolling down outside inicio - header hidden');
    } else {
      // Para mostrar encabezado al desplazarse hacia arriba
      header.classList.remove('header-hidden');
      console.log('Scrolling up outside inicio - header shown');
    }
  }
  lastScrollY = window.scrollY;
});

document.addEventListener('mousemove', (e) => {
  if (e.clientY <= 50) {
    // Para mostrar cuando el cursor este cerca de la parte superior, mostrar encabezado
    header.classList.remove('header-hidden');
    isCursorAtTop = true;
    console.log('Cursor near top - header shown');
  } else {
    // Si el cursor esta fuera de la parte superior, ocultar encabezado si está fuera del inicio
    if (!isInInicioSection() && isCursorAtTop) {
      header.classList.add('header-hidden');
      isCursorAtTop = false;
      console.log('Cursor away from top - header hidden');
    }
  }
});


