function setLayoutHeight() {
  const body = document.querySelector('body');
  const topBox = document.querySelector('.top_box').offsetHeight;
  const bottomBox = document.querySelector('.bottom_box').offsetHeight;
  const contentBox = document.querySelector('.content_box');

  contentBox.style.height = body.offsetHeight - (topBox + bottomBox) + 'px';
}

window.onload = setLayoutHeight();
