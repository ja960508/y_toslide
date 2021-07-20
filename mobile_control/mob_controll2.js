const iframe_cotents = document.getElementById("img_collection");
const content_box = document.getElementsByClassName("content_box")[0];

iframe_cotents.style.height = `${window.innerHeight - 199}px`;
content_box.style.height = `${window.innerHeight - 199}px`;

window.onload = function () {
  iframe_cotents.contentWindow.postMessage(window.innerHeight, "*");
};
window.addEventListener("resize", () => {
  iframe_cotents.style.height = `${window.innerHeight - 199}px`;
  content_box.style.height = `${window.innerHeight - 199}px`;
  iframe_cotents.contentWindow.postMessage(window.innerHeight, "*");
});
