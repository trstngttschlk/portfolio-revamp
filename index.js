// local projects data
const projects = [
   {
      id: 1,
      name: "Project 1",
      img: "#",
      tech: "Javascript, React, HTML, CSS",
      liveLink: "http://google.com",
      codeLink: "https://twitter.com"
   },
   {
      id: 2,
      name: "Project 2",
      img: "#",
      tech: "Javascript, HTML, CSS",
      liveLink: "#",
      codeLink: "#"
   },
   {
      id: 3,
      name: "Project 3",
      img: "#",
      tech: "Javascript, HTML, CSS",
      liveLink: "#",
      codeLink: "#"
   },
   {
      id: 4,
      name: "Project 4",
      img: "#",
      tech: "Javascript, HTML, CSS",
      liveLink: "#",
      codeLink: "#"
   }
]

// select carousel projects
const img = document.getElementById("project-img")
const name = document.getElementById("project-name")
const tech = document.getElementById("project-tech")
const liveLink = document.getElementById("live-link")
const codeLink = document.getElementById("code-link")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

// set starting projects
let currentProject = 0

// load initial project
window.addEventListener('DOMContentLoaded', () => {
   showProject(currentProject)
})

// show project based on project
function showProject() {
   const project = projects[currentProject]
   img.src = project.img
   name.textContent = project.name
   tech.textContent = project.tech
   liveLink.href = project.liveLink
   codeLink.href = project.codeLink
}

// show next project
nextBtn.addEventListener("click", () => {
   currentProject++
   if(currentProject > projects.length-1) {
       currentProject = 0
   }
   showProject()
})
// show prev project
prevBtn.addEventListener("click", () => {
   currentProject--
   if(currentProject < 0) {
      currentProject = projects.length-1
   }
   showProject()
})