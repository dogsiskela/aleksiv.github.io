

var categoryItems = [];
var inactive = false;
var webItems;
var appItems;
var designItems;
var backgroundSlider;
var webContainer;

var caretLeft;
var caretRight;

window.addEventListener("load", () => {
    caretLeft = document.getElementById("caret-left");
    caretRight = document.getElementById("caret-right");
    addCaretListeners();
})

function addCaretListeners() {
    caretLeft.addEventListener('mouseover', () => {
        caretLeft.src = "./assets/svg/icons/caret-left-filled.svg"
    });

    caretLeft.addEventListener('mouseleave', () => {
        caretLeft.src = "./assets/svg/icons/caret-left.svg"
    });

    caretRight.addEventListener('mouseover', () => {
        caretRight.src = "./assets/svg/icons/caret-right-filled.svg"
    });

    caretRight.addEventListener('mouseleave', () => {
        caretRight.src = "./assets/svg/icons/caret-right.svg"
    });
}


