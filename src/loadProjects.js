const projectsDiv = document.querySelector(".projects")
const mainScreen = document.querySelector(".main-screen")

const storedProjects = JSON.parse(localStorage.getItem("projects"))

function loadProjectsAndTasksToMain(project){
    mainScreen.innerHTML = ""

    let projectTitle = document.createElement("h1")
    projectTitle.textContent = project.name

    project.tasks.forEach(task => {
        let taskElement = document.createElement("p")
        taskElement.textContent = task.name
    })

    mainScreen.appendChild(projectTitle)
}

export function loadProjects(){
    storedProjects.forEach(project => {
        let projectTab = document.createElement("button")
        projectTab.textContent = project.name

        projectsDiv.appendChild(projectTab)

        projectTab.addEventListener("click", () => {
            loadProjectsAndTasksToMain(project)
        })
        })
}