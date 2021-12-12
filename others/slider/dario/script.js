var headerSide = document.getElementById("header_side");
var whiteContainer = document.getElementById("white_container");
var blackContainer = document.getElementById("black_container");
var userOut = false;

whiteContainer.addEventListener('mouseover', (ev) => {
    userOut = false;
    headerSide.style.cssText = "opacity:0;transition:0.5s";
    blackContainer.style.width = "30%"
    setTimeout(() => {
        if (!userOut) blackContainer.style.width = "40%";
    }, 500);
});
blackContainer.addEventListener('mouseover', (ev) => {
    userOut = false;
    headerSide.style.cssText = "opacity:0;transition:0.5s";
    blackContainer.style.width = "70%"
    setTimeout(() => {
        if (!userOut) blackContainer.style.width = "60%";
    }, 500);
});
document.addEventListener('mouseout', () => {
    userOut = true;
    headerSide.style.cssText = "opacity:100%;transition:0.3s";
    blackContainer.style.width = "50%"
})

    