// create variable for the modal
const modalContainer = document.getElementById('theModal');

// create variable for images to put inside modal
// const images = document.getElementById('modal-image');
// console.log(images);

// variable for modal image
const modalImage = document.getElementById('img1');

// variable for caption text 
const text = document.getElementById('caption');

const images = document.querySelectorAll('img');
Array.from(images).forEach((image, index) => {
    image.addEventListener('click', function(){
        modalContainer.style.display = 'flex';
        modalImage.src = this.src;
        text.innerHTML = this.alt;
    })
});

// images.addEventListener('click', function (){
//     modalContainer.style.display = "block";
//     modalImage.src = this.src; 
//     text.innerHTML = this.alt;
// })