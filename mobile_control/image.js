var image_list = null;
var image_scroll_veil = null;
image_list = document.getElementsByClassName("image_list");
image_scroll_veil = document.getElementsByClassName("image_scroll_veil");
    for (let i = 0; i < image_scroll_veil.length; i++) {
        image_scroll_veil[i].addEventListener("click", () => {
        checkRadio();
        image_list[i].classList.toggle("active");
        });
    }

function checkRadio() {
    for (let i = 0; i < image_scroll_veil.length; i++) {
        if (image_list[i].className == "image_list active") {
        image_list[i].classList.remove("active");
        }
    }
}

//탭에 따른 변경
var image_tab_check = document.querySelector(".tab_imagelist").querySelector("input");
var tab_box=document.querySelector(".imagetab");

tab_box.addEventListener("click",()=>
{
    image_tab();
})
function image_tab()
{
    if(image_tab_check.checked)
    {
        document.querySelector("#option_sort").style.display="block";
        document.querySelector("#option_vote").style.display="none";
        document.querySelector(".image_send_btn").style.display="block";
        document.querySelector(".image_all_delete_btn").style.display="block";
        document.querySelector(".vote_before").style.display="none";
        document.querySelector(".duplicate_vote_off").style.display="none";
    }

    else
    {
        document.querySelector("#option_sort").style.display="none";
        document.querySelector("#option_vote").style.display="block";
        document.querySelector(".image_send_btn").style.display="none";
        document.querySelector(".image_all_delete_btn").style.display="none";
        document.querySelector(".vote_before").style.display="block";
        document.querySelector(".duplicate_vote_off").style.display="block";
    }
}

//투표시작 중복투표 버튼 변경
var vote_before = document.querySelector(".vote_before");
vote_before.addEventListener("click",()=>
{
    if(!vote_before.classList.contains("vote_before_active"))
    {
        vote_before.classList.add("vote_before_active");
        for (let i = 0; i < image_scroll_veil.length; i++) {
            image_list[i].querySelector(".image_voting_number").style.display="block";
        }
    }   
    else
    {
        vote_before.classList.remove("vote_before_active");
        for (let i = 0; i < image_scroll_veil.length; i++) {
            image_list[i].querySelector(".image_voting_number").style.display="none";
        }
    }
        
})

var duplicate_vote_off=document.querySelector(".duplicate_vote_off");
duplicate_vote_off.addEventListener("click", ()=> {
    if(!duplicate_vote_off.classList.contains("duplicate_vote_off_active"))
        duplicate_vote_off.classList.add("duplicate_vote_off_active");
    else
        duplicate_vote_off.classList.remove("duplicate_vote_off_active");
})

// 하나 삭제
var image_delete_btn = document.querySelectorAll(".image_delete_btn");

for (let i = 0; i < image_scroll_veil.length; i++) {
    image_delete_btn[i].addEventListener("click", ()=>{
        document.querySelector(".image_popbackground").style.display="block";
        document.querySelector(".image_popdelete_box").style.display="block";
    }
)
}

var modal_button_positive=document.querySelector(".modal_button_positive");
modal_button_positive.addEventListener("click", ()=>{
    document.querySelector(".image_popbackground").style.display="none";
    document.querySelector(".image_popdelete_box").style.display="none";
})

var modal_button_negative=document.querySelectorAll(".modal_button_negative");
modal_button_negative[1].addEventListener("click", ()=>{
    document.querySelector(".image_popbackground").style.display="none";
    document.querySelector(".image_popdelete_box").style.display="none";
})

//모두삭제
var image_all_delete_btn = document.querySelector(".image_all_delete_btn");
image_all_delete_btn.addEventListener("click", ()=>{
    document.querySelector(".image_popbackground").style.display="block";
    document.querySelector(".image_popdelete_all_box").style.display="block";
})

var modal_button_all_delete = document.querySelector(".modal_button_all_delete");
modal_button_all_delete.addEventListener("click",()=>{
    document.querySelector(".image_popbackground").style.display="none";
    document.querySelector(".image_popdelete_all_box").style.display="none";
})
modal_button_negative[0].addEventListener("click", ()=>{
    document.querySelector(".image_popbackground").style.display="none";
    document.querySelector(".image_popdelete_all_box").style.display="none";
})

// 사진 및 동영상 보내기 팝업창 뛰우기

var image_send_btn= document.querySelector(".image_send_btn");
image_send_btn.addEventListener("click", ()=>{
    document.querySelector(".image_send_popbox").style.display="block";
    document.querySelector(".image_popbackground").style.display="block";
})

var image_send_poptop_expel= document.querySelector(".image_send_poptop_expel");
image_send_poptop_expel.addEventListener("click",()=>{
    document.querySelector(".image_send_popbox").style.display="none";
    document.querySelector(".image_popbackground").style.display="none";
})