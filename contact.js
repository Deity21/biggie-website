// Contact Form Submission
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    contactForm.reset();
});
const menuToggle = document.createElement("button");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = "☰";
document.querySelector("nav").prepend(menuToggle);

menuToggle.addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("menu-open");
});
