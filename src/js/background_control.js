function changeBackground(mode) {
  const btns = document.querySelectorAll('.background-mode-btn');
  const selectedBtn = document
    .querySelector('.background-mode-options')
    .querySelector('.selected');
  const contentImageSource = document.getElementById('image_content').src;
  const backgroundImage = document.getElementById('background_image_content');
  const background = document.getElementById('background_box');

  if (selectedBtn.id !== mode) {
    btns.forEach((btn) => {
      btn.id === mode
        ? btn.classList.add('selected')
        : btn.classList.remove('selected');
    });

    switch (mode) {
      case 'background_blur':
        backgroundImage.src = contentImageSource;
        background.style.backgroundColor = 'white';
        break;
      case 'background_black':
        backgroundImage.src = '';
        background.style.backgroundColor = 'black';
        break;
      case 'background_white':
        backgroundImage.src = '';
        background.style.backgroundColor = 'white';
        break;
    }
  }
}
