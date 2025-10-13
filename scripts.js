// Declaring vars
const form = document.querySelector("form")
const item = document.querySelector("ul")
const button = document.querySelectorAll(".deleteItem")
const trashIcon = document.querySelector(".trashIcon")

// Event to add items to the list
form.addEventListener("submit", (event) => {
    event.preventDefault()

    const inputForm = document.getElementById("itemAdded")
    const itemStructureLi = document.createElement("li")
    const itemStructureDiv = document.createElement("div")
    const itemStructureInput = document.createElement("input")
    const itemName = document.createElement("span")
    const itemStructureButton = document.createElement("button")
    const itemStructureImg = document.createElement("img")
    const hasWhiteSpaceRegex = /^\s+$/
    const value = inputForm.value
    const valueRegex = value.search(hasWhiteSpaceRegex)
    
    // Creating the logical to don`t add null(white space) items
    if(valueRegex === -1) {
        // Applying classes in the items
        itemStructureLi.classList.add("listItem")
        itemStructureDiv.classList.add("textItem")
        itemStructureImg.classList.add("trashIcon")
        itemStructureButton.classList.add("deleteItem")

        // Searching for the image(trash) to put on the button
        itemStructureImg.src = "./assets/icons/trash.svg"
    
        // Changing the input type
        itemStructureInput.type = "checkbox"
    
        // Creating the elements
        item.append(itemStructureLi)
        itemStructureLi.append(itemStructureDiv)
        itemStructureDiv.append(itemStructureInput)
        itemStructureDiv.append(itemName)
    
        itemStructureLi.append(itemStructureButton)
        itemStructureButton.append(itemStructureImg)
    
        itemName.textContent = inputForm.value
    
        // Cleaning text in the input
        inputForm.value = ""
    } else {
        alert("Não é possível adicionar um item vazio, por favor digite o nome do item que você deseja adicionar.")
    }

    // Removing the item when the button is clicked
    itemStructureButton.addEventListener("click", () => {
        itemStructureLi.remove(itemStructureLi)
    })

})

// Removing the item when the button is clicked
button.forEach((button) => {
    button.addEventListener("click", () => {
        const li = document.querySelector("li")
        li.remove()
    })
})