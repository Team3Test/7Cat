var target = document.getElementById("fixedHeader");
window.addEventListener("scroll", function () {
    var scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollHeight > 150) {
        target.style.top = "0";
    } else {
        target.style.top = "-100px";
    }
});
