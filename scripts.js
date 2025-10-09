// Declaring vars
const form = document.querySelector("form")
const item = document.querySelector("ul")

// Event to add items to the list
form.addEventListener("submit", (event) => {
    event.preventDefault()

    const inputForm = document.getElementById("itemAdded")
    const buttonForm = document.getElementById("buttonAddItem")
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

    // Changing the input type
    itemStructureInput.type = "checkbox"

    item.append(itemStructureLi)
    itemStructureLi.append(itemStructureDiv)
    itemStructureDiv.append(itemStructureInput)
    itemStructureDiv.append(itemName)

    itemStructureLi.append(itemStructureButton)
    itemStructureButton.append(itemStructureImg)

    itemName.textContent = inputForm.value
})