
// Toggle Menu
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

function toggleMenu() {
  console.log("Menu button clicked");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

// Handle Window Resize
function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

// Image Viewer
function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
  </div>`;
}

function viewHandler(event) {
  const target = event.target;
  console.log("Gallery clicked", target);
  if (target.tagName === 'IMG') {
    console.log("Image clicked", target);
    const src = target.src.split('-')[0] + '-full.jpeg';
    const alt = target.alt;
    document.body.insertAdjacentHTML('afterbegin', viewerTemplate(src, alt));
    document.querySelector('.close-viewer').addEventListener('click', closeViewer);
  }
}

function closeViewer() {
  console.log("Close viewer clicked");
  const viewer = document.querySelector('.viewer');
  if (viewer) {
    viewer.remove();
  }
}

document.querySelector('.gallery').addEventListener('click', viewHandler);

