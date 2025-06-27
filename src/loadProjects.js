import { completeTask, projects } from "./logic"


const projectsDiv = document.querySelector(".projects")
const mainScreen = document.querySelector(".main-screen")

function loadProjectsAndTasksToMain(project) {
    mainScreen.innerHTML = ""

    let projectTitle = document.createElement("h1")
    projectTitle.textContent = project.name
    mainScreen.appendChild(projectTitle)

    project.tasks.forEach(task => {
        let taskDiv = document.createElement("div")
        taskDiv.classList.add("taskDiv")

        let taskTitle = document.createElement("h1")
        taskTitle.textContent = task.title
        taskDiv.appendChild(taskTitle)

        let compTask = document.createElement("button")
        compTask.textContent = "COMPLETE"
        taskDiv.appendChild(compTask)
        compTask.addEventListener("click", () => {
            completeTask(task)
        })

        mainScreen.appendChild(taskDiv)
    })

}

export function loadProjects() {
    projects.forEach(project => {
        let projectTab = document.createElement("button")
        projectTab.textContent = project.name

        projectsDiv.appendChild(projectTab)

        projectTab.addEventListener("click", () => {
            loadProjectsAndTasksToMain(project)
        })
    })
}