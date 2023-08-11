  const homeGridImageUrls = [
    '../images/home-grid/pushchair.jpg',
    '../images/home-grid/billboards.jpg',
    '../images/home-grid/collage.jpg',
    '../images/home-grid/easycss.jpg',
    '../images/home-grid/geogen.jpg',
    '../images/home-grid/oldnewz-kick.gif',
    '../images/home-grid/iart.jpg',
    '../images/home-grid/presetloop.jpg',
    '../images/home-grid/procreate.jpg',
    '../images/home-grid/stories.jpg',
    '../images/home-grid/vertical.jpg',
    '../images/home-grid/dehaze.jpg',
  ];

function generateGrid() {
  const homeGrid = document.getElementById('homeGrid');

  homeGridImageUrls.forEach((imageUrl) => {
    const divElement = document.createElement('div');
    divElement.classList.add('grid-item');

    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = 'Image';

    divElement.appendChild(imgElement);
    homeGrid.appendChild(divElement);

    const imgElements = document.querySelectorAll('img');
    const socials = document.querySelector('.socials')
    
      imgElements.forEach((img) => {
        if(!socials.contains(img)){
          img.addEventListener('click', () => {
          openModal();
        });
      }
    });
  });
}

function openModal() {
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

generateGrid();