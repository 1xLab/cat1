/**
 * JM Bioanalises - Include System
 * Carrega header.html e footer.html em todas as paginas
 */

document.addEventListener('DOMContentLoaded', function() {
  // Carrega o header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    fetch('includes/header.html')
      .then(response => response.text())
      .then(data => {
        headerPlaceholder.innerHTML = data;
      })
      .catch(error => console.error('Erro ao carregar header:', error));
  }

  // Carrega o footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    fetch('includes/footer.html')
      .then(response => response.text())
      .then(data => {
        footerPlaceholder.innerHTML = data;
      })
      .catch(error => console.error('Erro ao carregar footer:', error));
  }
});
