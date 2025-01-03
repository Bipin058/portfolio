const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => alert("Thank you for your submission"))
    .catch((error) => alert(error));
};

document.querySelector("form").addEventListener("submit", handleSubmit);
// Smooth Scrolling
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});
// Toggle Menu for Mobile
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
  const isExpanded = navLinks.classList.contains("show");
  document
    .querySelector(".toggle-menu")
    .setAttribute("aria-expanded", isExpanded);
}

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

// Form Validation
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    e.preventDefault();
    alert("Please fill in all fields before submitting.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    e.preventDefault();
    alert("Please enter a valid email address.");
  }
});

// Scroll Animation (Fade-in Effects)
const sections = document.querySelectorAll("section");
const options = {
  threshold: 0.3,
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
} else {
  sections.forEach((section) => {
    section.classList.add("visible");
  });
}

// Dynamic Image Addition
const projects = [
  {
    title: "Hungry circle : Computer Graphics",
    description:
      "A simple 2D game developed in C, showcasing foundational computer graphics concepts like transformations and animations",
    imageUrl: "images/g1.png",
    link: "https://github.com/Bipin058/ComputerGraphicsProject-3rd-Year-.git",
  },
  {
    title: "Brain Tumor Classification using AI/ML ",
    description:
      "A website that detects brain tumor types from MRI images using TensorFlow and a trained CNN model.",
    imageUrl: "images/bt1.png",
    link: "#",
  },
  {
    title:
      "Smart Health : A blockchain based e-HealthCare solution with voice authentication ",
    description:
      "A health app using Flutter (Dart) that enables patients to book appointments, set reminders, and securely upload medical reports using AES encryption, IPFS, and Solana blockchain.",
    imageUrl: "images/1.png",
    link: "https://github.com/Bipin058/SMART_HEALTH.git",
  },
];

const projectGrid = document.querySelector(".project-grid");
projects.forEach((project) => {
  const projectItem = document.createElement("div");
  projectItem.classList.add("project-item");
  projectItem.innerHTML = `
        <img src="${project.imageUrl}" alt="${project.title}">
        <div class="project-overlay">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="btn">View on GitHub</a>
        </div>
    `;

  projectItem.addEventListener("mouseover", () => {
    projectItem.style.transform = "scale(1.05)";
    projectItem.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)";
  });

  projectItem.addEventListener("mouseout", () => {
    projectItem.style.transform = "scale(1)";
    projectItem.style.boxShadow = "none";
  });

  projectGrid.appendChild(projectItem);
});

// Add delay to download
document.getElementById("downloadAction").addEventListener("click", () => {
  setTimeout(() => {
    const link = document.createElement("a");
    link.href = "images/Bipin_resume (2).pdf";
    link.download = "bipinresume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, 2000);
});

// Open the file in a new tab
document.getElementById("openAction").addEventListener("click", () => {
  window.open("images/Bipin_resume (2).pdf", "_blank");
});

// Toggle Theme
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

// Dynamic Skill Rotator
const dynamicSkill = document.getElementById("dynamic-skill");
const skills = ["photography", "traveling", "problem-solving"];
let skillIndex = 0;

function rotateSkill() {
  skillIndex = (skillIndex + 1) % skills.length;
  dynamicSkill.textContent = skills[skillIndex];
  dynamicSkill.style.color =
    skillIndex % 2 === 0 ? "rgb(99, 91, 240)" : "#f39c12";
}

setInterval(rotateSkill, 1500);

// About Section Fade-In Effect on Scroll
const aboutText = document.querySelector(".about-text");
const profilePic = document.getElementById("profile-pic");

function handleScroll() {
  const aboutSection = aboutText.getBoundingClientRect();
  if (aboutSection.top < window.innerHeight - 100) {
    aboutText.classList.add("visible");
    profilePic.style.transform = "scale(1.1)";
  } else {
    aboutText.classList.remove("visible");
    profilePic.style.transform = "scale(1)";
  }
}

window.addEventListener("scroll", handleScroll);
