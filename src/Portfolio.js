// Skill Section

// Array of skills with logos and descriptions
const skills = [
  {
    name: "JavaScript",
    logo: "assets/JavaScript_logo.png",
    description:
      "JavaScript is a versatile programming language used for web development, enabling dynamic and interactive user experiences.",
  },
  {
    name: "Java",
    logo: "assets/Java_logo.png",
    description:
      "Java is a popular programming language, widely used for building enterprise-grade applications, Android development, and backend systems.",
  },
  {
    name: "Python",
    logo: "assets/Python_logo.png",
    description:
      "Python is a high-level programming language known for its readability and versatility in data science, web development, and AI.",
  },
  {
    name: "PHP",
    logo: "assets/php-logo.png",
    description:
      "PHP is a server-side scripting language used for developing dynamic web pages and server-side applications.",
  },
  {
    name: "Node.Js",
    logo: "assets/Node.js_logo.png",
    description:
      "Node.js is a runtime environment that allows you to execute JavaScript code on the server side, often used for scalable network applications.",
  },
  {
    name: "React",
    logo: "assets/React_logo.png",
    description:
      "React is a JavaScript library for building fast and interactive user interfaces for web and mobile applications.",
  },

  {
    name: "SQL",
    logo: "assets/SQL_logo.png",
    description:
      "SQL is a standard language for accessing and manipulating relational databases.",
  },
  {
    name: "MySQL",
    logo: "assets/mysql_logo.png",
    description:
      "MySQL is an open-source relational database management system based on SQL.",
  },
  {
    name: "Bootstrap",
    logo: "assets/bootstrap_logo.jpeg",
    description:
      "Bootstrap is a front-end framework for developing responsive and mobile-first websites.",
  },
  {
    name: "Tailwind CSS",
    logo: "assets/tailwind_logo.png",
    description:
      "Tailwind CSS is a utility-first CSS framework for building modern, responsive designs quickly.",
  },
  {
    name: "SaaS",
    logo: "assets/Saas_logo.png", // Add your SaaS logo image path here
    description:
      "SaaS (Software as a Service) provides software over the internet, eliminating the need for internal infrastructure and offering scalable solutions for businesses.",
  },
  {
    name: "Express.js",
    logo: "assets/Express.js_logo.png",
    description:
      "Express.js is a fast and minimalist web framework for Node.js, used to build backend applications.",
  },
  {
    name: "Figma",
    logo: "assets/figma_logo.jpg",
    description:
      "Figma is a cloud-based design tool for creating user interfaces, prototypes, and graphics collaboratively.",
  },
  {
    name: "MongoDB",
    logo: "assets/MongoDB_logo.jpeg",
    description:
      "MongoDB is a NoSQL database that stores data in a flexible, JSON-like format.",
  },
  {
    name: "Git",
    logo: "assets/Git_logo.png",
    description:
      "Git is a distributed version control system for tracking changes in source code during software development.",
  },
  {
    name: "Docker",
    logo: "assets/docker_logo.webp",
    description:
      "Docker is a platform for developing, shipping, and running applications in containers.",
  },
];

// Get DOM elements
const skillsGrid = document.getElementById("skillsGrid");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");
const closePopup = document.getElementById("closePopup");

// Function to create skill items dynamically
function createSkills() {
  skills.forEach((skill) => {
    const skillItem = document.createElement("div");
    skillItem.classList.add("skill-item");
    skillItem.innerHTML = `
      <img src="${skill.logo}" alt="${skill.name}" class="skill-logo">
      <p>${skill.name}</p>
    `;

    // Add click event to open popup
    skillItem.addEventListener("click", () => {
      showPopup(skill.name, skill.description);
    });

    skillsGrid.appendChild(skillItem);
  });
}

// Function to show the popup with skill details
function showPopup(title, description) {
  popupTitle.textContent = title;
  popupDescription.textContent = description;
  popup.style.display = "flex";
}

// Event listener to close the popup
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// Initialize skills
createSkills();

// EXPERIENCE SECTION

// Array of experiences with logos, roles, and descriptions
const experiences = [
  {
    company: "Encriptix",
    logo: "assets/Antha_prerna_cell.png",
    role: "Software Intern",
    description:
      "Worked on developing scalable web applications using the MERN stack, improving UI/UX, and enhancing performance by 20%.",
  },
  {
    company: "Prodigy InfoTech",
    logo: "assets/ProdigyInfoTech_logo.png",
    role: "Backend Developer Intern",
    description:
      "Designed and implemented APIs for e-commerce platforms, ensuring 99.9% uptime and efficient database management.",
  },
  {
    company: "College Placement Cell",
    logo: "assets/Placement_cell_logo.jpeg",
    role: "Volunteer",
    description:
      "Organized technical workshops and managed online platforms to improve student participation by 40%.",
  },
];

// Get DOM elements
const experienceGrid = document.getElementById("experienceGrid");
const popupExperience = document.getElementById("popupExperience");
const popupExperienceTitle = document.getElementById("popupExperienceTitle");
const popupExperienceDescription = document.getElementById(
  "popupExperienceDescription"
);
const closePopupExperience = document.getElementById("closePopupExperience");

// Function to dynamically create experience items
function createExperienceItems() {
  experiences.forEach((experience) => {
    const experienceItem = document.createElement("div");
    experienceItem.classList.add("experience-item");
    experienceItem.innerHTML = `
      <img src="${experience.logo}" alt="${experience.company}" class="experience-logo">
      <h4>${experience.company}</h4>
      <p>${experience.role}</p>
    `;

    // Add click event to open the popup with details
    experienceItem.addEventListener("click", () => {
      showPopup(experience.company, experience.description);
    });

    experienceGrid.appendChild(experienceItem);
  });
}

// Function to display popup
function showPopup(title, description) {
  popupExperienceTitle.textContent = title;
  popupExperienceDescription.textContent = description;
  popupExperience.style.display = "flex";
}

// Function to close the popup
closePopupExperience.addEventListener("click", () => {
  popupExperience.style.display = "none";
});

// Initialize the experience section
createExperienceItems();




// Project Section

// Project data using an array of objects
const projects = [
  {
    title: "Home Service Website",
    image: "./assets/Project1.png", // Replace with your image URL
    description:
      "I built a Home service website for the society with 2 way interaction  the website name is SAMIP. Basically it is designed for streamline the process of booking and managing home maintenance services. The platform allows users to browse a variety of services such as plumbing, electrical repairs, and cleaning, while offering seamless two-way communication with service providers to ensure clarity and customization of tasks.",
    technologies: ["React", "JavaScript", "Tailwind", "Git"],
  },
  {
    title: "Myntra clone",
    image: "./assets/Project2.png", // Replace with your image URL
    description:
      "Myntra Clone (Built Using Only HTML and CSS) is a static e-commerce website designed to replicate the look and feel of Myntra, focusing on showcasing fashion products such as clothing, footwear, and accessories.",
    technologies: ["HTML", "CSS", "Bootstrap",],
  },
  {
    title: "Virtual Assistant",
    image: "./assets/Project3.png", // Replace with your image URL
    description: "Sirri is a basic virtual assistant created using only JavaScript. It leverages JavaScript's powerful functionality to handle user commands, answer queries, and automate simple tasks.",
    technologies: ["JavaScript"],
  },
  {
    title: "Chat-App",
    image: "./assets/Project4.png", // Replace with your image URL
    description:
      "Social media platform for sharing study materials and resources.",
    technologies: ["Socket.io", "Node.js", "JavScript", "TailwindCSS"],
  },
];

// Dynamically create project cards
const projectsContainer = document.getElementById("projects");

projects.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  projectCard.innerHTML = `
          <img src="${project.image}" alt="${project.title}" class="project-image" />
          <div class="project-content">
              <h3 class="project-title">${project.title}</h3>
              <p class="project-description">${project.description}</p>
              <div class="project-tech">
                ${project.technologies
      .map((tech) => `<span class="tech-badge">${tech}</span>`)
      .join("")}
              </div>
          </div>
      `;
  projectsContainer.appendChild(projectCard);
});