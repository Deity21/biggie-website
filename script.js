// Theme Toggle Functionality
document.querySelector(".theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
});

// Load Theme Preference
window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    }
    
    // Ensure Theme Toggle Icon is Visible
    const themeToggle = document.createElement("div");
    themeToggle.classList.add("theme-toggle");
    themeToggle.innerHTML = "🌙";
    themeToggle.style.cursor = "pointer";
    themeToggle.style.fontSize = "24px";
    themeToggle.style.marginRight = "100px";
    
    document.querySelector("nav").appendChild(themeToggle);
    
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
        themeToggle.innerHTML = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
    });
};

// Pop-up Modal Functionality
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

setTimeout(() => {
    document.getElementById("popup").style.display = "block";
}, 5000);

// Testimonial Slider Functionality
const slider = document.querySelector(".testimonial-slider");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    slider.scrollLeft = scrollLeft - walk;
});




function redirectToContact() {
    window.location.href = "contact.html";
}