const item = document.querySelector("ul")
const itemStructureLi = document.createElement("li")
const itemStructureDiv = document.createElement("div")
const itemStructureInput = document.createElement("input")
const itemName = document.createElement("span")
const itemStructureButton = document.createElement("button")
const itemStructureImg = document.createElement("img")

// Applying classes in the items
itemStructureLi.classList.add("listItem")
itemStructureDiv.classList.add("textItem")

// Searching for the image(trash) to put on the button
itemStructureImg.src = "./assets/icons/trash.svg"