
var hcontainer = document.getElementsByClassName("header")[0]
var hs = document.getElementById("head-screenshot");
var downloadButtons = document.getElementsByClassName('download-icon')
var screenshotElements = document.getElementsByClassName('screenshot-el')
var uniqueProp = document.getElementsByClassName('unique-proposition-container')[0]
var uniquePropList = document.getElementsByClassName('u-p-1')
var uniquePropList2 = document.getElementsByClassName('u-p-2')
var preSignup = document.getElementsByClassName('form-container')[0]

var scrolling;

setInterval(function () {
    if (scrolling) {
        scrolling = false;
        console.log('exec');
        let scroll = window.pageYOffset;
        document.getElementById("profile-img-over").style.transform = "translateX(" + scroll * 0.09 + "vw)";
        for (var i = 0; i < uniquePropList.length; i++) {
            if (uniquePropList[i].getBoundingClientRect().top - 500 < 0) {
                uniquePropList[i].style.marginLeft = "0vw"
                uniquePropList2[i].style.right = "-20.2vw"
            }
            else if (uniquePropList[i].getBoundingClientRect().top - 500 >= 0) {
                uniquePropList[i].style.marginLeft = "-100vw"
                uniquePropList2[i].style.right = "-60vw"
            }
        }
        if (preSignup.getBoundingClientRect().top - 500 >= 0) {
            preSignup.style.opacity = "0%"
        }
        else if (preSignup.getBoundingClientRect().top - 500 < 0) {
            preSignup.style.opacity = "100%"
        }
    }
}, 30);

window.addEventListener('scroll', () => {
    scrolling = true;
}, { capture: false, passive: true })

var onMouseMoveHandler = function (event) {
    update(event);
};
var onMouseEnterHandler = function (event) {
    update(event);
};
var onMouseLeaveHandler = function () {
    hs.style.transform = "skew(0deg)";

};

downloadButtons[1].onmouseenter = function () {
    downloadButtons[1].src = "./assets/svg/icons/1android_sol.svg"
};
downloadButtons[1].onmouseleave = function () {
    downloadButtons[1].src = "./assets/svg/icons/1android_brd.svg"
};
downloadButtons[0].onmouseenter = function () {
    downloadButtons[0].src = "./assets/svg/icons/1apple_sol.svg"
};
downloadButtons[0].onmouseleave = function () {
    downloadButtons[0].src = "./assets/svg/icons/1apple_brd.svg"
};


function show() {
    var lc = document.getElementById("loading-container");
    setTimeout(function () {
        lc.style.cssText = "opacity: 0; transition: 1s;";
        lc.style.visibility = "hidden";
        document.getElementsByTagName("html")[0].style.overflowY = "visible";
    }, 1500)

}
setTimeout(function () {
    screenshotElements[0].style.transform = "scale(1)"
    setTimeout(function () {
        screenshotElements[1].style.transform = "scale(1)"
        setTimeout(function () {
            screenshotElements[2].style.transform = "scale(1)"
            setTimeout(function () {
                screenshotElements[3].style.transform = "scale(1)"
                setTimeout(function () {
                    screenshotElements[4].style.transform = "scale(1)"
                    setTimeout(function () {
                        screenshotElements[5].style.transform = "scale(1)"
                        setTimeout(function () {
                            screenshotElements[6].style.transform = "scale(1)"
                        }, 3000)
                    }, 3000)
                }, 3000)
            }, 2000)
        }, 3000)
    }, 3000)

}, 3000)

