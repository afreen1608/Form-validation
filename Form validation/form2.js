// Full Name validation
function validateName() {
    const fullName = document.getElementById("fullName").value;
    const nameError = document.getElementById("nameError");

    if (fullName.length < 5) {
        nameError.textContent = "Name must be at least 5 characters long.";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}

// Email validation
function validateEmail() {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");

    if (!email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

// Phone Number validation
function validatePhone() {
    const phone = document.getElementById("phone").value;
    const phoneError = document.getElementById("phoneError");

    if (phone === "123456789" || phone.length !== 10 || isNaN(phone)) {
        phoneError.textContent = "Phone number must be 10 digits and not sequential.";
        return false;
    } else {
        phoneError.textContent = "";
        return true;
    }
}

// Password validation
function validatePassword() {
    const password = document.getElementById("password").value;
    const fullName = document.getElementById("fullName").value;
    const passwordError = document.getElementById("passwordError");

    if (password.toLowerCase() === "password" || password === fullName || password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters and not 'password' or your name.";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}

// Confirm Password validation
function validateConfirmPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        return false;
    } else {
        confirmPasswordError.textContent = "";
        return true;
    }
}

// Form validation
function validateForm() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPhoneValid = validatePhone();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
        alert("Form submitted successfully!");
        return true;
    } else {
        alert("Please fix the errors in the form.");
        return false;
    }
}