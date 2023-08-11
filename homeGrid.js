const homeGrid = document.getElementById('homeGrid');

// Array of image URLs
const imageUrls = [
  'images/pushchair.jpg',
  'images/billboards.jpg',
  'images/collage.jpg',
  'images/easycss.jpg',
  'images/geogen.jpg',
  'images/oldnewz-kick.gif',
  'images/iart.jpg',
  'images/presetloop.jpg',
  'images/procreate.jpg',
  'images/stories.jpg',
  'images/vertical.jpg',
  'images/dehaze.jpg',
];



  imageUrls.forEach((imageUrl) => {
  const divElement = document.createElement('div');
  divElement.classList.add('grid-item'); 

  const imgElement = document.createElement('img');
  imgElement.src = imageUrl;
  imgElement.alt = 'Image';

  divElement.appendChild(imgElement);
  homeGrid.appendChild(divElement);
});


