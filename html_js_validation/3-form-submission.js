function handleFormSubmit(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let errorElement = document.getElementById("error");
    let successElement = document.getElementById("success");

    errorElement.textContent = "";
    successElement.textContent = "";

    if (name.trim() === "" || email.trim() === "") {
        errorElement.textContent = "Please fill in all required fields.";
    } else {
        successElement.textContent = "Form submitted successfully!";
    }
}
let submitForm = document.getElementById("submitForm");
submitForm.addEventListener("submit", handleFormSubmit);