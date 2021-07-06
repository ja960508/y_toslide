function changeImage(target) {
  const selectedBtn = document.querySelector(`#${target}`);
  const image = selectedBtn.querySelector('img');

  if (selectedBtn.classList.contains('off')) {
    image.src = `./src/images/tool_box2/${target}_on.svg`;
    selectedBtn.classList.toggle('off');
  } else {
    image.src = `./src/images/tool_box2/${target}_off.svg`;
    selectedBtn.classList.toggle('off');
  }
}

function handleSlideBtnClick(btn) {
  switch (btn) {
    case 'slide_back_btn':
      alert('slide_prev');
      break;
    case 'slide_next_btn':
      alert('slide_next');
      break;
    case 'slide_mode_select_btn':
      const selectedBtn = document.querySelector(`#${btn}`);
      const image = selectedBtn.querySelectorAll('img');

      if (selectedBtn.classList.contains('manual')) {
        image[0].src = `./src/images/tool_box1/button_slide_auto.svg`;
        image[1].src = `./src/images/tool_box1/auto_hover.svg`;
        selectedBtn.classList.toggle('manual');
      } else {
        image[0].src = `./src/images/tool_box1/button-manual-slides-show.svg`;
        image[1].src = `./src/images/tool_box1/manual_hover.svg`;
        selectedBtn.classList.toggle('manual');
      }
      break;
    case 'settings_btn':
      alert('opensettings');
      break;
  }
}

function handleBasicToolsClick(btn) {
  switch (btn) {
    case 'collecting_btn':
      const selectedBtn = document.querySelector(`#${btn}`);
      const images = selectedBtn.querySelectorAll('img');
      if (selectedBtn.classList.contains('off')) {
        images[0].src = `./src/images/tool_box2/button_collecting_on.svg`;
        images[1].src = `./src/images/tool_box2/collecting_hover.svg`;
        selectedBtn.classList.toggle('off');
      } else {
        images[0].src = `./src/images/tool_box2/button_collecting_off.svg`;
        images[1].src = `./src/images/tool_box2/collecting_stop_hover.svg`;
        selectedBtn.classList.toggle('off');
      }
      break;
    case 'button_openfile':
      changeImage(btn);
      break;
    case 'button_images_videos':
      changeImage(btn);
      break;
    case 'button_makeavideo':
      changeImage(btn);
      break;
    case 'button_participants':
      changeImage(btn);
      break;
    case `button_hideUI`:
      changeImage(btn);
      break;
  }
}
