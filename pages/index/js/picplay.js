const slides = document.querySelectorAll(".slideshow a img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const indicators = document.querySelectorAll(".indicator");

let currentSlide = 0;

function showSlide(n) {
    slides.forEach((slide) => slide.classList.remove("active"));
    indicators.forEach((indicator) => indicator.classList.remove("active"));

    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }
    slides[currentSlide].classList.add("active");
    indicators[currentSlide].classList.add("active");
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

let slideInterval = setInterval(nextSlide, 4000); // 自动播放间隔时间

prevBtn.addEventListener("click", () => {
    clearInterval(slideInterval); // 点击按钮时停止自动播放
    showSlide(currentSlide - 1);
});

nextBtn.addEventListener("click", () => {
    clearInterval(slideInterval); // 点击按钮时停止自动播放
    showSlide(currentSlide + 1);
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        clearInterval(slideInterval); // 点击指示点时停止自动播放
        showSlide(index);
    });
});

showSlide(0); // 显示第一张图片

// 自动循环播放
function autoPlay() {
    slideInterval = setInterval(() => {
        if (currentSlide === slides.length - 1) {
            // 循环到最后一张时返回第一张
            currentSlide = -1;
        }
        nextSlide();
    }, 4000);
}

autoPlay(); // 启动自动播放
