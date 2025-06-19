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


// Create scroll to top button dynamically
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '⬆';
scrollBtn.id = 'scrollTopBtn';
document.body.appendChild(scrollBtn);

// Show/hide button on scroll
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// Scroll to top when clicked
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
