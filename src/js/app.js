const form = document.getElementById('resume-form');
const githubUrlInput = document.getElementById('github-url');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const githubUrl = githubUrlInput.value.trim();

  // Validate the GitHub repository URL
  if (!isValidGitHubUrl(githubUrl)) {
    errorMessage.textContent = 'Please enter a valid GitHub repository URL.';
    return;
  }

  // Clear any previous error message
  errorMessage.textContent = '';

  // Proceed with fetching the resume text file
  // (Implementation for this will come later)
  console.log('Valid GitHub URL:', githubUrl);
});

function isValidGitHubUrl(url) {
  // Regular expression to match a valid GitHub repository URL
  const pattern = /^https:\/\/github.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+$/;
  return pattern.test(url);
}