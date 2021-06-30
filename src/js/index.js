function toggleSlideControlMode() {
  const btn = document.querySelector(".control-btn");
  const image = document.querySelector(".slide-control");
  const hoverImage = document.querySelector(".hover-image");

  if (btn.classList.contains("auto")) {
    image.src = `./src/images/yesToSlide_icons/button_manualSlidesShow.svg`;
    hoverImage.src = `./src/images/yesToSlide_icons/ifHover_manualSlideShow.svg`;
    btn.classList.remove("auto");
  } else {
    image.src = `./src/images/yesToSlide_icons/button_autoSlidesShow.svg`;
    hoverImage.src = `./src/images/yesToSlide_icons/ifHover_autoSlideShow.svg`;
    btn.classList.add("auto");
  }
}

function showSlideMode(mode) {
  const hoverImage = document.querySelector(".hover-image");
  mode === "in"
    ? hoverImage.classList.remove("d-none")
    : hoverImage.classList.add("d-none");
}

function changeImageCollectingMode() {
  const btn = document.querySelector(".image-colleting-btn");
  const image = document.querySelector(".collecting-image");

  btn.classList.contains("collecting")
    ? (image.src = `./src/images/yesToSlide_icons/button_collecting_Off.svg`)
    : (image.src = `./src/images/yesToSlide_icons/button_collecting_On.svg`);

  btn.classList.toggle("collecting");
}
