'use strict';

function renderAllPictures(data) {
  
}

fetch('http://localhost:3000/api/pictures/')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderAllPictures(data);    
  });