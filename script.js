const createBtn = document.querySelector(".btn");
const notesContainer = document.querySelector(".notes-container");
let notes = document.querySelectorAll(".input-box");
const popup = document.querySelector(".popup");


function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.id = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete-icon.png";
    //img.className = "open-popup"
    notesContainer.appendChild(inputBox).appendChild(img);
})



notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG"){ 
        const note = e.target.parentElement;
        const deleteIconRect = this.getBoundingClientRect();
        //console.log(deleteIconRect);
        document.getElementById("popup").setAttribute(
            "style", "visibility: visible; transform: translate(-50%,-50%) scale(1); position:fixed");
        // document.getElementById("popup").style.top = deleteIconRect.top + "px";
        // document.getElementById("popup").style.left = deleteIconRect.right + "px"; // Set popup's top position
        popup.addEventListener("click", function(e) {
            if(e.target.className === "choice1"){
                note.remove();
                updateStorage();
                document.getElementById("popup").style.visibility = "hidden";
            }
            else if(e.target.className === "choice2"){
                updateStorage();
                document.getElementById("popup").style.visibility = "hidden";
            }
        })
        
        // confirm("Are you Sure");
        // e.target.parentElement.remove();
        // updateStorage();
    }
    else if (e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        });
    }
    
})

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})



// const createBtn = document.querySelector(".btn");
// const notesContainer = document.querySelector(".notes-container");
// const popup = document.querySelector(".popup");

// // Show notes from localStorage
// function showNotes() {
//     const savedNotes = localStorage.getItem("notes");
//     if (savedNotes) {
//         notesContainer.innerHTML = savedNotes;
//     }
// }
// showNotes();

// // Update notes in localStorage
// function updateStorage() {
//     localStorage.setItem("notes", notesContainer.innerHTML);
// }

// // Function to handle delete note
// function deleteNote() {
//     const note = this.parentElement;
//     popup.style.visibility = "visible";
//     popup.addEventListener("click", function handlePopupClick(e) {
//         if (e.target.classList.contains("choice1")) {
//             note.remove();
//             updateStorage();
//         }
//         popup.style.visibility = "hidden";
//         popup.removeEventListener("click", handlePopupClick);
//     });
// }

// // Function to add a new note
// function addNote() {
//     const inputBox = document.createElement("p");
//     const img = document.createElement("img");
//     inputBox.className = "input-box";
//     inputBox.setAttribute("contenteditable", "true");
//     img.src = "images/delete-icon.png";
//     img.addEventListener("click", deleteNote);
//     notesContainer.appendChild(inputBox).appendChild(img);
// }

// // Event listener for adding a new note
// createBtn.addEventListener("click", addNote);

// // Event listener for editing notes
// notesContainer.addEventListener("input", function handleNoteEdit(e) {
//     if (e.target.tagName === "P") {
//         updateStorage();
//     }
// });

// // Prevent default behavior of Enter key in contenteditable elements
// document.addEventListener("keydown", function handleKeyDown(event) {
//     if (event.key === "Enter") {
//         document.execCommand("insertLineBreak");
//         event.preventDefault();
//     }
// });



