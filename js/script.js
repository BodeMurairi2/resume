// downloadResume function to download the resume
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'cv/bode_cv.pdf';
    link.download = 'Bode_Murai_Murai_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Function to toggle light and dark mode
function toggleTheme() {
    var body = document.body;
    var button = document.getElementById('dark-mode');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        button.textContent = 'Light Mode';
    } else {
        button.textContent = 'Dark Mode';
    }
}