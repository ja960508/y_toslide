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
  document.getElementById('attendance_collection').style.display = 'none';
  document.getElementById('img_collection').style.display = 'none';
  document.getElementById('presentation_collection').style.display = 'none';

  const frameAddress = {
    button_openfile: '../tunggary/file.html',
    button_images_videos: '../tunggary/image.html',
    button_makeavideo: '',
    button_participants: '../tunggary/attendance.html',
    button_hideUI: '',
  };
  const toolbox = document.querySelector('.tool-contents');
  const iFrame = document.querySelector('.attendance-iframe');
  const selectedElement = document.querySelector(`#${target}`);

  if (selectedElement.classList.contains('off')) {
    toolbox.classList.add('open');
    if (target == 'button_participants') {
      document.getElementById('attendance_collection').style.display = 'block';

      try {
        parent.update_attendance_list();
      } catch (err) {}
    } else if (target == 'button_images_videos') {
      document.getElementById('img_collection').style.display = 'block';
    } else if (target == 'button_openfile') {
      document.getElementById('presentation_collection').style.display =
        'block';
      document
        .getElementById('presentation_collection')
        .contentWindow.document.getElementById('fileUl').innerHTML = '';
      try {
        parent.open_presentation_folder();
      } catch (err) {}
    }
    //iFrame.src = frameAddress[target];
  } else {
    toolbox.classList.remove('open');
    document.getElementById('attendance_collection').style.display = 'none';
    document.getElementById('img_collection').style.display = 'none';
    document.getElementById('presentation_collection').style.display = 'none';
    //iFrame.src = '';
  }
}

function hideUI() {
  const toolbox = document.querySelector('.tool-contents');
  toolbox.classList.contains('open') && toolbox.classList.remove('open');

  //document.querySelector('.attendance-iframe').src = '';
  document.querySelector('header').classList.toggle('hide-mode');
  document.querySelector('main').classList.toggle('hide-mode');
  document.querySelector('.slide-tools').classList.toggle('hide-mode');
  document.querySelector('.basic-tools').classList.toggle('hide-mode');
}

function closeToolSection(target) {}

function handleSlideBtnClick(btn) {
  switch (btn) {
    case 'slide_back_btn':
      try {
        parent.sunny.get_prev_slideID(function (slideId) {
          if (slideId != -1) {
            parent.sunny.find_comment_from_spreadsheet_using_google_slideID(
              slideId,
              function (info) {
                if (info.length == 0) {
                  //alert("no info for this picture");
                  //parent.sunny.update_main_slide_image(slideId, null,"imageVideoId","chat_boxID","chat_box_name","chat_box_comment","chat_profileID");
                  parent.sunny.update_main_slide_image(
                    slideId,
                    null,
                    parent.main_iframe,
                    'image_content',
                    'chat_boxID',
                    'chat_box_name',
                    'chat_box_comment',
                    'chat_profileID'
                  );
                  //return;
                } else {
                  console.log(info[0]);
                  //parent.sunny.update_main_slide_image(slideId, info[0],"imageVideoId","chat_boxID","chat_box_name","chat_box_comment","chat_profileID");
                  parent.sunny.update_main_slide_image(
                    slideId,
                    info[0],
                    parent.main_iframe,
                    'image_content',
                    'chat_boxID',
                    'chat_box_name',
                    'chat_box_comment',
                    'chat_profileID'
                  );
                }
              }
            );
          }
        });
      } catch (err) {}

      break;
    case 'slide_next_btn':
      try {
        parent.sunny.get_next_slideID(function (slideId) {
          if (slideId != -1) {
            parent.sunny.find_comment_from_spreadsheet_using_google_slideID(
              slideId,
              function (info) {
                if (info.length == 0) {
                  //alert("no info for this picture");
                  //parent.sunny.update_main_slide_image(slideId, null,"imageVideoId","chat_boxID","chat_box_name","chat_box_comment","chat_profileID");
                  parent.sunny.update_main_slide_image(
                    slideId,
                    null,
                    parent.main_iframe,
                    'image_content',
                    'chat_boxID',
                    'chat_box_name',
                    'chat_box_comment',
                    'chat_profileID'
                  );
                  //return;
                } else {
                  console.log(info[0]);
                  //parent.sunny.update_main_slide_image(slideId, info[0],"imageVideoId","chat_boxID","chat_box_name","chat_box_comment","chat_profileID");
                  parent.sunny.update_main_slide_image(
                    slideId,
                    info[0],
                    parent.main_iframe,
                    'image_content',
                    'chat_boxID',
                    'chat_box_name',
                    'chat_box_comment',
                    'chat_profileID'
                  );
                }
              }
            );
          }
          //parent.document.getElementById("imageVideoId").src = "https://docs.google.com/presentation/d/"+parent.sunny.get_current_presentationID()+"/preview?slide=id."+slideId+"&rm=minimal";
        });
      } catch (err) {}

      break;
    case 'slide_mode_select_btn':
      const selectedBtn = document.querySelector(`#${btn}`);
      const image = selectedBtn.querySelectorAll('img');

      if (selectedBtn.classList.contains('manual')) {
        image[0].src = `./src/images/tool_box1/button_slide_auto.svg`;
        image[1].src = `./src/images/tool_box1/auto_hover.svg`;
        selectedBtn.classList.toggle('manual');
        selectedBtn.classList.toggle('auto');
        try {
          parent.set_auto_mode(true);
        } catch (err) {}
      } else {
        image[0].src = `./src/images/tool_box1/button-manual-slides-show.svg`;
        image[1].src = `./src/images/tool_box1/manual_hover.svg`;
        selectedBtn.classList.toggle('manual');
        selectedBtn.classList.toggle('auto');
        try {
          parent.set_auto_mode(false);
        } catch (err) {}
      }
      break;
    case 'settings_btn':
      document.querySelector('.option-toggle').classList.toggle('off');
      break;
  }
}

function handleBasicToolsClick(btn) {
  try {
    /*
    if(  parent.sunny == null  || !parent.sunny.is_ready_for_everything())
    {
      alert("not11 ready yet");
      return;
    }
    */
  } catch (err) {}

  switch (btn) {
    case 'collecting_btn':
      const selectedBtn = document.querySelector(`#${btn}`);
      const images = selectedBtn.querySelectorAll('img');
      if (selectedBtn.classList.contains('off')) {
        /*
        images[0].src = `./src/images/tool_box2/button_collecting_on.svg`;
        images[1].src = `./src/images/tool_box2/collecting_hover.svg`;
        selectedBtn.classList.toggle('off');
        */

        var r = confirm('Start new collecting?');
        if (r == true) {
          try {
            parent.document
              .getElementById('sunny_spinner')
              .classList.remove('d-none');
            parent.sunny.createNewSlides(function (rst) {
              if (rst) {
                document.getElementById('image_content').src = '';
                images[0].src = `./src/images/tool_box2/button_collecting_on.svg`;
                images[1].src = `./src/images/tool_box2/collecting_hover.svg`;
                selectedBtn.classList.toggle('off');

                setTimeout(
                  parent.check_login_status_for_both_google_and_firebase,
                  3000
                );
              } else {
                alert('fail to create slides');
              }
            });
          } catch (err) {}
        } else {
          return;
        }
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
      hideUI();
      break;
  }
}

function handleCheckboxEvent(id) {
  switch (id) {
    case 'check_sound':
      break;
    case 'check_anonymous':
      break;
    case 'check_message':
      const checkBox = document.querySelector('#check_message');
      const chatBox = document.querySelector('.chat-box');

      checkBox.checked
        ? (chatBox.style.display = 'flex')
        : (chatBox.style.display = 'none');

      break;
  }
}
