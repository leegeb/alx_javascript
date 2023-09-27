function validateEmail() {
    let email = document.getElementById("email").value;
    let errorElement = document.getElementById("error");
    errorElement.textContent = "";

    let emailPattern = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (emailPattern.test(email)) {
        return true;
    } else {
        errorElement.textContent = "Please enter a valid email address.";
        return false;
    }
}
document.getElementById("emailForm").addEventListener("submit", function (event) {
    if (!validateEmail()) {
        event.preventDefault();
    }
});