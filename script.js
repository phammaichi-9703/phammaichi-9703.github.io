// Typing effect
const text = "Security | Reverse Engineering | AI";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

typeEffect();


// Fake project data (you can replace later)
const projects = [
    {
        name: "Buffer Overflow Lab",
        desc: "Practice exploiting stack vulnerabilities"
    },
    {
        name: "Mini Debugger",
        desc: "Basic debugger using ptrace / WinAPI"
    },
    {
        name: "Android App",
        desc: "Login + Firebase integration"
    }
];

// Render projects
const container = document.getElementById("projects");

projects.forEach(p => {
    const div = document.createElement("div");
    div.className = "project";

    div.innerHTML = `
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
  `;

    container.appendChild(div);
});


// Small hacker-style console log 😎
console.log("Welcome to Juni's system...");