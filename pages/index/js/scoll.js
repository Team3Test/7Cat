var rightbtn = document.querySelector(".rightbtn");
var leftbtn = document.querySelector(".leftbtn");
var scollwrap = document.querySelector(".scollwrap");

function scollleft() {
    scollwrap.style.transform = "translateX(-1150px)";
    leftbtn.classList.add("active");
    rightbtn.classList.remove("active");
}

function scollright() {
    scollwrap.style.transform = "translateX(0)";
    leftbtn.classList.remove("active");
    rightbtn.classList.add("active");
}
