
let zoomLevel = 1;

function enlargeImage(element) {
    var overlay = document.getElementById('overlay');
    var overlayImage = document.getElementById('overlay-image');
    overlayImage.src = element.querySelector('img').src;
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
    zoomLevel = 1;
    overlayImage.style.transform = `scale(${zoomLevel})`;
}

function shrinkImage() {
    var overlay = document.getElementById('overlay');
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = '0';
}

function zoomIn() {
    var overlayImage = document.getElementById('overlay-image');
    zoomLevel += 0.1;
    overlayImage.style.transform = `scale(${zoomLevel})`;
}

function zoomOut() {
    var overlayImage = document.getElementById('overlay-image');
    if (zoomLevel > 0.1) {
        zoomLevel -= 0.1;
        overlayImage.style.transform = `scale(${zoomLevel})`;
    }
}
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', toggleNav);
closeBtn.addEventListener('click', closeNav);

function toggleNav() {
    nav.classList.toggle('show');
    menuBtn.style.visibility = 'hidden'; 
}

function closeNav() {
    nav.classList.remove('show');
    menuBtn.style.visibility = 'visible'; 
}
