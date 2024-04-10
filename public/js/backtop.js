var backBtn = document.getElementById("backBtn");
var lastnav = document.getElementById("lastnav");

function scrollToTop(duration) {
    const start = window.pageYOffset;
    const startTime = "now" in window.performance ? performance.now() : new Date().getTime();
    const animateScroll = function (timestamp) {
        const now = "now" in window.performance ? performance.now() : new Date().getTime();
        const time = Math.min(1, (now - startTime) / duration);
        const timeFunction = time * (2 - time); // 缓动函数 - 加速然后减速
        window.scroll(0, Math.ceil(timeFunction * (0 - start) + start));
        if (window.pageYOffset === 0) {
            return;
        }
        requestAnimationFrame(animateScroll);
    };
    requestAnimationFrame(animateScroll);
}

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backBtn.style.display = "inline-flex";
        lastnav.style.display = "block";
    } else {
        backBtn.style.display = "none";
        lastnav.style.display = "none";
    }
};

backBtn.onclick = function () {
    scrollToTop(500);
};
