const headers = document.querySelectorAll('.accordion-header');
headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

const images = document.querySelectorAll('.accordion-content img');
const modal = document.getElementById('galleryModal');
const modalImage = document.getElementById('modalImage');
let currentImageIndex = 0;
let imageList = [];

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    imageList = Array.from(img.parentElement.querySelectorAll('img'));
    currentImageIndex = imageList.indexOf(img);
    modalImage.src = img.src;
    modal.style.display = 'flex';
  });
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + imageList.length) % imageList.length;
  modalImage.src = imageList[currentImageIndex].src;
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % imageList.length;
  modalImage.src = imageList[currentImageIndex].src;
});

modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target === modalImage) {
    modal.style.display = 'none';
  }
});