const screen = document.querySelector(".main-screen")

export function addProjectForm(){
        screen.innerHTML = ``

    const form = document.createElement("form");

    // --- Title ---
    let titleContainer = document.createElement("div");
    titleContainer.className = "title-container";
    let titleLabel = document.createElement("label");
    titleLabel.textContent = "Title";
    titleLabel.htmlFor = "title";
    let titleInput = document.createElement("input");
    titleInput.id = "title";
    titleInput.className = "title-input";
    titleInput.required = true;
    titleInput.placeholder = "Water the plants";
    titleContainer.appendChild(titleLabel);
    titleContainer.appendChild(titleInput);
    form.appendChild(titleContainer);

    // --- Description ---
    let descContainer = document.createElement("div");
    descContainer.className = "description-container";
    let descLabel = document.createElement("label");
    descLabel.textContent = "Description";
    descLabel.htmlFor = "description";
    let descInput = document.createElement("input");
    descInput.id = "description";
    descInput.className = "description-input";
    descInput.required = true;
    descInput.placeholder = "Add more details...";
    descContainer.appendChild(descLabel);
    descContainer.appendChild(descInput);
    form.appendChild(descContainer);

    // submit
    let submitContainer = document.createElement("div")
    submitContainer.className = "submit"
    let submit = document.createElement("input")
    submit.type = "submit"
    submit.value = "Add Project"

    submitContainer.appendChild(submit)
    form.appendChild(submitContainer)

    // Add to screen
    screen.appendChild(form);
}