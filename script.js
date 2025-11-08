// Load CV data and render sections
let cvData = null;

// Fetch and initialize
async function init() {
  try {
    const response = await fetch('./cv.json');
    cvData = await response.json();
    renderAllSections();
    initInteractions();
    updateFooter();
  } catch (error) {
    console.error('Failed to load CV data:', error);
  }
}

// Render all sections
function renderAllSections() {
  if (!cvData) return;
  
  renderAbout();
  renderAchievements();
  renderExperience();
  renderProjects();
  renderPublications();
  renderSkills();
  renderTeaching();
  renderCertificates();
  renderLanguages();
}

// About
function renderAbout() {
  const aboutText = document.getElementById('about-text');
  if (aboutText && cvData.about) {
    aboutText.textContent = cvData.about;
  }
}

// Achievements
function renderAchievements() {
  const container = document.getElementById('achievements-list');
  container.innerHTML = cvData.achievements
    .map(achievement => `
      <div class="badge">
        <div class="badge-year">${achievement.year}</div>
        <div class="badge-result">${achievement.result}</div>
        <div class="badge-event">${achievement.event}</div>
      </div>
    `)
    .join('');
}

// Experience
function renderExperience() {
  const container = document.getElementById('experience-list');
  container.innerHTML = cvData.experience
    .map(exp => `
      <div class="timeline-item">
        <div class="timeline-header">
          <h3 class="timeline-title">${exp.role}</h3>
          <div class="timeline-org">${exp.organization}</div>
          <div class="timeline-duration">${exp.duration}</div>
        </div>
        ${exp.description ? `<p class="timeline-description">${exp.description}</p>` : ''}
      </div>
    `)
    .join('');
}

// Projects with filtering
let activeFilters = new Set();

function renderProjects() {
  const container = document.getElementById('projects-list');
  const filtersContainer = document.getElementById('project-filters');
  const emptyState = document.getElementById('projects-empty');
  
  // Get all unique tags
  const allTags = new Set();
  cvData.projects.forEach(project => {
    project.tags.forEach(tag => allTags.add(tag));
  });
  
  // Render filter chips
  filtersContainer.innerHTML = Array.from(allTags)
    .map(tag => `
      <button class="filter-chip" data-tag="${tag}">${tag}</button>
    `)
    .join('');
  
  // Add filter event listeners
  filtersContainer.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const tag = chip.dataset.tag;
      
      if (activeFilters.has(tag)) {
        activeFilters.delete(tag);
        chip.classList.remove('active');
      } else {
        activeFilters.add(tag);
        chip.classList.add('active');
      }
      
      filterProjects();
    });
  });
  
  // Initial render
  filterProjects();
}

function filterProjects() {
  const container = document.getElementById('projects-list');
  const emptyState = document.getElementById('projects-empty');
  
  let filteredProjects = cvData.projects;
  
  if (activeFilters.size > 0) {
    filteredProjects = cvData.projects.filter(project =>
      project.tags.some(tag => activeFilters.has(tag))
    );
  }
  
  if (filteredProjects.length === 0) {
    container.innerHTML = '';
    emptyState.hidden = false;
  } else {
    emptyState.hidden = true;
    container.innerHTML = filteredProjects
      .map(project => `
        <div class="project-card">
          <h3 class="project-title">${project.title}</h3>
          <div class="project-duration">${project.duration}</div>
          ${project.description ? `<p>${project.description}</p>` : ''}
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
      `)
      .join('');
  }
}

// Publications
function renderPublications() {
  const container = document.getElementById('publications-list');
  container.innerHTML = cvData.publications
    .map(pub => `
      <div class="publication">
        <div class="publication-citation">
          <span class="publication-authors">${pub.authors}</span>, 
          "${pub.title}," 
          <em>${pub.venue}</em>, 
          ${pub.year}, pp. ${pub.pages}.
        </div>
        <a href="${pub.doi}" class="publication-link" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
          DOI: ${pub.doi.split('/').pop()}
        </a>
      </div>
    `)
    .join('');
}

// Skills
function renderSkills() {
  const programmingContainer = document.getElementById('programming-skills');
  const toolsContainer = document.getElementById('tools-skills');
  const socialContainer = document.getElementById('social-skills');
  
  programmingContainer.innerHTML = cvData.skills.programming
    .map(skill => `<span class="skill-chip">${skill}</span>`)
    .join('');
  
  toolsContainer.innerHTML = cvData.skills.tools
    .map(skill => `<span class="skill-chip">${skill}</span>`)
    .join('');
  
  socialContainer.innerHTML = cvData.skills.social
    .map(skill => `<span class="skill-chip">${skill}</span>`)
    .join('');
}

// Teaching & Volunteering
function renderTeaching() {
  const container = document.getElementById('teaching-list');
  container.innerHTML = cvData.teaching
    .map(item => `<li>${item}</li>`)
    .join('');
}

// Certificates
function renderCertificates() {
  const container = document.getElementById('certificates-list');
  container.innerHTML = cvData.certificates
    .map(cert => `<li>${cert}</li>`)
    .join('');
}

// Languages
function renderLanguages() {
  const container = document.getElementById('languages-list');
  container.innerHTML = cvData.languages
    .map(lang => `
      <div class="language-chip">
        <span class="language-name">${lang.language}</span>
        <span class="language-level">${lang.level}</span>
      </div>
    `)
    .join('');
}

// Initialize interactions
function initInteractions() {
  setupMobileMenu();
  setupScrollSpy();
  setupBackToTop();
  setupCopyButtons();
}

// Mobile menu toggle
function setupMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isExpanded);
      menu.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    menu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('active');
      });
    });
  }
}

// Scroll spy for navigation
function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.setAttribute('aria-current', 'true');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      }
    });
  }, observerOptions);
  
  sections.forEach(section => observer.observe(section));
}

// Back to top button
function setupBackToTop() {
  const backToTop = document.querySelector('.back-to-top');
  
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTop.hidden = false;
      } else {
        backToTop.hidden = true;
      }
    });
    
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Copy to clipboard functionality
function setupCopyButtons() {
  const copyButtons = document.querySelectorAll('.btn-copy');
  
  copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const textToCopy = button.dataset.copy;
      
      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast('Copied to clipboard!');
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Copied to clipboard!');
      }
    });
  });
}

// Toast notification
function showToast(message) {
  const toast = document.querySelector('.toast');
  toast.textContent = message;
  toast.hidden = false;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.hidden = true;
    }, 200);
  }, 2000);
}

// Update footer with current year and last updated date
function updateFooter() {
  const yearElement = document.getElementById('current-year');
  const updatedElement = document.getElementById('last-updated');
  
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  if (updatedElement) {
    const lastModified = document.lastModified;
    const date = new Date(lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    updatedElement.textContent = date.toLocaleDateString('en-US', options);
    updatedElement.setAttribute('datetime', date.toISOString());
  }
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

