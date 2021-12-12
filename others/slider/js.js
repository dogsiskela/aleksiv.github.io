const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");
var uiContainer = document.getElementById("iui");
var uxContainer = document.getElementById("uxu");
var headerSide = document.getElementById("header_side");
var mouseOut = false;


left.addEventListener("mouseover", () => {
    mouseOut = false;
    uxContainer.style.opacity = "0%";
    headerSide.style.opacity = "0%";
    right.style.width = "30%";
    left.style.width = "70%";
    setTimeout(() => {
        if (!mouseOut) {
            right.style.width = "40%";
            left.style.width = "60%";
        }
    }, 500);
});
container.addEventListener("mouseleave", () => {
    mouseOut = true;
    right.style.width = "50%";
    left.style.width = "50%";
})
left.addEventListener("mouseleave", () => {
    uxContainer.style.opacity = "100%";
    headerSide.style.opacity = "0";
});

right.addEventListener("mouseover", () => {
    mouseOut = false;
    uiContainer.style.opacity = "0%";
    headerSide.style.opacity = "0%";
    right.style.width = "70%";
    left.style.width = "30%";
    setTimeout(() => {
        if (!mouseOut) {
            right.style.width = "60%";
            left.style.width = "40%";
        }
    }, 500);

});

right.addEventListener("mouseleave", () => {
    uiContainer.style.cssText = "100%";
    headerSide.style.cssText = "100%";

});
