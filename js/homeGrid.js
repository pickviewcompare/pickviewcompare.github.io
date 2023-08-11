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
  });
}

// Export the generateGrid function as a property of the global object
window.generateGrid = generateGrid;




