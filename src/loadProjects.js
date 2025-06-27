const projectsDiv = document.querySelector(".projects")
const mainScreen = document.querySelector(".main-screen")

const storedProjects = JSON.parse(localStorage.getItem("projects"))

function loadProjectsAndTasksToMain(project){
    mainScreen.innerHTML = ""

    let projectTitle = document.createElement("h1")
    projectTitle.textContent = project.name
    mainScreen.appendChild(projectTitle)

    project.tasks.forEach(task => {
        let taskDiv = document.createElement("div")

        let taskTitle = document.createElement("h1")
        taskTitle.textContent = task.title

        taskDiv.appendChild(taskTitle)

        mainScreen.appendChild(taskDiv)
    })

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