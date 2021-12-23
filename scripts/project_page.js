
var jsonData;
var projectData;
var images;
var imageIndex = 0;

var descriptionElement;
var titleElement;
var imageElement;

var leftImageCarousselButton;
var rightImageCarousselButton


function updateImageState() {
    imageElement.src = images[imageIndex];
}

window.onload = async () => {
    descriptionElement = document.getElementById("description");
    titleElement = document.getElementById("title");
    imageElement = document.getElementById("image");

    leftImageCarousselButton = document.getElementById("caret-left");
    rightImageCarousselButton = document.getElementById("caret-right");

    leftImageCarousselButton.addEventListener("click", () => {
        if (imageIndex > 0) {
            imageIndex -= 1;
            updateImageState();
        }
    })

    rightImageCarousselButton.addEventListener("click", () => {
        if (imageIndex < images.length - 1) {
            imageIndex += 1;
            updateImageState();
        }
    })

    await fetch("../../scripts/projects.json").then(async (val) => {
        return val.json().then((json) => {
            jsonData = json;
        })
    });

    var locationPath = location.href.split("/");
    var categoryId = locationPath[locationPath.length - 2];
    var projectId = locationPath[locationPath.length - 1].replace(".html", "");
    for (let categoryIndx in jsonData) {
        if (jsonData[categoryIndx]["id"] == categoryId) {
            for (let projectIndx in jsonData[categoryIndx]["projects"]) {
                if (jsonData[categoryIndx]["projects"][projectIndx]["id"] == projectId) {
                    projectData = jsonData[categoryIndx]["projects"][projectIndx];
                }
            }
        }
    }
    descriptionElement.innerHTML = projectData["description"];
    titleElement.innerHTML = projectData["title"];
    images = projectData["images"];
    imageElement.src = images[0];

}