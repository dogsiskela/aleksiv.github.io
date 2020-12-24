let translate = document.getElementsByClassName("translate");

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    console.log(translate);
    Array.prototype.forEach.call(translate, function (el) {
        console.log(scroll);
        let speed = el.dataset.speed;
        el.style.transform = 'translateY(' + scroll * speed + 'px)';
    });
})