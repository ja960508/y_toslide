function openToolContents(id) {
  const frameAddress = {
    file_btn: 'https://tunggary.github.io/YesToSlide/file.html',
    picture_btn: 'https://tunggary.github.io/YesToSlide/image.html',
    ptct_btn: 'https://tunggary.github.io/YesToSlide/attendance',
  };
  const iFrame = document.querySelector('#iframe_cotents');

  switch (id) {
    case 'collect_btn':
      console.log('collect');
      break;
    case 'file_btn':
      iFrame.src = frameAddress.file_btn;
      break;
    case 'picture_btn':
      iFrame.src = frameAddress.picture_btn;
      break;
    case 'ptct_btn':
      iFrame.src = frameAddress.ptct_btn;
      break;
    case 'setting_btn':
      document.querySelector('.option_bottom').classList.toggle('off');
  }
}
