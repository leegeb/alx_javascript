function validatePassword() {
    let password = document.getElementById("password").value;
    let errorElement = document.getElementById("error");
    errorElement.textContent = "";

    let lengthValid = password.length >= 8;
    let uppercaseValid = /[A-Z]/.test(password);
    let lowercaseValid = /[a-z]/.test(password);
    let digitValid = /\d/.test(password);
    let specialCharValid = /[!@#$%^&*]/.test(password);

    if (lengthValid && uppercaseValid && lowercaseValid && digitValid && specialCharValid) {
        return true;
    } else {
        errorElement.textContent = "Password does not meet the criteria.";
        return false;
    }
}
document.getElementById("validatePassword").addEventListener("submit", function (event) {
    if (!validatePassword()) {
        event.preventDefault();
    }
});