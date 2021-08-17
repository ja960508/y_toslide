function changeBackground(mode) {
  
  const btns = document.querySelectorAll('.background-mode-btn');
  const selectedBtn = document
    .querySelector('.background-mode-options')
    .querySelector('.selected');
  const contentImageSource = document.getElementById('image_content').src;
  const backgroundImage = document.getElementById('bg_v2');
  const backgroundImage_twin = document.getElementById('bg_v2_twin');
  //const background = document.getElementById('background_box');

  if (selectedBtn.id !== mode) {
    btns.forEach((btn) => {
      btn.id === mode
        ? btn.classList.add('selected')
        : btn.classList.remove('selected');
    });

    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("yestoslide_blur_mode", mode);

      console.log(localStorage.getItem("yestoslide_blur_mode"));
      
    } 


    switch (mode) {
      
      case 'background_blur':
        backgroundImage.src = contentImageSource;
        backgroundImage_twin.src = contentImageSource;
        //background.style.backgroundColor = 'white';
        break;
      case 'background_black':
        backgroundImage.src = './src/images/black.jpg';
        backgroundImage_twin.src  = './src/images/black.jpg';
        //background.style.backgroundColor = 'black';
        break;
      case 'background_white':
        backgroundImage.src = './src/images/white.jpg';
        backgroundImage_twin.src  = './src/images/white.jpg';
        //background.style.backgroundColor = 'black';
        
        break;
    }
  }
}
