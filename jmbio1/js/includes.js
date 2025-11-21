/**
 * JM Bioanalises - Include System
 * Carrega header.html e footer.html em todas as paginas
 * Inclui scroll detection para header translucido
 */

document.addEventListener('DOMContentLoaded', function() {
  // Carrega o header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    fetch('includes/header.html')
      .then(response => response.text())
      .then(data => {
        headerPlaceholder.innerHTML = data;
        initHeaderScroll();
        setActiveNavLink();
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

/**
 * Header scroll detection
 * Adiciona classe 'scrolled' quando usuario rola a pagina
 */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  let lastScroll = 0;
  const scrollThreshold = 50;

  function handleScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }

  // Verifica estado inicial
  handleScroll();

  // Adiciona listener com throttle para performance
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Define link ativo baseado na pagina atual
 */
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}
