let translate = document.getElementsByClassName("translate");
var container = document.getElementsByClassName('header')[0];
var boardguy = document.getElementsByClassName('boardguy-img')[0];
var menu = document.getElementsByClassName('top-menu')[0];
var menuOpen = false;

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    Array.prototype.forEach.call(translate, function (el) {
        let speed = el.dataset.speed;
        el.style.transform = 'translateY(' + scroll * speed + 'px)';
    });

})

var onMouseEnterHandler = function (event) {
    update(event);
};
var onMouseLeaveHandler = function () {
    boardguy.style.transform = "skew(0deg)";

};
var onMouseMoveHandler = function (event) {
    update(event);
};
function update(ev) {
    var mouse = ev.clientX - screen.width / 2;
    boardguy.style.transform = "rotate(" + mouse * 0.01 + "deg) skew(" + mouse * 0.003 + "deg)"
}

container.onmouseenter = onMouseEnterHandler;
container.onmouseleave = onMouseLeaveHandler;
container.onmousemove = onMouseMoveHandler;

function menuMutate() {
    if (!menuOpen) {
        console.log(menu.children[0]);
        menu.children[0].style.transform = "rotate(45deg) translateY(1vh)";
        menu.children[1].style.opacity = "0";
        menu.children[2].style.transform = "rotate(-45deg) translateY(-2vh) translateX(0.1vw)";
        document.getElementsByClassName("menu-overlay")[0].style.maxWidth = "100vw";
        menuOpen = true;
    }
    else {
        menu.children[0].style.transform = "none";
        menu.children[1].style.opacity = "1";
        menu.children[2].style.transform = "none";
        document.getElementsByClassName("menu-overlay")[0].style.maxWidth = "0vw";
        menuOpen = false;
    }
}

