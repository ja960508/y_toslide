function navigate_slide(dir)
{
  //parent.sunny.navigate_slide(dir);
  parent.sunny.get_next_or_prev_image(dir,function(idx){
    if(idx ==-1)
      return;
    
    
    document.getElementById("img_collection").contentWindow.do_when_click_img(idx);
  });

}
function openToolContents(id) {
  /*
    <iframe class="iframe-cotents"  id="img_collection"  src="../../tunggary/image.html" frameborder="0"  ></iframe>
          <!--<iframe src="../tunggary/attendance.html" id="attendance_collection" class="attendance-iframe" style="display: none;" frameborder="0"></iframe>-->
          <iframe src="../../tunggary/attendance.html" id="attendance_collection" class="attendance-iframe" style="display: none;" frameborder="0"></iframe>
          <iframe src="../../tunggary/file.html" id="presentation_collection"  class="folders-iframe" style="display: none;" frameborder="0"></iframe>
    */

  if(id =="slide_mode")
  {
  
    parent.sunny.get_auto_mode(function(mode){
      parent.sunny.set_auto_mode(!mode);
      if(!mode)
      {
        document.getElementById("slide_mode").style.backgroundImage = "url('mob_controll_img/m_button_auto@2x.png')";
        
      }
      else
      {
        document.getElementById("slide_mode").style.backgroundImage = "url('mob_controll_img/구성 요소 122 – 1@2x.png')";
      }
    });
    return;
    
  }
  if(id =="holding")
  {
    if(document.getElementById("holding").classList.contains("off"))
    {
      document.getElementById("holding").classList.remove("off");
      document.getElementById("holding").innerHTML ="   <img src='mob_controll_img/button_hideUI_on.svg' alt='' />";
      parent.sunny.set_holding_mode(true);
    }
    else{
      document.getElementById("holding").classList.add("off");
      document.getElementById("holding").innerHTML ="   <img src='mob_controll_img/button_hideUI_off.svg' alt='' />";
      parent.sunny.set_holding_mode(false);
    }
  }
  document.getElementById('attendance_collection').style.display = 'none';
  document.getElementById('presentation_collection').style.display = 'none';
  document.getElementById('img_collection').style.display = 'none';

  switch (id) {
    case 'collect_btn':
      console.log('collect');
      break;
    case 'file_btn':
      document.getElementById('presentation_collection').style.display =
        'block';
        call_height_adjust();
        
      try {
        parent.open_presentation_folder();
      } catch (err) {}
      break;
      
    case 'picture_btn':
      document.getElementById('img_collection').style.display = 'block';
      break;
    case 'ptct_btn':
      document.getElementById('attendance_collection').style.display = 'block';

      parent.update_attendance_list();
      call_height_adjust();
      break;
    case 'setting_btn':
      document.querySelector('.option_bottom').classList.toggle('off');
      break;
  }
}
