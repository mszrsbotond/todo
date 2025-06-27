import { completeTask, projects } from "./logic"


const projectsDiv = document.querySelector(".projects")
const mainScreen = document.querySelector(".main-screen")

function loadTasks(project) {
    let taskContainer = document.querySelector(".taskContainer");

    // 2. If it doesn't exist, create and append it
    if (!taskContainer) {
        taskContainer = document.createElement("div");
        taskContainer.classList.add("taskContainer");
        mainScreen.appendChild(taskContainer);
    }

    // 3. Clear old tasks before adding new ones
    taskContainer.innerHTML = "";


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
            projects.forEach(projectFromStorage => {
                if (projectFromStorage.name == project.name) {
                    let updatedProject = projectFromStorage
                    loadTasks(updatedProject)
                }
            })
        })

        taskContainer.appendChild(taskDiv)
    })

    mainScreen.appendChild(taskContainer)
}

function loadProjectsAndTasksToMain(project) {
    mainScreen.innerHTML = ""

    let projectTitle = document.createElement("h1")
    projectTitle.textContent = project.name
    mainScreen.appendChild(projectTitle)

    loadTasks(project)

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