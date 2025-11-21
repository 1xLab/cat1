/**
 * JM Bioanalises - Main JavaScript
 * Using GSAP for animations and vanilla JS for interactivity
 */

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

// ==========================================
// GSAP Animations
// ==========================================

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animations
document.addEventListener('DOMContentLoaded', function() {
  // Hero content animation
  gsap.fromTo('.hero-content',
    {
      opacity: 0,
      x: -50
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.3
    }
  );

  // Hero card animation
  gsap.fromTo('.hero-card',
    {
      opacity: 0,
      x: 50,
      scale: 0.95
    },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5
    }
  );

  // Segment cards stagger animation
  gsap.fromTo('.segment-card',
    {
      opacity: 0,
      y: 40
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#segments-grid',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );

  // Differentiators cards animation
  gsap.fromTo('.diff-card',
    {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#differentiators-grid',
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    }
  );

  // CTA cards animation
  gsap.fromTo('.cta-card',
    {
      opacity: 0,
      y: 40
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.cta-card',
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    }
  );

  // Section headers animation
  gsap.utils.toArray('section h2').forEach(function(heading) {
    gsap.fromTo(heading,
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Footer animation
  gsap.fromTo('footer',
    {
      opacity: 0
    },
    {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    }
  );
});

// ==========================================
// Smooth Scroll for anchor links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    var targetId = this.getAttribute('href');
    if (targetId && targetId !== '#') {
      var target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// ==========================================
// Theme Persistence
// ==========================================
(function() {
  var savedTheme = localStorage.getItem('jmbio-theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  // Watch for theme changes
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
        var theme = document.documentElement.getAttribute('data-theme');
        localStorage.setItem('jmbio-theme', theme);
      }
    });
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });
})();

// ==========================================
// Intersection Observer for lazy animations
// ==========================================
var observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

var fadeObserver = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .stagger-children').forEach(function(el) {
  fadeObserver.observe(el);
});

// ==========================================
// Header scroll behavior
// ==========================================
(function() {
  var header = document.querySelector('header');
  var lastScroll = 0;

  window.addEventListener('scroll', function() {
    var currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      header.classList.remove('shadow-lg');
      return;
    }

    if (currentScroll > lastScroll && currentScroll > 80) {
      // Scrolling down & past header
      header.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      header.style.transform = 'translateY(0)';
      header.classList.add('shadow-lg');
    }

    lastScroll = currentScroll;
  });

  header.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
})();

// ==========================================
// Form Validation (for future forms)
// ==========================================
function validateForm(form) {
  var isValid = true;
  var inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

  inputs.forEach(function(input) {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add('border-red-500');
      showError(input, 'Este campo e obrigatorio');
    } else {
      input.classList.remove('border-red-500');
      hideError(input);
    }

    // Email validation
    if (input.type === 'email' && input.value) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        isValid = false;
        input.classList.add('border-red-500');
        showError(input, 'Email invalido');
      }
    }

    // Phone validation
    if (input.type === 'tel' && input.value) {
      var phoneRegex = /^[\d\s\-\(\)]+$/;
      if (!phoneRegex.test(input.value)) {
        isValid = false;
        input.classList.add('border-red-500');
        showError(input, 'Telefone invalido');
      }
    }
  });

  return isValid;
}

function showError(input, message) {
  var errorEl = input.nextElementSibling;
  if (!errorEl || !errorEl.classList.contains('error-message')) {
    errorEl = document.createElement('span');
    errorEl.className = 'error-message text-red-500 text-xs mt-1';
    input.parentNode.insertBefore(errorEl, input.nextSibling);
  }
  errorEl.textContent = message;
}

function hideError(input) {
  var errorEl = input.nextElementSibling;
  if (errorEl && errorEl.classList.contains('error-message')) {
    errorEl.remove();
  }
}

// ==========================================
// Utility Functions
// ==========================================

// Format phone number
function formatPhone(value) {
  var numbers = value.replace(/\D/g, '');
  if (numbers.length <= 10) {
    return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}

// Format CPF
function formatCPF(value) {
  var numbers = value.replace(/\D/g, '');
  return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

// Debounce function
function debounce(func, wait) {
  var timeout;
  return function executedFunction() {
    var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      func.apply(context, args);
    }, wait);
  };
}

// ==========================================
// Console welcome message
// ==========================================
console.log('%cJM Bioanalises', 'color: #f26b21; font-size: 24px; font-weight: bold;');
console.log('%cExames Toxicologicos para Motoristas', 'color: #6b7280; font-size: 14px;');
console.log('%chttps://jmtox.com.br', 'color: #2563eb; font-size: 12px;');
