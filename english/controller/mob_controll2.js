/*
var iframe_cotents = document.getElementById("img_collection");
var content_box = document.getElementsByClassName("content_box")[0];

iframe_cotents.style.height = `${window.innerHeight - 199}px`;
content_box.style.height = `${window.innerHeight - 199}px`;

window.onload = function () {
  //iframe_cotents.contentWindow.postMessage(window.innerHeight, "*");
  document.getElementById("img_collection").contentWindow.adjust_size(window.innerHeight);
  document.getElementById("presentation_collection").contentWindow.adjust_size(window.innerHeight);
  document.getElementById("attendance_collection").contentWindow.adjust_size(window.innerHeight);
  
};
window.addEventListener("resize", () => {
  
  document.getElementById("img_collection").contentWindow.adjust_size(window.innerHeight);
  document.getElementById("presentation_collection").contentWindow.adjust_size(window.innerHeight);
  document.getElementById("attendance_collection").contentWindow.adjust_size(window.innerHeight);
});
*/

const img_collection = document.getElementById("img_collection");
const attendance_collection = document.getElementById("attendance_collection");
const presentation_collection = document.getElementById("presentation_collection");
const content_box = document.getElementsByClassName("content_box")[0];

img_collection.style.height = `${window.innerHeight - 199}px`;
attendance_collection.style.height = `${window.innerHeight - 199}px`;
presentation_collection.style.height = `${window.innerHeight - 199}px`;
content_box.style.height = `${window.innerHeight - 199}px`;

window.onload = function () {
  img_collection.contentWindow.adjust_size(window.innerHeight);
  attendance_collection.contentWindow.adjust_size(window.innerHeight);
  presentation_collection.contentWindow.adjust_size(window.innerHeight);
};
window.addEventListener("resize", () => {
  img_collection.contentWindow.adjust_size(window.innerHeight);
  attendance_collection.contentWindow.adjust_size(window.innerHeight);
  presentation_collection.contentWindow.adjust_size(window.innerHeight);
});

function call_height_adjust()
{
  return;
  iframe_cotents.style.height = `${window.innerHeight - 199}px`;
  content_box.style.height = `${window.innerHeight - 199}px`;

  document.getElementById("img_collection").contentWindow.adjust_size(window.innerHeight);
  document.getElementById("presentation_collection").contentWindow.adjust_size(window.innerHeight);
  document.getElementById("attendance_collection").contentWindow.adjust_size(window.innerHeight);
}