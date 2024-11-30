const saveToLocalStorageButton = document.getElementById("saveToLocalStorage");
const saveToSessionStorageButton = document.getElementById("saveToSessionStorage");
const agreementCheckbox = document.getElementById("agreement");
const contactForm = document.getElementById("contactForm");

// Validate form fields
function formValidate() {
    const userName = document.getElementById("userName").value ;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const password = document.getElementById("password").value;

    // Validate Contact Form
    const usernamePattern = /^[a-zA-Z]+$/;
    if (!usernamePattern.test(userName)) {
        alert("Username must contain only letters.");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    const dobPattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!dobPattern.test(dob)) {
        alert("Date of Birth must be in the format YYYY-MM-DD.");
        return false;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneNumber)) {
        alert("Phone Number must be exactly 10 digits.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    return true;
}

// Save data to local storage
function saveToLocalStorage() {
    if (agreementCheckbox.checked) {
        if (formValidate()) {
            const userName = document.getElementById("userName").value;
            const email = document.getElementById("email").value;
            const dob = document.getElementById("dob").value;
            const phoneNumber = document.getElementById("phoneNumber").value;
            const password = document.getElementById("password").value;
            
            const formData = {
                userName,
                email,
                dob,
                phoneNumber,
                password
            };
            
            localStorage.setItem("formData", JSON.stringify(formData));
            alert("Data saved to Local Storage.");
        }
    } else {
        alert("Agree to terms before saving your data.");
    }
}

// Save data to session storage
function saveToSessionStorage() {
    if (agreementCheckbox.checked) {
        if (formValidate()) {
            const userName = document.getElementById("userName").value;
            const email = document.getElementById("email").value;
            const dob = document.getElementById("dob").value;
            const phoneNumber = document.getElementById("phoneNumber").value;
            const password = document.getElementById("password").value;
            
            const formData = {
                userName,
                email,
                dob,
                phoneNumber,
                password
            };
            
            sessionStorage.setItem("formData", JSON.stringify(formData));
            alert("Data saved to Session Storage.");
        }
    } else {
        alert("Agree to terms before saving your data.");
    }
}

// Clear form and storage
function clearForm() {
    localStorage.removeItem("formData");
    sessionStorage.removeItem("formData");
    contactForm.reset(); // Reset the form fields
    updateButtons();
    alert("Form cleared and data removed from storage.");
}

// Add event listeners to buttons and form
saveToLocalStorageButton.addEventListener("click", saveToLocalStorage);
saveToSessionStorageButton.addEventListener("click", saveToSessionStorage);
contactForm.addEventListener("reset", clearForm);

// Initialize button states based on checkbox status
updateButtons();
