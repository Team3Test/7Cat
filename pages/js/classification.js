
function clear(eles, defaultClass) {
    for (var i = 0; i < eles.length; i++) {
        eles[i].className = defaultClass;
    }
}

let items = document.querySelectorAll('.classify-con')
// item1,item2,item3...
let books = []
let activebooks = [];
// active1,active2,...
for (let i = 0; i < items.length; i++) {
    books[i] = items[i].querySelectorAll('.row a');
    // activebooks[i] = items[i].querySelectorAll('.row a.active');
    for (j = 0; j < books[i].length; j++) {
        books[i][j].dataset.value1 = i;
        books[i][j].dataset.value2 = j;

        books[i][j].addEventListener('click', function (event) {
            event.preventDefault(); // 阻止 <a> 标签的默认行为
            // i，j
            activebooks[this.dataset.value1] = items[this.dataset.value1].querySelectorAll('.row a.active');
            clear(activebooks[this.dataset.value1], '')
            books[this.dataset.value1][this.dataset.value2].classList.add("active")
        })
    }
}
// 分类切换
// 上
let styles = document.querySelectorAll('.item1 .row a')
// 下
let details = document.querySelectorAll('.item2')

let clear2 = function () {
    let styleactive = document.querySelector('.item1 .row a.active')
    let detailactive = document.querySelector('.item2.active');
    styleactive.classList.remove("active");
    detailactive.classList.remove("active");
}
for (let i = 0; i < styles.length; i++) {
    styles[i].dataset.value1 = i
    styles[i].addEventListener('click', function (event) {
        event.preventDefault(); // 阻止 <a> 标签的默认行为
        clear2()
        details[this.dataset.value1].classList.add("active")
        styles[this.dataset.value1].classList.add("active")
    })
}