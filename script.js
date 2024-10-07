// In this code if the window content loaded successfully then the menubar is going to work
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.openbtn svg');
    const closeIcon = document.querySelector('.sliderBar .cose-btn svg');
    const sliderBar = document.querySelector('.sliderBar');


    menuIcon.addEventListener('click', () => {
        sliderBar.classList.add('active');
    });

    closeIcon.addEventListener('click', () => {
        sliderBar.classList.remove('active');
    });
});



// form validation and the submit come here

document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const password = document.getElementById("password").value.trim();


    if (!firstName || !lastName) {
        alert("First Name and Last Name are required fields.");
        return;
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    // candidate can enter the digit 10 not less not more
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneNumber)) {
        alert("Please enter a valid phone number.");
        return;
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }


    console.log(`first_name: "${firstName}", 
last_name: "${lastName}", 
Email: ${email}, 
Phone Number : ${phoneNumber}, 
Password (Type: password): ${password}`);

    // this is for reset the form data
    document.getElementById("contactForm").reset();
});
