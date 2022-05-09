const scrollableSlider = document.getElementById('scrollable-slider');

const TRESHOLD_START = 500; //setup first pixel where to start slider to change slides on scroll 

const CHANGE_IMAGE_VALUE = 150; //how many pixels we need to scroll before slide change

const TRESHOLD_END = 1000; //setup last pixel where slider is scrolling

const images = document.querySelectorAll('.image-wrapper');

let currentImageIndex = 0;

const getCurrentImageIndexBasedOnScoll = (scrollFromTresholdStart) => {
  const checkForNewIndex = Math.floor(scrollFromTresholdStart / CHANGE_IMAGE_VALUE);
  
  return checkForNewIndex > images.length - 1 ? currentImageIndex : checkForNewIndex;
}

document.addEventListener('scroll', (event) => {
  if (pageYOffset >= TRESHOLD_START && pageYOffset <= TRESHOLD_END) {
    const scrollFromTresholdStart = pageYOffset - TRESHOLD_START;
    
    const newImageIndex = getCurrentImageIndexBasedOnScoll(scrollFromTresholdStart);
    
    if (currentImageIndex !== newImageIndex) {
      images[currentImageIndex].classList.toggle('active');
      images[newImageIndex].classList.toggle('active');
      
      currentImageIndex = newImageIndex;
    }

  }
})