window.onload = function() {
  let glr = document.querySelector('.company-gallery');
  let glrItems = glr.querySelectorAll('.company-gallery__figure');
  if (glrItems) {
    console.log(glrItems.length);
    for (let i=0; i < glrItems.length; i++) {
      let glrTotal = glrItems[i].querySelector('.total-item');
      glrTotal.innerText = glrItems.length;
      let glrCount = glrItems[i].querySelector('.count-item');
      glrCount.innerText = i+1;
    }
  }

  glr.onclick = function showItem(event) {
    let target = event.target;
    if (target.tagName != 'BUTTON') return;
    let backdrop = document.createElement('div');
    document.body.appendChild(backdrop);
    backdrop.style.cssText = `position: fixed;
                              background-color: rgba(66,66,66,0.5);
                              width: 100vw;
                              height: 100vh;
                              z-index:30;`;

    let iconClose = document.createElement('span');
    backdrop.appendChild(iconClose);
    iconClose.innerText = "X";
    iconClose.style.cssText = `position: fixed;
                              color: #FFFFFF;
                              width: 5vw;
                              height: 5vh;
                              top: 10px;
                              right: 10px;
                              cursor: pointer;
                              z-index:40;`;
                              
    iconClose.onclick = function closeItem(event) {
      let target = event.target;
      if (target.tagName != 'SPAN') return;
      backdrop.style.display = "none";
    }
  }; 

};