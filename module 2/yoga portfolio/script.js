const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill all fields!";
    } else {
        formMessage.textContent = "Message sent successfully! ✓";
        form.reset();
    }
});

const title = document.querySelector("#home h1");

const text = "Hi, I'm Yogalakshmi";
let index = 0;

title.textContent = "";

function typeEffect() {
    if (index < text.length) {
        title.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️ Light Mode";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }

});
const sections = document.querySelectorAll("section");

function revealSections() {
    sections.forEach(function(section) {
        const position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);

revealSections();
const projectButtons = document.querySelectorAll(".view-btn");

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.getElementById("closeModal");

projectButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const projectName = button.getAttribute("data-project");

        modalTitle.textContent = projectName;
        modalDescription.textContent =
            "This is my " + projectName + " project.";

        modal.style.display = "block";
    });

});

closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
