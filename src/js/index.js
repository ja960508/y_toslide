function changeImage(target) {
  const btns = document.querySelectorAll('.section-tool-btn');
  const selectedBtn = document.querySelector(`#${target}`);
  const image = selectedBtn.querySelector('img');

  if (selectedBtn.classList.contains('off')) {
    btns.forEach((item) => {
      if (!item.classList.contains('off')) {
        item.classList.add('off');
        item.querySelector(
          'img'
        ).src = `./src/images/tool_box2/${item.id}_off.svg`;
      }
    });
    image.src = `./src/images/tool_box2/${target}_on.svg`;
    selectedBtn.classList.toggle('off');
  } else {
    image.src = `./src/images/tool_box2/${target}_off.svg`;
    selectedBtn.classList.toggle('off');
  }
}

function openToolSection(target) {
  const frameAddress = {
    button_openfile: 'https://tunggary.github.io/YesToSlide/file.html',
    button_images_videos: 'https://tunggary.github.io/YesToSlide/image.html',
    button_makeavideo: '',
    button_participants: 'https://tunggary.github.io/YesToSlide/attendance',
    button_hideUI: '',
  };
  const toolbox = document.querySelector('.tool-contents');
  const iFrame = document.querySelector('.attendance-iframe');
  const selectedElement = document.querySelector(`#${target}`);

  if (selectedElement.classList.contains('off')) {
    toolbox.classList.add('open');
    iFrame.src = frameAddress[target];
  } else {
    toolbox.classList.remove('open');
    iFrame.src = '';
  }
}

function closeToolSection(target) {}

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
        image[0].src = `./src/images/tool_box1/button-selected-slides-show.svg`;
        image[1].src = `./src/images/tool_box1/manual_hover.svg`;
        selectedBtn.classList.toggle('manual');
        selectedBtn.classList.toggle('selected');
      } else if (selectedBtn.classList.contains('selected')) {
        image[0].src = `./src/images/tool_box1/button_slide_auto.svg`;
        image[1].src = `./src/images/tool_box1/auto_hover.svg`;
        selectedBtn.classList.toggle('selected');
        selectedBtn.classList.toggle('auto');
      } else {
        image[0].src = `./src/images/tool_box1/button-manual-slides-show.svg`;
        image[1].src = `./src/images/tool_box1/manual_hover.svg`;
        selectedBtn.classList.toggle('auto');
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
      openToolSection(btn);
      changeImage(btn);
      break;

    case 'button_images_videos':
      openToolSection(btn);
      changeImage(btn);
      break;

    case 'button_makeavideo':
      openToolSection(btn);
      changeImage(btn);
      break;

    case 'button_participants':
      openToolSection(btn);
      changeImage(btn);
      break;

    case `button_hideUI`:
      changeImage(btn);
      break;
  }
}
