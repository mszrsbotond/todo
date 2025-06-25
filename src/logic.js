export const projects = []

export class Project {
    constructor(name){
        this.name = name
        this.tasks = []
    }

    addTask(task) {
        this.tasks.push(task)    
    }
}

export function createProject(name){
    const project = new Project(name)
    projects.push(project)
    return project 
}

createProject("To Do")

export class Task {
    constructor(title, description, dueDate, priority, status, project) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.status = status
        this.project = project
    }

    addToProject(){
        projects.forEach(project => {
            if(project.name == this.project){
                project.addTask(this)
            }
        })
    }
}