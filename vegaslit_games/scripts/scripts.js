function show() {
    var lc = document.getElementById("loading-container");
    var ll = document.getElementById("loading-logo");

    setTimeout(function () {
        lc.style.cssText = "max-height:0vh; transition: max-height 0.8s;";
        ll.style.cssText = "opacity: 0%; transition: 0.3s"
        setTimeout(() => {
            lc.style.visibility = "hidden";
        }, 800)
        document.getElementsByTagName("html")[0].style.overflowY = "visible";
    }, 1500)

}