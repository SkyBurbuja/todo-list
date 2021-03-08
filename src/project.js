let project = (projectName) => {
    this.projectName = projectName;
    let taskList = [];

    const addTask = (task) => {
        taskList.push(task);
    }

    return {addTask,projectName,taskList};
}

export default project;