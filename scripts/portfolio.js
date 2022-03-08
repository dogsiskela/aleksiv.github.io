var portfolioContainer;
var portfolioTitle;

var jsonData;

window.onload = async function () {
    portfolioContainer = document.getElementById("main_container");
    portfolioTitle = document.getElementById("portfolio_title");
    console.log(window.location.pathname.replace(".html", ""))
    if (window.location.pathname.replace(".html", "") == "/uiux") {
        portfolioTitle.innerHTML = "UI/UX";
        await getPortfolio(0);
    }
    else if (window.location.pathname.replace(".html", "") == "/mobile") {
        portfolioTitle.innerHTML = "MOBILE";
        await getPortfolio(1);
    }
    else if (window.location.pathname.replace(".html", "") == "/web") {
        portfolioTitle.innerHTML = "WEB";
        await getPortfolio(2);
    }

}

function getPortfolioElement(projectName, imageSrc, projectLink, projectDescription) {
    let innerHtml = "<div class='image'></div ><div><h5>" + projectName + "</h5><p>" + projectDescription + "</p></div>";
    let element = document.createElement('div');
    element.className = "item-container";
    element.innerHTML = innerHtml;
    element.children[0].style.backgroundImage = "url('" + imageSrc + "')";
    element.addEventListener('click', () => {
        location.href = projectLink;
    })
    return element;
}



async function getPortfolio(portfolioIndex) {
    // while (portfolioContainer.firstChild) {
    //     portfolioContainer.removeChild(portfolioContainer.firstChild);
    // }

    await fetch("./scripts/projects.json").then((val) => {
        return val.json().then((json) => {
            jsonData = json;
            // portfolioTitle.innerHTML = json[portfolioIndex]["type"];
            for (let i = 0; i < json[portfolioIndex]["projects"].length; i++) {
                let projectTitle = json[portfolioIndex]["projects"][i]["title"];
                let projectImage = json[portfolioIndex]["projects"][i]["image"];
                let projectDescription = json[portfolioIndex]["projects"][i]["description"];
                let projectLink = "./projects/" + json[portfolioIndex]["id"] + "/" + json[portfolioIndex]["projects"][i]["id"] + ".html";
                portfolioContainer.appendChild(getPortfolioElement(projectTitle, projectImage, projectLink, projectDescription),);
                // addListeners(portfolioContainer.children[i]);
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