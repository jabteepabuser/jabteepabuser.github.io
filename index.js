var slideIndex = 0;
showSlides();


function showSlides() {
    var hehe;
    var slides = document.getElementsByClassName("mySlides");
    for (hehe = 0; hehe < slides.length; hehe++) {
        slides[hehe].style.display = "none";
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 2000);

}

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const emailInput = document.getElementById("email");
    const confirmEmailInput = document.getElementById("confirmEmail");

    // VALIDATOR STUFFS
    function validateEmail() {
        const email = emailInput.value.trim();
        const confirmEmail = confirmEmailInput.value.trim();

        if (email !== confirmEmail) {
            confirmEmailInput.setCustomValidity("Email addresses must match");
        } else {
            confirmEmailInput.setCustomValidity(""); // TO RESET IT!
        }
    }

    
    confirmEmailInput.addEventListener("input", validateEmail);


    contactForm.addEventListener("submit", function(event) {
        //In case user is stupid.
        validateEmail();

        // VALIDATOR STUFFS
        if (!contactForm.checkValidity()) {
            // Preventinator
            event.preventDefault();
            console.log("Form not valid. Please correct errors.");
        } else {
            console.log("Form submitted successfully!");
        }
    });
});