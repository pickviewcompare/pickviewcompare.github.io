const modal = document.getElementById('imageModal');
const modalContent = document.querySelector('.modal-content');
const carousel = document.getElementById('imageCarousel');

const imageUrls = [
  '../images/home-grid/pushchair.jpg',
  '../images/sisy/bird.jpg',
  '../images/sisy/damn.jpg',
  '../images/sisy/patients.jpg',
  '../images/sisy/copy.jpg',
  '../images/sisy/bird.jpg',
  '../images/sisy/damn.jpg',
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

modalContent.addEventListener('click', closeModal);

createImageElements();
