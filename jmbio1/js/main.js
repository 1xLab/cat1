/**
 * JM Bioanálises - Main JavaScript
 * Using GSAP for animations
 */

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  initAnimations();
  initSmoothScroll();
  initThemeStorage();
});

/**
 * Initialize all GSAP animations
 */
function initAnimations() {
  // Hero section animations
  gsap.to('.hero-content', {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.3,
    onComplete: function() {
      document.querySelector('.hero-content')?.classList.add('animated');
    }
  });

  gsap.to('.hero-card', {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: 'power3.out',
    delay: 0.6,
    onComplete: function() {
      document.querySelector('.hero-card')?.classList.add('animated');
    }
  });

  // Segment cards - staggered animation
  gsap.from('.segment-card', {
    scrollTrigger: {
      trigger: '.segment-card',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  });

  // Metric cards - counter animation
  const metricCards = document.querySelectorAll('.metric-card');
  metricCards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      scale: 0.9,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.15,
      ease: 'back.out(1.5)'
    });
  });

  // Differentiator cards
  gsap.from('.diff-card', {
    scrollTrigger: {
      trigger: '.diff-card',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    ease: 'power2.out'
  });

  // CTA cards
  gsap.from('.cta-card', {
    scrollTrigger: {
      trigger: '.cta-card',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  });

  // Section headers animation
  const sectionHeaders = document.querySelectorAll('section h2');
  sectionHeaders.forEach(header => {
    gsap.from(header, {
      scrollTrigger: {
        trigger: header,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    });
  });

  // Parallax effect on hero image
  gsap.to('.hero-content img', {
    scrollTrigger: {
      trigger: 'section:first-of-type',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    },
    y: 100,
    ease: 'none'
  });

  // Header sticky animation
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {
      className: 'scrolled',
      targets: 'header'
    }
  });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 80
          },
          ease: 'power3.inOut'
        });
      }
    });
  });
}

/**
 * Persist theme preference in localStorage
 */
function initThemeStorage() {
  // Load saved theme
  const savedTheme = localStorage.getItem('jm-theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    // Update Alpine.js data if available
    if (window.Alpine) {
      Alpine.store('theme', savedTheme);
    }
  }

  // Watch for theme changes
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'data-theme') {
        const newTheme = document.documentElement.getAttribute('data-theme');
        localStorage.setItem('jm-theme', newTheme);

        // Animate theme transition
        gsap.to('body', {
          duration: 0.3,
          ease: 'power2.inOut'
        });
      }
    });
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });
}

/**
 * Utility: Animate counter numbers
 */
function animateCounter(element, target, duration = 2) {
  const obj = { value: 0 };
  gsap.to(obj, {
    value: target,
    duration: duration,
    ease: 'power1.out',
    onUpdate: function() {
      element.textContent = Math.round(obj.value);
    }
  });
}

/**
 * Utility: Add hover animations to buttons
 */
document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    gsap.to(this, {
      scale: 1.02,
      duration: 0.2,
      ease: 'power2.out'
    });
  });

  btn.addEventListener('mouseleave', function() {
    gsap.to(this, {
      scale: 1,
      duration: 0.2,
      ease: 'power2.out'
    });
  });
});

/**
 * Intersection Observer for lazy loading and animations
 */
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      fadeInObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements with fade-in class
document.querySelectorAll('.fade-in, .slide-up, .scale-in').forEach(el => {
  fadeInObserver.observe(el);
});

// Console welcome message
console.log('%cJM Bioanálises', 'color: #f26b21; font-size: 24px; font-weight: bold;');
console.log('%cExames Toxicológicos para Motoristas', 'color: #6b7280; font-size: 14px;');
