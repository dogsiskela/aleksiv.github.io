
var active = false;
function gotoSite() {
    var redirectWindow = window.open('https://' + document.getElementById('l-2').innerHTML, '_blank');
    redirectWindow.location;
}
function showContent(project) {
    document.getElementById('project-button').innerHTML = 'Разгледај';
    switch (project) {
        case 'distorzija':
            document.getElementById('project-title').innerHTML = 'Distorzija';
            document.getElementById('project-summary').innerHTML = 'Проект која се стреми да го рашири светот на музиката, диверзитетот, артистите, историјата и да ги мотивира идните генерации кои ќе ги дополнуваат овие жанрови.';
            document.getElementById('l-1').innerHTML = '@distorzija.mk';
            document.getElementById('l-2').innerHTML = 'www.distrozija.mk';
            break;
        case 'logidu':
            document.getElementById('project-title').innerHTML = 'Logidu';
            document.getElementById('project-summary').innerHTML = 'test';
            document.getElementById('l-1').innerHTML = '@logiduonline';
            document.getElementById('l-2').innerHTML = 'www.logidu.mk';
            break;
        case 'speakout':
            document.getElementById('project-title').innerHTML = 'SpeakOut';
            document.getElementById('project-summary').innerHTML = 'SpeakOut е иницијатива од млади за млади која се стреми да им обезбеди сигурен и анонимен простор на младите каде можат отворено да зборуваат за нивните проблеми, да дискутираат за сензитивни теми и прашања, да побараат совет и притоа да добијат поддршка и помош од своите врсници.';
            document.getElementById('l-1').innerHTML = '@speakoutapp';
            document.getElementById('l-2').innerHTML = 'www.speakapp.mk';
            break;
        case 'andrometa':


    }
    $('#side-show').css({ "max-width": "40vw", "transition": "0.3s" },);
}


$(document).ready(function () {
    $('.close').css({ "transform": "rotate(180deg)", "transform-origin": "40% 40%" });
    $('.star').click(function () {
        ev = event.target.id;
        thisc = this;
        $('#side-show-contact').css({ "max-width": "0vw", "transition": "0.3s" });
        $('#side-show-question').css({ "max-width": "0vw", "transition": "0.3s" });
        $('#side-show-join').css({ "max-width": "0vw", "transition": "0.3s" });
        if (active == true) {
            setTimeout(function () {
                $('.project-logo').css({ "background-image": "url('assets/project-logo/" + ev + ".svg')" });
                showContent(ev);
            }, 300);
        }
        else {
            $('.project-logo').css({ "background-image": "url('assets/project-logo/" + ev + ".svg')" });
            showContent(ev);
        }
        $('.close').css({ "transform": "rotate(0deg)", "transition": "0.3s" });
        active = true;

    });
    $('.m-b').click(function () {
        ev = event.target.id;
        $('#side-show').css({ "max-width": "0vw", "transition": "0.3s" });
        $('#side-show-contact').css({ "max-width": "0vw", "transition": "0.3s" });
        $('#side-show-join').css({ "max-width": "0vw", "transition": "0.3s" });
        if (active == true) {
            setTimeout(function () {
                $('.project-logo').css({ "background-image": "url('assets/project-logo/" + ev + ".svg')" });
                $('#side-show-question').css({ "max-width": "40vw", "transition": "0.3s" },);

            }, 300);
        }
        else {
            $('.project-logo').css({ "background-image": "url('assets/project-logo/" + event.target.id + ".svg')" });
            $('#side-show-question').css({ "max-width": "40vw", "transition": "0.3s" },);

        }
        active = true;
        $('.close').css({ "transform": "rotate(0deg)", "transition": "1s" });
    });
    $('.m-c').click(function () {

        ev = event.target.id;
        $('#side-show').css({ "max-width": "0vw", "transition": "0.3s" });
        $('#side-show-question').css({ "max-width": "0vw", "transition": "0.3s" });
        $('#side-show-join').css({ "max-width": "0vw", "transition": "0.3s" });
        if (active == true) {
            setTimeout(function () {
                $('.project-logo').css({ "background-image": "url('assets/project-logo/" + ev + ".svg')" });
                $('#side-show-contact').css({ "max-width": "40vw", "transition": "0.3s" },);

            }, 300);
        }
        else {
            $('.project-logo').css({ "background-image": "url('assets/project-logo/" + event.target.id + ".svg')" });
            $('#side-show-contact').css({ "max-width": "40vw", "transition": "0.3s" },);

        }
        active = true;
        $('.close').css({ "transform": "rotate(0deg)", "transition": "0.3s", "transform-origin": "center" });
    });
    $('.rocket-i').click(function () {
        ev = event.target.id;
        $('#side-show').css({ "max-width": "0vw", "transition": "0.3s" });
        $('#side-show-question').css({ "max-width": "0vw", "transition": "0.3s" });
        $('#side-show-contact').css({ "max-width": "0vw", "transition": "0.3s" });
        if (active == true) {
            setTimeout(function () {
                $('.project-logo').css({ "background-image": "url('assets/project-logo/" + ev + ".svg')" });
                $('#side-show-join').css({ "max-width": "40vw", "transition": "0.3s" },);

            }, 300);
        }
        else {
            $('.project-logo').css({ "background-image": "url('assets/project-logo/" + event.target.id + ".svg')" });
            $('#side-show-join').css({ "max-width": "40vw", "transition": "0.3s" },);
        }
        active = true;
        $('.close').css({ "transform": "rotate(0deg)", "transition": "0.3s", "transform-origin": "center" });
    })

    $('.close').click(function () {
        active = false;
        $('.close').css({ "transform": "rotate(180deg)", "transition": "0.3s", "transform-origin": "40% 40%" });
        $('#side-show').css({ "max-width": "0vw", "transition": "0.3s" });
        $('#side-show-contact').css({ "max-width": "0vw", "transition": "0.3s" });
        $('#side-show-question').css({ "max-width": "0vw", "transition": "0.3s" });
        $('#side-show-join').css({ "max-width": "0vw", "transition": "0.3s" });
    })
    $('.group-i').hover(function () {
        $('.team').css({ 'opacity': '100%', 'transition': '0.3s' })
    }, function () {
        $('.team').css({ 'opacity': '0%', 'transition': '0.3s' })
    });
    $('.info-i').hover(function () {
        $('.info').css({ 'opacity': '100%', 'transition': '0.3s' })
    }, function () {
        $('.info').css({ 'opacity': '0%', 'transition': '0.3s' })
    });
    $('.question-i').hover(function () {
        $('.question').css({ 'opacity': '100%', 'transition': '0.3s' })
    }, function () {
        $('.question').css({ 'opacity': '0%', 'transition': '0.3s' })
    });

    $('.rocket-i').hover(function () {
        $('.join').css({ 'opacity': '100%', 'transition': '0.3s' })
    }, function () {
        $('.join').css({ 'opacity': '0%', 'transition': '0.3s' })
    });

    $(document).keydown(function (e) {
        var keycode1 = (e.keyCode ? e.keyCode : e.which);
        if (keycode1 == 0 || keycode1 == 9) {
            e.preventDefault();
            e.stopPropagation();
        }
    });
});
function sendEmail() {
    Email.send({
        SecureToken: "C973D7AD-F097-4B95-91F4-40ABC5567812",
        To: 'them@website.com',
        From: "you@isp.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}



