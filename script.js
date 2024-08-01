document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        'Netflix Clone',
        'Animation Website',
        'Portfolio Website'
    ];

    const projectList = document.getElementById('projectList');

    projects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = project;
        projectList.appendChild(li);
    });
});
