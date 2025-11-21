/**
 * JM Bioanalises - Include System
 * Carrega header.html e footer.html em todas as paginas
 * Inclui scroll detection para header translucido
 * Inclui sistema de temas dark/light mode
 */

// Inicializa tema antes do DOM carregar para evitar flash
(function() {
  const savedTheme = localStorage.getItem('jmbio-theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
})();

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
        initThemeToggle();
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

/**
 * Theme Toggle - Dark/Light Mode
 * Persiste preferencia no localStorage
 */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  // Determina tema atual
  function getCurrentTheme() {
    const saved = localStorage.getItem('jmbio-theme');
    if (saved) return saved;

    // Se nao tem preferencia salva, verifica sistema
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'sunrise'; // light mode default
  }

  // Aplica tema
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('jmbio-theme', theme);

    // Atualiza aria-label para acessibilidade
    const isDark = theme === 'dark';
    toggleBtn.setAttribute('aria-label', isDark ? 'Ativar modo claro' : 'Ativar modo escuro');
  }

  // Toggle entre temas
  function toggleTheme() {
    const current = getCurrentTheme();
    const newTheme = current === 'dark' ? 'sunrise' : 'dark';
    setTheme(newTheme);
  }

  // Event listener
  toggleBtn.addEventListener('click', toggleTheme);

  // Atualiza aria-label inicial
  const currentTheme = getCurrentTheme();
  const isDark = currentTheme === 'dark';
  toggleBtn.setAttribute('aria-label', isDark ? 'Ativar modo claro' : 'Ativar modo escuro');

  // Escuta mudancas no sistema
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Apenas aplica se usuario nao definiu preferencia
    if (!localStorage.getItem('jmbio-theme')) {
      setTheme(e.matches ? 'dark' : 'sunrise');
    }
  });
}
