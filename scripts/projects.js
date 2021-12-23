var portfolioTitle;
var portfolioContainer
var caretLeft;
var caretRight;

var menuMobile;
var menuWeb;
var menuDesign;
var menuTech;
var menuContact;


var jsonData;

var portfolioIndex = 0;

function getPortfolioElement(projectName, imageSrc, projectLink) {
    var innerHtml = '<div class="bolt-container bolt-animated" ><img src="./assets/bolt_dark.svg" height="60px" class="filled"><img src="./assets/bolt_outline.svg" height="60px" class="outlined"><div class="reveal"></div></div><div class="category-info">' + projectName + '</div><div class="card-front"></div>'
    let element = document.createElement('div');
    element.className = "item-container";
    element.innerHTML = innerHtml;
    element.children[2].style.backgroundImage = "url('" + imageSrc + "')";
    element.addEventListener('click', () => {
        location.href = projectLink;
    })
    return element;
}

window.onload = async function () {
    portfolioTitle = document.getElementById("portfolio_title");
    portfolioContainer = document.getElementById("portfolio_container");
    caretLeft = document.getElementById("caret-left");
    caretRight = document.getElementById("caret-right");


    await getPortfolio(0);
    addCaretClickListeners();
    addMenuClickListeners();
}





function addCaretClickListeners() {
    caretLeft.addEventListener('click', () => {
        if (portfolioIndex !== 0) {
            portfolioIndex -= 1;
            getPortfolio(portfolioIndex);
        }
    });
    caretRight.addEventListener('click', () => {
        if (portfolioIndex + 1 < jsonData.length) {
            portfolioIndex += 1;
            getPortfolio(portfolioIndex);
        }
    });
}

async function getPortfolio(portfolioIndex) {
    while (portfolioContainer.firstChild) {
        portfolioContainer.removeChild(portfolioContainer.firstChild);
    }

    await fetch("./scripts/projects.json").then((val) => {
        return val.json().then((json) => {
            jsonData = json;
            portfolioTitle.innerHTML = json[portfolioIndex]["type"];
            for (let i = 0; i < json[portfolioIndex]["projects"].length; i++) {
                let projectTitle = json[portfolioIndex]["projects"][i]["title"];
                let projectImage = json[portfolioIndex]["projects"][i]["image"];
                let projectLink = "./projects/" + json[portfolioIndex]["id"] + "/" + json[portfolioIndex]["projects"][i]["id"] + ".html";
                portfolioContainer.appendChild(getPortfolioElement(projectTitle, projectImage, projectLink),);
                addListeners(portfolioContainer.children[i]);
            }

        })
    });


    for (let i = 0; i < portfolioContainer.children.length; i++) {
        setTimeout(() => {
            portfolioContainer.children[i].style.transform = "scale(1)";
            portfolioContainer.children[i].style.opacity = "1";
        }, (i + 1) * 100)
    }

}

function addListeners(item) {
    item.addEventListener('mouseover', () => {
        animWeb(item);
    })
    item.addEventListener('mouseleave', () => {
        reverseAnimWeb(item);
    })
}


function animWeb(item) {

    var boltIcon = item.children[0]
    var cardDescription = item.children[1]
    var mainCard = item.children[2]
    var revealElement = boltIcon.children[2];

    item.style.transform = "scale(1.05)"
    boltIcon.style.transform = "translateY(-80px)";
    boltIcon.style.animation = "bobble 1.8s infinite";
    mainCard.style.transform = "translateY(20px) rotateX(10deg)";
    cardDescription.style.opacity = "1.0";

    revealElement.style.height = "0px";
}


function reverseAnimWeb(item) {
    var boltIcon = item.children[0]
    var cardDescription = item.children[1]
    var mainCard = item.children[2]
    var revealElement = boltIcon.children[2];

    item.style.transform = "scale(1)"
    boltIcon.style.transform = "translateY(0px)";
    boltIcon.style.animation = "";
    mainCard.style.transform = "translateY(0px)";
    cardDescription.style.opacity = "0";

    revealElement.style.height = "100px";
}

function addMenuClickListeners() {
    menuMobile = document.getElementById("menu-mobile");
    menuWeb = document.getElementById("menu-web");
    menuDesign = document.getElementById("menu-design");
    menuTech = document.getElementById("menu-tech");
    menuContact = document.getElementById("menu-contact");

    portfolioContainer = document.getElementById("portfolio_container");
    technologiesContainer = document.getElementById("technologies_container");
    contactContainer = document.getElementById("contact_container");

    menuDesign.addEventListener("click", () => {
        portfolioContainer.scrollIntoView({ behavior: "smooth", block: "center", });
        if (portfolioIndex !== 0) {
            portfolioIndex = 0;
            getPortfolio(portfolioIndex);
        }
    });
    menuMobile.addEventListener("click", () => {
        portfolioContainer.scrollIntoView({ behavior: "smooth", block: "center", });
        if (portfolioIndex !== 1) {
            portfolioIndex = 1;
            getPortfolio(portfolioIndex);
        }
    });
    menuWeb.addEventListener("click", () => {
        portfolioContainer.scrollIntoView({ behavior: "smooth", block: "center", });
        if (portfolioIndex !== 2) {
            portfolioIndex = 2;
            getPortfolio(portfolioIndex);
        }
    });
    menuTech.addEventListener("click", () => {
        technologiesContainer.scrollIntoView({ behavior: "smooth", block: "center", });
    });
    menuContact.addEventListener("click", () => {
        contactContainer.scrollIntoView({ behavior: "smooth", block: "center", });
    });

}