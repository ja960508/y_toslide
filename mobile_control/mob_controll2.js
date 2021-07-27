var img_collection = document.getElementById('img_collection');
var attendance_collection = document.getElementById('attendance_collection');
var presentation_collection = document.getElementById(
  'presentation_collection'
);
var content_box = document.getElementsByClassName('content_box')[0];

img_collection.style.height = `${window.innerHeight - 199}px`;
attendance_collection.style.height = `${window.innerHeight - 199}px`;
presentation_collection.style.height = `${window.innerHeight - 199}px`;
content_box.style.height = `${window.innerHeight - 199}px`;

window.onload = function () {
  img_collection.contentWindow.adjust_size(window.innerHeight);
  attendance_collection.contentWindow.adjust_size(window.innerHeight);
  presentation_collection.contentWindow.adjust_size(window.innerHeight);
};
window.addEventListener('resize', () => {
  img_collection.contentWindow.adjust_size(window.innerHeight);
  attendance_collection.contentWindow.adjust_size(window.innerHeight);
  presentation_collection.contentWindow.adjust_size(window.innerHeight);
});
