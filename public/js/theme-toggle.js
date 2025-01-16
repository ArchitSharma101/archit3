document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme');

  // Apply the saved theme on load
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = '☀️'; // Update icon for light mode
  }

  // Toggle theme on button click
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    toggleButton.textContent = isDarkMode ? '☀️' : '🌙'; // Update icon
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  });
});
