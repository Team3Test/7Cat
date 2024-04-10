const bookItem = document.querySelectorAll(".bookItem");

function show() {
    bookItem.forEach((element, index) => {
        element.addEventListener("mouseover", function () {
            var smallhover = element.querySelector(".smallhover");
            var bookItembox = element.querySelector(".bookItembox");
            bookItembox.classList.add("bookItemshow");
            smallhover.classList.add("smallhidden");
        });
    });
}

function hidden() {
    bookItem.forEach((element, index) => {
        element.addEventListener("mouseout", function () {
            // 遍历所有书本项，移除非当前项的类
            bookItem.forEach((otherElement, otherIndex) => {
                if (index !== otherIndex) {
                    // 检查是否为当前项
                    var otherSmallhover = otherElement.querySelector(".smallhover");
                    var otherBookItembox = otherElement.querySelector(".bookItembox");
                    // 移除其他项的类
                    if (otherBookItembox && otherSmallhover) {
                        otherBookItembox.classList.remove("bookItemshow");
                        otherSmallhover.classList.remove("smallhidden");
                    }
                }
            });
        });
    });
}

bookItem.forEach(function (bookItem) {
    bookItem.addEventListener("mouseout", hidden);

    bookItem.addEventListener("mouseover", show);
});
