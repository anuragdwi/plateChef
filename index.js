const ham = document.getElementById("ham");
ham.addEventListener("click", function (params) {
  const menu = document.getElementById("menu");
  menu.classList.add("click");
});
const close = document.getElementById("close");
close.addEventListener("click", function (params) {
  const menu = document.getElementById("menu");
  menu.classList.remove("click");
});

function remove() {
  const menu = document.getElementById("menu");
  menu.classList.remove("click");
}

myID = document.getElementById("scrollup");

var myScrollFunc = function () {
  var y = window.scrollY;
  if (y >= 100) {
    myID.className = "bottomMenu show";
  } else {
    myID.className = "bottomMenu hide";
  }
};

window.addEventListener("scroll", myScrollFunc);
