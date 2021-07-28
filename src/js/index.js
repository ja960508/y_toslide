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

function closeAllTool()
{
  document.getElementById('attendance_collection').style.display ="none";
  document.getElementById('img_collection').style.display ="none";
  document.getElementById('presentation_collection').style.display ="none";
}
function openToolSection(target) {

  
  closeAllTool();
  
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
    if(target =="button_participants")
    {
      document.getElementById('attendance_collection').style.display ="block";

      try{
        parent.update_attendance_list();
      }
      catch(err)
      {

      }
      
    
   
    }
      
    else if(target =="button_images_videos")
    {
      document.getElementById('img_collection').style.display ="block";
    
    }
      
    else if(target =="button_openfile")
    {
      document.getElementById('presentation_collection').style.display ="block";
      document.getElementById("presentation_collection").contentWindow.document.getElementById("fileUl").innerHTML = "";
      try{
        parent.open_presentation_folder();
      }
      catch(err)
      {

      }
      

    }
    //iFrame.src = frameAddress[target];
  } else {
    toolbox.classList.remove('open');
    document.getElementById('attendance_collection').style.display ="none";
    document.getElementById('img_collection').style.display ="none";
    document.getElementById('presentation_collection').style.display ="none";
    //iFrame.src = '';
  }
}

function hideUI(use_fullScreen=true) {

  const toolbox = document.querySelector('.tool-contents');

  if(use_fullScreen)
  {
    if(document.getElementById("button_hideUI").classList.contains("off"))
    {
      parent.sunny.openFullscreen();
  
    }
    else
    {
      parent.sunny.closeFullscreen();
    }
  }
  

  toolbox.classList.contains('open') && toolbox.classList.remove('open');

  //document.querySelector('.attendance-iframe').src = '';
  document.querySelector('header').classList.toggle('hide-mode');
  document.querySelector('main').classList.toggle('hide-mode');
  document.querySelector('.slide-tools').classList.toggle('hide-mode');
  document.querySelector('.basic-tools').classList.toggle('hide-mode');
}

function closeToolSection(target) {}

function handleSlideBtnClick(btn) {
  


  if(  parent.sunny == null  || !parent.sunny.is_ready_for_everything())
  {
    alert("not ready yet");
    return;
  }
  document.getElementById("guide_div").style.display = "none"; 

  if(!document.querySelector('.option-toggle').classList.contains("off") && btn != "settings_btn" )
  {

    return;
  }
  switch (btn) {
    case 'slide_back_btn':
      try
      {
        parent.sunny.get_next_or_prev_image("prev",function(idx){
          if(idx ==-1)
            return;
          document.getElementById("img_collection").contentWindow.do_when_click_img(idx);
        });
      }
      catch(err)
      {
        console.log(err.message);
      }
        

      
      break;
    case 'slide_next_btn':
      try
      {
        parent.sunny.get_next_or_prev_image("next",function(idx){
          if(idx ==-1)
              return;
          document.getElementById("img_collection").contentWindow.do_when_click_img(idx);
        });
      }
      catch(err)
      {
        console.log(err.message);
      }
      

      break;
    case 'slide_mode_select_btn':
      const selectedBtn = document.querySelector(`#${btn}`);
      const image = selectedBtn.querySelectorAll('img');

      if (selectedBtn.classList.contains('manual')) {
        image[0].src = `./src/images/tool_box1/button_slide_auto.svg`;
        image[1].src = `./src/images/tool_box1/auto_hover.svg`;
        selectedBtn.classList.toggle('manual');
        selectedBtn.classList.toggle('auto');
        try{
          parent.set_auto_mode(true);
        }
        catch(err)
        {

        }
        
      } else {
        image[0].src = `./src/images/tool_box1/button-manual-slides-show.svg`;
        image[1].src = `./src/images/tool_box1/manual_hover.svg`;
        selectedBtn.classList.toggle('manual');
        selectedBtn.classList.toggle('auto');
        try{
          parent.set_auto_mode(false);
        }
        catch(err)
        {

        }
        
      }
      break;
    case 'settings_btn':
      
      closeAllTool();
      document.querySelector('.option-toggle').classList.toggle('off');
      
      break;
  }
}

function handleBasicToolsClick(btn) {

  if(!document.querySelector('.option-toggle').classList.contains("off"))
  {

    return;
  }
  try{

    
    if(  parent.sunny == null  || !parent.sunny.is_ready_for_everything())
    {
      alert("not ready yet");
      return;
    }
    document.getElementById("guide_div").style.display = "none"; 
    
    
  }
  catch(err)
  {

  }

  
  switch (btn) {
    case 'collecting_btn':
      const selectedBtn = document.querySelector(`#${btn}`);
      const images = selectedBtn.querySelectorAll('img');
      if (selectedBtn.classList.contains('off')) {
        
        

        var r = confirm("start collecting?");
        if (r == true) {
          
          parent.sunny.ask_for_informaion_for_new_collecting(function(rst){

            if(rst)
            {

              //parent.sunny.update_explanation(true);
              
            }
            else
            {
              return;
            }
          });
          images[0].src = `./src/images/tool_box2/button_collecting_on.svg`;
          images[1].src = `./src/images/tool_box2/collecting_hover.svg`;
          selectedBtn.classList.toggle('off');
          try{
            //parent.document.getElementById("sunny_spinner").classList.remove("d-none");
            document.getElementById("image_content").src = "";
            //parent.sunny.createNewPresentaion(function(rst){
              //if(rst)
              //{
              //  document.getElementById("image_content").src = "";
                

              //  setTimeout(parent.check_login_status_for_both_google_and_firebase ,3000);
              //}
              ///else
              //{
              //  alert("fail to create slides");
              //}
              
            //});

            
            
            //alert(parent.sunny.get_unused_presentation_ready());
            if(!parent.sunny.get_unused_presentation_ready())
            {
              
              parent.document.getElementById("sunny_spinner").classList.remove("d-none");
              parent.sunny.erase_working_sheet();
              //parent.sunny.set_main_slides_ready_immediately(true);
              setTimeout(parent.check_login_status_for_both_google_and_firebase ,1000);
              
            }
            else
            {
              parent.sunny.update_explanation();
              parent.sunny.set_unused_presentation_ready(false);
              //parent.sunny.set_main_slides_ready_immediately(false);
            }
            parent.sunny.set_collecting_flag(true);
            
            
          }
          catch(err)
          {

            console.log(err.message);
          }
        
          
        } else {
          return;
        }
        
    
        
      } else {

        var r = confirm("stop collecting?");
        if (r == true) {
          selectedBtn.disabled = true;
          parent.sunny.stop_collecting(function(rst){
            images[0].src = `./src/images/tool_box2/button_collecting_off.svg`;
            images[1].src = `./src/images/tool_box2/collecting_stop_hover.svg`;
            selectedBtn.classList.toggle('off');
            selectedBtn.disabled = false;
          });
          
        }
        else
        {
      
          return;
        }

      
       
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
      
      hideUI();
      changeImage(btn);
      
      break;
  }
}
function control_hide(mode)
{
  if(mode)
  {
    if(!document.getElementById("button_hideUI").classList.contains("off"))
    {
      return;
    }
  }
  else
  {
    if(document.getElementById("button_hideUI").classList.contains("off"))
    {
      return;
    }
  }
  hideUI(false);
  changeImage("button_hideUI");
  
  
}