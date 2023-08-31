let notes = [];

function updateDOM(data) {
  const outputContainer = document.getElementById("output-container");
  outputContainer.innerHTML = "";
  data.forEach((element, index) => {
    const card = document.createElement("div");

    card.style.backgroundColor = element.colorHex;
    card.classList.add("notes-card")
    card.innerHTML = `<p>${element.content}</p>
        <button class="delete-btn" data-index ="$index">Delete</button>
        `;
    outputContainer.appendChild(card);

    const deleteButton = card.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
      deleteHandler(index);
      console.log("delete clicked")
  });
});
}

function deleteHandler(indexToDelete) {
    notes.splice(indexToDelete, 1);
    updateDOM(notes);
  }
  
function saveHandler() {
 

  const textBox = document.getElementById("text-input");
  const notesValue = textBox.value;

 
  const colorInput = document.getElementById("color-input");
  const colorCode = colorInput.value;

  const obj = {
    content: notesValue,
    colorHex: colorCode,
  };

  notes.push(obj);
  updateDOM(notes);

  textBox.value = "";
  colorInput.value = "";
}

const saveButton = document.getElementById("save-btn");

saveButton.addEventListener("click", saveHandler);
