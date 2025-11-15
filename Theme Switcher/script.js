const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Set initial theme to light
body.classList.add('light');

themeToggle.addEventListener('click', function() {
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
    }
});