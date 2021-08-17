window.onload = function(){
    var set = document.querySelector(".setting_btn");
    var set_img = set.getElementsByTagName("img")[0];
    var collect_img= document.querySelector(".collect_btn").getElementsByTagName("img")[0];
    var openfile_img= document.querySelector(".file_btn").getElementsByTagName("img")[0];
    var parti_img= document.querySelector(".ptct_btn").getElementsByTagName("img")[0];
    var image_img= document.querySelector(".picture_btn").getElementsByTagName("img")[0];
    var manual_btn = document.querySelector(".manual_btn");
    var file_box_list = document.getElementsByClassName("file_box");
    var file_open = document.querySelector(".file_open");
    var pop = document.querySelector(".file_pop");
    var delete_box_list = document.getElementsByClassName("delete_box");
    var no = document.querySelector(".no");
    var yes = document.querySelector(".yes");
    var att_userbox=document.getElementsByClassName("att_user_box")
    var att_delete_box=document.getElementsByClassName("att_delete");
    var att_pop=document.querySelector(".att_pop");
    var attendance=document.querySelector(".attendance");
    var att_yes = document.querySelector(".att_yes");
    var att_no = document.querySelector(".att_no");
    var option_box = document.querySelector(".option_box");
    var image= document.querySelector(".image");

    set_img.addEventListener("click", () => {
        sett_on_off();
    })
    collect_img.addEventListener("click", () => {
        colleting_onoff();
    })
    openfile_img.addEventListener("click", () => {
        openfile_onoff();
    })
    parti_img.addEventListener("click", () => {
        parti_onoff();
    })
    image_img.addEventListener("click", () => {
        image_onoff();
    })
    manual_btn.addEventListener("click",() => {
        change_manual();
    })
    no.addEventListener("click", ()=>{
        none();
    })
    yes.addEventListener("click", ()=>{
        none();
    })
    att_yes.addEventListener("click",()=>{
        att_none();
    })
    att_no.addEventListener("click",()=>{
        att_none();
    })


    for (let i = 0; i < att_delete_box.length; i++) {
        att_delete_box[i].addEventListener("click",()=>{
            att_block();
            att_background_black();
        })
    }

    for(let i=0; i<att_userbox.length; i++)
    {
        att_userbox[i].addEventListener("click", ()=>{
            att_rem();
            att_userbox[i].classList.add("att_user_box_active");
        })
    }
    
    for (let i=0; i<file_box_list.length; i++)
    {
        file_box_list[i].addEventListener("click", () => {
            rem();
            file_box_list[i].classList.add("file_box_active");
        });
    }

    for (let i = 0; i < delete_box_list.length; i++) {
        delete_box_list[i].addEventListener("click",()=>{
            block();
            background_black();
        })
    }


    function att_none()
    {
        att_pop.style.display="none";
        attendance.classList.remove("attendance_background");
    }
    
    function att_block()
    {
        att_pop.style.display="block";
    }

    function att_background_black()
    {
        attendance.classList.add("attendance_background");
    }

    function none()
    {
        pop.style.display="none";
        file_open.classList.remove("file_open_pop");
    }
    function background_black()
    {
        file_open.classList.add("file_open_pop");
    }
    function block()
    {
        pop.style.display="block";
    }

    function sett_on_off(){
        if(set_img.src.match("m_settings_off@2x"))
        {
            set_img.src="mob_controll_img/m_settings_on@2x.png";
            option_box.style.display="block";
        }
        else
        {
            set_img.src="mob_controll_img/m_settings_off@2x.png";
            option_box.style.display="none";
        }
    }

    function colleting_onoff()
    {
        if(collect_img.src.match("button_collecting_off@2x"))
        {
            collect_img.src="mob_controll_img/button_collecting_on@2x.png";
        }
        else
        {
            collect_img.src="mob_controll_img/button_collecting_off@2x.png";
        }
    }

    function openfile_onoff(){
        if(openfile_img.src.match("button_openfile_off@2x"))
        {
            if(parti_img.src.match("button_participants_on@2x"))
            {
                parti_img.src="mob_controll_img/button_participants_off@2x.png";
                attendance.style.display="none";
            }

            if(image_img.src.match("button_images&videos_on@2x"))
            {
                image_img.src="mob_controll_img/button_images&videos_off@2x.png";
            }
            openfile_img.src="mob_controll_img/button_openfile_on@2x.png";
            file_open.style.display="block"
        }
        else
        {
            openfile_img.src="mob_controll_img/button_openfile_off@2x.png";
            file_open.style.display="none"
        }
    }

    function parti_onoff(){
        if(parti_img.src.match("button_participants_off@2x"))
        {
            if(image_img.src.match("button_images&videos_on@2x"))
            {
                image_img.src="mob_controll_img/button_images&videos_off@2x.png";
            }
            if(openfile_img.src.match("button_openfile_on@2x"))
            {
                openfile_img.src="mob_controll_img/button_openfile_off@2x.png";
                file_open.style.display="none"
            }
            parti_img.src="mob_controll_img/button_participants_on@2x.png";
            attendance.style.display="block";
        }
        else
        {
            parti_img.src="mob_controll_img/button_participants_off@2x.png";
            attendance.style.display="none";
        }
    }
    function image_onoff(){
        if(image_img.src.match("button_images&videos_off@2x"))
        {
            if(parti_img.src.match("button_participants_on@2x"))
            {
                parti_img.src="mob_controll_img/button_participants_off@2x.png";
                attendance.style.display="none";
            }
            if(openfile_img.src.match("button_openfile_on@2x"))
            {
                openfile_img.src="mob_controll_img/button_openfile_off@2x.png";
                file_open.style.display="none"
            }
            image_img.src="mob_controll_img/button_images&videos_on@2x.png";
            image.style.display="block";
        }
        else
        {
            image_img.src="mob_controll_img/button_images&videos_off@2x.png";
            image.style.display="none";
        }
    }
    function change_manual(){
        if(manual_btn.classList.contains("auto_btn"))
        {
            manual_btn.classList.remove("auto_btn");
            
        }
        else if(manual_btn.classList.contains("manual_btn"))
        {
            manual_btn.classList.add("auto_btn");
        }        
        //아니 else if 자리바꾸면 안된고 바꾸면 왜 되냐?
    }
    function rem()
    {
        for(let i=0; i<file_box_list.length; i++)
        {
            if(file_box_list[i].className== "file_box file_box_active")
            {
                file_box_list[i].classList.remove("file_box_active");
            }
        }
    }
    function att_rem()
    {
        for(let i=0; i<att_userbox.length; i++)
        {
            if(att_userbox[i].className== "att_user_box att_user_box_active")
            {
                att_userbox[i].classList.remove("att_user_box_active");
            }
        }
    }

    
    }

    