document.addEventListener('DOMContentLoaded', function() {

// modal / carousel swiper
const modal = document.getElementById('imageModal');
const modalContent = document.querySelector('.modal-content');
const carousel = document.getElementById('imageCarousel');

const imageUrls = [
  'bird.jpg',
  'damn.jpg',
  'pushchair.jpg',
  'patients.jpg',
  'copy.jpg',
  'bird.jpg',
  'damn.jpg',
  'pushchair.jpg',
];


function createImageElements() {
  carousel.innerHTML = ''; // Clear existing content
  imageUrls.forEach((url) => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Image';
    carousel.appendChild(img);
  });

  // Adjust the width of the carousel based on the number of images
  const totalWidth = imageUrls.length * 100; // Assuming each image is 100% wide
  carousel.style.width = `${totalWidth}%`;
}

// Call createImageElements() once initially
createImageElements();

const imgElements = document.querySelectorAll('img');
const socials = document.querySelector('.socials')
imgElements.forEach((img) => {
  if(!socials.contains(img)){
    img.addEventListener('click', () => {
    openModal();
  });
  }
});

function openModal() {
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

modalContent.addEventListener('click', closeModal);


generateGrid();



});