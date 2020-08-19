window.onload = function() {
  let glr = document.querySelector('.company-gallery');
  let glrItems = glr.querySelectorAll('.company-gallery__figure');
  let arrImg = [];

  if (glrItems) {
    console.log(glrItems.length);
    for (let i=0; i < glrItems.length; i++) {
      let glrTotal = glrItems[i].querySelector('.total-item');
      glrTotal.innerText = glrItems.length;
      let glrCount = glrItems[i].querySelector('.count-item');
      glrCount.innerText = i+1;

      arrImg.push(glrItems[i].querySelector('.company-gallery__img').getAttribute('src'));
    }
  }

  glr.onclick = function showGlr(event) {
    let target = event.target;
    if (target.tagName != 'BUTTON') return;
    let backdrop = document.querySelector('.slider');
    backdrop.classList.remove('close');
    backdrop.classList.add('open');

    let iconClose = document.querySelector('.slider-close');
    iconClose.onclick = function closeGlr(event) {
      let target = event.target;
      if (target.tagName != 'BUTTON') return;
      backdrop.classList.remove('open');
      backdrop.classList.add('close');
    }

    let imgSrc = target.previousSibling.getAttribute('src');
    let imgSlider = document.querySelector('.slider-img');
    imgSlider.setAttribute('src', imgSrc);
    
    let imgCurrent = imgSlider.getAttribute('src');
    let imgIndex = arrImg.indexOf(imgCurrent);
    let sliderTotal = document.querySelector('.slider-count__total');
    sliderTotal.innerText = arrImg.length;
    let sliderItem = document.querySelector('.slider-count__item');
    sliderItem.innerText = imgIndex+1;
    
    let arrowL = document.querySelector('.left');
    arrowL.onclick = function showLeft() {
      if (imgIndex == 0) {
        imgIndex = arrImg.length;
      }  
      imgIndex--;
      imgSlider.setAttribute('src', arrImg[imgIndex]);
      sliderItem.innerText = imgIndex+1;
    }
    let arrowR = document.querySelector('.right');
    arrowR.onclick = function showRight() { 
      imgIndex++;
      if (imgIndex == arrImg.length) {
        imgIndex = 0;
      } 
      imgSlider.setAttribute('src', arrImg[imgIndex]);
      sliderItem.innerText = imgIndex+1;
    }
  }; 
};