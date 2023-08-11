const modal = document.getElementById('imageModal');
const modalContent = document.querySelector('.modal-content');
const carousel = document.getElementById('imageCarousel');
let isArrowAnimationTriggered = false;

async function generateGrid() {
  const homeGrid = document.getElementById('homeGrid');

  try {
    const response = await fetch('../images/home-grid/homeGrid.json');
    const imageUrls = await response.json();

    imageUrls.forEach((imageUrl) => {
      const divElement = document.createElement('div');
      divElement.classList.add('grid-item');

      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      imgElement.alt = 'Image';

// openModal(imageUrl);

      // Create a click event listener for each image
      imgElement.addEventListener('click', async () => {
        await openModal(imageUrl);
        await createImageElements(carousel, imageUrl); // Pass carousel and imageUrl
      });

      divElement.appendChild(imgElement);
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

async function openModal(imageUrl) {
  try {
    // Get the image filename without the extension
    const imageName = imageUrl.split('/').pop().replace('.jpg', '');

    // Construct the JSON file URL based on the clicked image's filename
    const jsonUrl = `../images/${imageName}/${imageName}.json`; // Adjust the path as needed

    const response = await fetch(jsonUrl);
    const imageUrls = await response.json();

    // Remove the clicked image from the array
    const filteredImageUrls = imageUrls.filter(url => url !== imageUrl);

    // Clear existing content
    modalContent.innerHTML = '';

    modal.style.display = 'flex';
    document.body.classList.add('no-scroll');

    // Instruction to user to scroll/swipe right
    if (!isArrowAnimationTriggered) {
      modal.classList.add('modal-arrow');
      isArrowAnimationTriggered = true;
        
      setTimeout(() => {  
          modal.classList.remove('modal-arrow');
      }, 3000);
    }
    
    // Create a new carousel element for the modal
    const newCarousel = document.createElement('div');
    newCarousel.id = 'imageCarousel';
    newCarousel.classList.add('carousel'); // Add the carousel class

    // Append the clicked image to the carousel
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
  } catch (error) {
    console.error('Error fetching image URLs:', error);
  }
}



async function createImageElements(carousel, imageUrl) {
  try {
    // Get the image filename without the extension
    const imageName = imageUrl.split('/').pop().replace('.jpg', '');

    // Construct the JSON file URL based on the clicked image's filename
    const jsonUrl = `../images/${imageName}/${imageName}.json`; // Adjust the path as needed

    const response = await fetch(jsonUrl);
    const imageUrls = await response.json();

    // Clear existing content
    carousel.innerHTML = '';

    imageUrls.forEach((url) => {
      const img = document.createElement('img');
      img.src = url;
      img.alt = 'Image';
      carousel.appendChild(img);
    });

    // Adjust the width of the carousel based on the number of images
    // Assuming each image is 100% wide
    const totalWidth = imageUrls.length * 100; 
    carousel.style.width = `${totalWidth}%`;
  } catch (error) {
    console.error('Error fetching image URLs:', error);
  }
}


modalContent.addEventListener('click', closeModal);

generateGrid();
