function generateInputFields(selectedValue) {
    let inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = "";

    for (let i = 1; i <= selectedValue; i++) {
        let inputField = document.createElement("input");
        inputField.type = "text";
        inputField.name = "field" + i;
        inputField.placeholder = "Field " + i;
        inputContainer.appendChild(inputField);
    }
}
let numFieldsDropdown = document.getElementById("numFields");
numFieldsDropdown.addEventListener("change", function () {
    let selectedValue = parseInt(numFieldsDropdown.value);
    generateInputFields(selectedValue);
});

function validateForm() {
    let inputFields = document.querySelectorAll("#inputContainer input");
    let errorElement = document.getElementById("error");
    errorElement.textContent = "";
    let allFieldsFilled = true;

    for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value.trim() === "") {
            allFieldsFilled = false;
            break;
        }
    }

    if (!allFieldsFilled) {
        errorElement.textContent = "Please fill in all fields.";
        event.preventDefault();
    }
}
let dynamicForm = document.getElementById("dynamicForm");
dynamicForm.addEventListener("submit", validateForm);