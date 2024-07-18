const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalBackButton = document.getElementById('modalBackButton');
const zoomInButton = document.getElementById('zoomIn');
const zoomOutButton = document.getElementById('zoomOut');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        modal.style.display = 'flex';
        modalImage.src = this.src;
        modalImage.style.transform = 'scale(1)'; 
    });
});

modalBackButton.addEventListener('click', function() {
    modal.style.display = 'none';
    modalImage.style.transform = 'scale(1)';
});

zoomInButton.addEventListener('click', function() {
    let scale = parseFloat(modalImage.style.transform.replace('scale(', '').replace(')', '')) || 1;
    scale += 0.1;
    modalImage.style.transform = `scale(${scale})`;
});

zoomOutButton.addEventListener('click', function() {
    let scale = parseFloat(modalImage.style.transform.replace('scale(', '').replace(')', '')) || 1;
    scale -= 0.1;
    if (scale < 1) scale = 1; 
    modalImage.style.transform = `scale(${scale})`;
});
