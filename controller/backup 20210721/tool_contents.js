function openToolContents(id) {

    /*
    <iframe class="iframe-cotents"  id="img_collection"  src="../../tunggary/image.html" frameborder="0"  ></iframe>
          <!--<iframe src="../tunggary/attendance.html" id="attendance_collection" class="attendance-iframe" style="display: none;" frameborder="0"></iframe>-->
          <iframe src="../../tunggary/attendance.html" id="attendance_collection" class="attendance-iframe" style="display: none;" frameborder="0"></iframe>
          <iframe src="../../tunggary/file.html" id="presentation_collection"  class="folders-iframe" style="display: none;" frameborder="0"></iframe>
    */

    document.getElementById("attendance_collection").style.display = "none";
    document.getElementById("presentation_collection").style.display = "none";
    document.getElementById("img_collection").style.display = "none";
    
   
    switch (id) {
        case 'collect_btn':
            console.log('collect');
            break;
        case 'file_btn':
            
            document.getElementById("presentation_collection").style.display = "block";
            try{
                parent.open_presentation_folder();
              }
              catch(err)
              {
        
              }
            break;
        case 'picture_btn':
            document.getElementById("img_collection").style.display = "block";
            break;
        case 'ptct_btn':
            document.getElementById("attendance_collection").style.display = "block";
            parent.update_attendance_list();
            break;
    }
}