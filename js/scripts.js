const toggle = document.getElementById('dark-mode-toggle');
const html = document.documentElement;

// Check for saved user preference
if (localStorage.getItem('darkMode') === 'enabled') {
    html.classList.add('dark-mode');
}

toggle.addEventListener('click', () => {
    html.classList.toggle('dark-mode');

    // Save user preference
    if (html.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});
