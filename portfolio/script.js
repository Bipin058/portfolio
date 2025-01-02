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
  // Fallback for browsers that do not support IntersectionObserver
  sections.forEach((section) => {
    section.classList.add("visible");
  });
}

// Dynamic Image Addition
const projects = [
  {
    title: "Graphics Project",
    description: "An interactive graphics project created using OpenGL.",
    imageUrl: "images/g1.png",
    link: "https://github.com/Bipin058/ComputerGraphicsProject-3rd-Year-.git",
  },
  {
    title: "Minor Project",
    description:
      "A software project developed during my undergraduate program.",
    imageUrl: "images/bt1.png",
    link: "#",
  },

  {
    title: "Major Project",
    description:
      "A comprehensive project focused on real-world problem-solving.",
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
            <a href="${project.link}" class="btn">View in github</a>
        </div>
    `;

  // Adding hover effect to project item
  projectItem.addEventListener("mouseover", () => {
    projectItem.style.transform = "scale(1.05)";
    projectItem.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)";
    projectItem.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
  });

  projectItem.addEventListener("mouseout", () => {
    projectItem.style.transform = "scale(1)";
    projectItem.style.boxShadow = "none";
  });

  projectGrid.appendChild(projectItem);
});
// Add delay to download
document
  .getElementById("downloadAction")
  .addEventListener("click", function () {
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "images/Bipin_resume (2).pdf"; // Replace with the file path
      link.download = "bipinresume.pdf"; // Optional: Rename the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 2000); // Delay of 2000ms (2 seconds)
  });

// Open the file in a new tab
document.getElementById("openAction").addEventListener("click", function () {
  window.open("images/Bipin_resume (2).pdf", "_blank"); // Replace with the file path
});
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
// Fade-In Effect on Scroll
const aboutText = document.querySelector('.about-text');
const profilePic = document.getElementById('profile-pic');
const dynamicSkill = document.getElementById('dynamic-skill');

// Skills to Rotate
const skills = ['photography', 'traveling', 'blockchain', 'problem-solving'];
let skillIndex = 0;

// Skill Rotator Function
function rotateSkill() {
    skillIndex = (skillIndex + 1) % skills.length;
    dynamicSkill.textContent = skills[skillIndex];
    dynamicSkill.style.color = skillIndex % 2 === 0 ? 'rgb(99, 91, 240)' : '#f39c12';
}

// Run Skill Rotation Every 2 Seconds
setInterval(rotateSkill, 1500);

// Add Fade-In on Scroll
function handleScroll() {
    const aboutSection = aboutText.getBoundingClientRect();
    if (aboutSection.top < window.innerHeight - 100) {
        aboutText.classList.add('visible');
        profilePic.style.transform = 'scale(1.1)';
    } else {
        aboutText.classList.remove('visible');
        profilePic.style.transform = 'scale(1)';
    }
}

// Listen for Scroll Event
window.addEventListener('scroll', handleScroll);
