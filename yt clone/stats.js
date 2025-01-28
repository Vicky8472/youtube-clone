const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;
const lightSvg = document.getElementById('light-svg'); // The SVG element

// Toggle dark and light mode on button click
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        lightSvg.setAttribute('class', 'bi bi-moon'); 
    } else {
        lightSvg.setAttribute('class', 'bi bi-moon-fill'); 
    }
});
