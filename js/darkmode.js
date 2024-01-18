const darkModeToggle = document.getElementById('dark');
const bodyElement = document.body;

document.addEventListener('DOMContentLoaded', (event) => {
    const item = localStorage.getItem('mode') || 'light';
    bodyElement.className = item;
});

function toggleDarkMode() {
    bodyElement.classList.toggle('dark');
    bodyElement.classList.toggle('light');
    const mode = bodyElement.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('mode', mode);
}

darkModeToggle.addEventListener('click', toggleDarkMode, false);