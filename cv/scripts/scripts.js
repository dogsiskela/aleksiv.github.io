

var categoryItems = [];
var inactive = false;
var webItems;
var appItems;
var designItems;
var backgroundSlider;
var webContainer;
window.onload = function () {
    webItems = document.getElementById('category-web');
    appItems = document.getElementById('category-app');
    designItems = document.getElementById('category-design');
    backgroundSlider = document.getElementById('background-container');
    webContainer = document.getElementById('web-container');
    appContainer = document.getElementById('app-container');
    categoryItems.push(webItems);
    categoryItems.push(appItems);
    categoryItems.push(designItems);
    categoryItems.forEach((el) => {
        addListeners(el);
    })
}


function addListeners(item) {
    item.addEventListener('mouseover', () => {
        if (!inactive) animWeb(item);
    })
    item.addEventListener('mouseleave', () => {
        if (!inactive) reverseAnimWeb(item);
    })
    transitionListener(item);
}

function transitionListener(item) {
    item.addEventListener('click', () => {
        inactive = true;
        backgroundSlider.style.maxWidth = "100%";
        categoryItems.forEach((el) => {
            el.style.transform = "scale(0)";
        })
        if (item == webItems) {
            setTimeout(() => {
                webContainer.style.maxWidth = "100%";
                setTimeout(() => {
                    webContainer.style.maxHeight = "100%"
                }, 400)
            }, 400)
        }
        else {
            setTimeout(() => {
                appContainer.style.maxWidth = "100%";
                setTimeout(() => {
                    appContainer.style.maxHeight = "100%"
                }, 400)
            }, 400)
        }
        setTimeout(() => {
            item.style.animation = "";
        }, 1000)
    })
}

function animWeb(item) {
    item.style.transform = "scale(1.05)"
    item.childNodes[1].style.transform = "translateY(-100px)";
    item.childNodes[1].style.animation = "bobble 1.8s infinite";
    item.childNodes[3].childNodes[1].style.transform = "translateY(20px) rotateX(10deg)";
    item.childNodes[5].style.opacity = "100%";
}
function reverseAnimWeb(item) {
    item.style.transform = "scale(1)"
    item.childNodes[1].style.transform = "translateY(0px)";
    item.childNodes[3].childNodes[1].style.transform = "translateY(0px)";
    item.childNodes[1].style.animation = "";
    item.childNodes[5].style.opacity = "0";
}