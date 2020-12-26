var headerSide = document.getElementById("header_side");
var whiteContainer = document.getElementById("white_container");
var blackContainer = document.getElementById("black_container");

whiteContainer.addEventListener('mouseover', (ev) => {
    headerSide.style.cssText = "opacity:0;transition:0.3s";
});
blackContainer.addEventListener('mouseover', (ev) => {
    headerSide.style.cssText = "opacity:0;transition:0.3s";
});
document.addEventListener('mouseout',()=>{
    headerSide.style.cssText = "opacity:100%;transition:0.3s";
})

