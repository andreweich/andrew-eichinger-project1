// variable for the modal container
const modalContainer = document.querySelector('.modalContainer');

// variable for modal image
const modalImage = document.querySelector('.modalContent');

// variable for caption text 
const modalText = document.querySelector('.caption');

// variable to grab all images
const images = document.querySelectorAll('img');

// forEach loop 
images.forEach((image, index) => {
    image.addEventListener('click', function(){
        modalContainer.style.display = 'flex';
        modalImage.src = this.src;
        modalText.innerHTML = this.alt;
    })
});

// close button 

const closeModal = document.querySelector('.close');
closeModal.addEventListener('click', function() {
    modalContainer.style.display = "none";
});

