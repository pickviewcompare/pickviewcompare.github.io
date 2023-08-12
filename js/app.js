const modal = document.getElementById('imageModal');
const modalContent = document.querySelector('.modal-content');
const carousel = document.getElementById('imageCarousel');
let isArrowAnimationTriggered = false;

async function generateGrid() {
  const homeGrid = document.getElementById('homeGrid');

  try {
    const response = await fetch('../images/homeGrid.json');
    const data = await response.json();

    data.forEach(({ imageUrl, imageName, artist }) => {
      const divElement = document.createElement('div');
      divElement.classList.add('grid-item');

      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      imgElement.alt = 'Image';

      const paragraphElement = document.createElement('p');
      paragraphElement.classList.add("artist");
      paragraphElement.textContent = artist;

      imgElement.addEventListener('click', async () => {
        await openModal(imageName, imageUrl);
        await createImageElements(carousel, imageName);
      });

      divElement.appendChild(imgElement);
      divElement.appendChild(paragraphElement);
      homeGrid.appendChild(divElement);
    });
  } catch (error) {
    console.error('Error fetching image URLs:', error);
  }
}

function closeModal() {
  modal.style.display = 'none';
  document.body.classList.remove('no-scroll');
}

async function openModal(imageName, imageUrl) {
  try {
    const jsonUrl = `../images/${imageName}.json`;

    const response = await fetch(jsonUrl);
    const imageUrls = await response.json();

    const filteredImageUrls = imageUrls.filter(url => url !== imageName);

    modalContent.innerHTML = '';

    modal.style.display = 'flex';
    document.body.classList.add('no-scroll');

    if (!isArrowAnimationTriggered) {
      modal.classList.add('modal-arrow');
      isArrowAnimationTriggered = true;
        
      setTimeout(() => {  
          modal.classList.remove('modal-arrow');
      }, 3000);
    }
    
    const newCarousel = document.createElement('div');
    newCarousel.id = 'imageCarousel';
    newCarousel.classList.add('carousel');

    const clickedImgElement = document.createElement('img');
    clickedImgElement.src = imageUrl;
    clickedImgElement.alt = 'Image';
    newCarousel.appendChild(clickedImgElement);

    filteredImageUrls.forEach((url) => {
      const img = document.createElement('img');
      img.src = url;
      img.alt = 'Image';
      newCarousel.appendChild(img);
    });
    
    modalContent.appendChild(newCarousel);

    // Set the scroll position of the newCarousel to the beginning
    newCarousel.scrollLeft = 0;

  } catch (error) {
    console.error('Error fetching image URLs:', error);
  }
}

async function createImageElements(carousel, imageName) {
  try {
    const jsonUrl = `../images/${imageName}.json`;

    const response = await fetch(jsonUrl);
    const imageUrls = await response.json();

    carousel.innerHTML = '';

    imageUrls.forEach((url) => {
      const img = document.createElement('img');
      img.src = url;
      img.alt = 'Image';
      carousel.appendChild(img);
    });

    const totalWidth = imageUrls.length * 100; 
    carousel.style.width = `${totalWidth}%`;
  } catch (error) {
    console.error('Error fetching image URLs:', error);
  }
}

modalContent.addEventListener('click', closeModal);

generateGrid();
