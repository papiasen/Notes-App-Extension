let myNotes = []
let inputFieldEl = document.getElementById("input-field")
const addBtn = document.getElementById("add-button")
const deleteBtn = document.getElementById("delete-button")
const ulEl = document.getElementById("notes-list")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myNotes"))



if (leadsFromLocalStorage) {
    myNotes = leadsFromLocalStorage
    render(myNotes)
}



function render(notes) {
    let listItems = ""
    for (let i = 0; i < notes.length; i++) {
        listItems += `
            <li>
                ${notes[i]}
            </li>
        `
    }
    ulEl.innerHTML = listItems
}




deleteBtn.addEventListener("click", function () {
    localStorage.clear()
    myNotes = []
    render(myNotes)
})



addBtn.addEventListener("click", function () {
    myNotes.push(inputFieldEl.value)
    inputFieldEl.value = ""

    localStorage.setItem("myNotes", JSON.stringify(myNotes))
    render(myNotes)
})
