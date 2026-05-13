// ==================== DARK MODE ==================== 
const darkModeToggle = document.querySelector('.btn-dark-mode');
const htmlElement = document.documentElement;

// Check for saved dark mode preference
function initDarkMode() {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    updateDarkModeButton();
  }
}

function toggleDarkMode() {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
  updateDarkModeButton();
}

function updateDarkModeButton() {
  const isDarkMode = document.body.classList.contains('dark-mode');
  darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
}

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', toggleDarkMode);
  initDarkMode();
}

// ==================== SIDEBAR ==================== 
const btnMenu = document.querySelector('.btn-menu');
const sidebar = document.querySelector('.sidebar');
const sidebarClose = document.querySelector('.sidebar-close');

function toggleSidebar() {
  sidebar.classList.toggle('active');
}

function closeSidebar() {
  sidebar.classList.remove('active');
}

if (btnMenu) {
  btnMenu.addEventListener('click', toggleSidebar);
}

if (sidebarClose) {
  sidebarClose.addEventListener('click', closeSidebar);
}

// Close sidebar when clicking on a link
if (sidebar) {
  const sidebarLinks = sidebar.querySelectorAll('a');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
  });
}

// ==================== NAVIGATION ==================== 
function navigateToPage(page) {
  window.location.href = page;
}

function navigateToSubject(subjectId) {
  window.location.href = `materi.html?subject=${subjectId}`;
}

function navigateToMaterial(subjectId, materialId) {
  window.location.href = `detail.html?subject=${subjectId}&material=${materialId}`;
}

// ==================== URL PARAMETERS ==================== 
function getUrlParameter(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// ==================== LOADING STATE ==================== 
function showLoading(element) {
  element.innerHTML = '<div class="loading-spinner"><div class="spinner"></div></div>';
}

function hideLoading() {
  const spinner = document.querySelector('.loading-spinner');
  if (spinner) {
    spinner.remove();
  }
}

// ==================== MATERIALS PAGE ==================== 
function loadMaterials() {
  const subjectId = parseInt(getUrlParameter('subject'));
  
  if (!subjectId) {
    window.location.href = 'index.html';
    return;
  }

  const subject = getSubject(subjectId);
  
  if (!subject) {
    window.location.href = 'index.html';
    return;
  }

  // Set page title and header
  document.title = `${subject.title} - Learning Hub`;
  
  const materialsHeader = document.querySelector('.materials-header');
  if (materialsHeader) {
    materialsHeader.innerHTML = `
      <div class="materials-header-icon">${subject.icon}</div>
      <div class="materials-header-content">
        <h1>${subject.title}</h1>
        <p>${subject.description}</p>
      </div>
    `;
    materialsHeader.style.color = subject.color;
  }

  // Load materials
  const materialsGrid = document.querySelector('.materials-grid');
  if (materialsGrid) {
    materialsGrid.innerHTML = '';
    
    subject.materials.forEach((material, index) => {
      const materialCard = document.createElement('div');
      materialCard.className = 'material-card fade-in';
      materialCard.style.animationDelay = `${index * 0.1}s`;
      materialCard.innerHTML = `
        <div class="material-image">${material.image}</div>
        <h3>${material.title}</h3>
        <p>${material.description}</p>
        <div class="material-meta">
          <span class="material-badge">${material.steps.length} Steps</span>
          <button class="btn-primary" onclick="navigateToMaterial(${subjectId}, ${material.id})">
            Learn →
          </button>
        </div>
      `;
      materialCard.addEventListener('click', (e) => {
        if (e.target.closest('.btn-primary')) return;
        navigateToMaterial(subjectId, material.id);
      });
      materialsGrid.appendChild(materialCard);
    });
  }
}

// ==================== DETAIL PAGE ==================== 
function loadDetail() {
  const subjectId = parseInt(getUrlParameter('subject'));
  const materialId = parseInt(getUrlParameter('material'));
  
  if (!subjectId || !materialId) {
    window.location.href = 'index.html';
    return;
  }

  const material = getMaterial(subjectId, materialId);
  const subject = getSubject(subjectId);
  
  if (!material || !subject) {
    window.location.href = 'index.html';
    return;
  }

  // Update page title
  document.title = `${material.title} - Learning Hub`;

  // Load header
  const detailHeader = document.querySelector('.detail-header');
  if (detailHeader) {
    detailHeader.innerHTML = `
      <div class="container">
        <div class="detail-header-content">
          <div class="detail-header-image">${material.image}</div>
          <div class="detail-header-text">
            <h1>${material.title}</h1>
            <p>${material.description}</p>
            <a href="materi.html?subject=${subjectId}" class="btn-secondary">
              ← Back to ${subject.title}
            </a>
          </div>
        </div>
      </div>
    `;
  }

  // Load main content
  const detailMain = document.querySelector('.detail-main');
  if (detailMain) {
    let stepsHTML = '<div class="steps"><h2>📚 Step-by-Step Guide</h2>';
    
    material.steps.forEach((step, index) => {
      let imagesHTML = '';
      if (step.images && step.images.length > 0) {
        imagesHTML = '<div class="step-images">';
        step.images.forEach(image => {
          imagesHTML += `<img src="${image}" alt="${step.title}" class="step-image">`;
        });
        imagesHTML += '</div>';
      }
      
      stepsHTML += `
        <div class="step fade-in" style="animation-delay: ${index * 0.1}s">
          <div class="step-number">${step.number}</div>
          <div class="step-content">
            <h3>${step.title}</h3>
            <p>${step.content}</p>
            ${imagesHTML}
          </div>
        </div>
      `;
    });
    stepsHTML += '</div>';

    let templateButtonHTML = '';
    if (material.templateUrl || material.toolDownloadUrl) {
      templateButtonHTML = '<div class="template-section fade-in">';
      
      if (material.templateUrl) {
        templateButtonHTML += `
          <h2>🎮 Buka Template Project</h2>
          <p>Klik tombol di bawah untuk membuka template project di Scratch. Jangan lupa login ke akun Scratch Anda terlebih dahulu!</p>
          <a href="${material.templateUrl}" target="_blank" class="btn-template">
            Buka Template di Scratch →
          </a>
        `;
      }
      
      if (material.toolDownloadUrl) {
        templateButtonHTML += `
          <h2>⬇️ Download Starter Tool</h2>
          <p>Download Starter Tool berikut untuk membuat Spoon Tool di game Anda.</p>
          <a href="${material.toolDownloadUrl}" target="_blank" class="btn-template">
            Download Starter Tool →
          </a>
        `;
      }
      
      templateButtonHTML += '</div>';
    }

    detailMain.innerHTML = `
      <div class="detail-video fade-in">
        <iframe src="${material.video}" title="Tutorial Video" allowfullscreen></iframe>
      </div>
      <div class="detail-description">
        <h2>📖 About This Lesson</h2>
        <p>${material.description}</p>
      </div>
      ${templateButtonHTML}
      ${stepsHTML}
    `;
  }

  // Load sidebar
  const detailSidebar = document.querySelector('.detail-sidebar');
  if (detailSidebar) {
    const materials = getSubjectMaterials(subjectId);
    const currentIndex = materials.findIndex(m => m.id === materialId);
    const progress = ((currentIndex + 1) / materials.length) * 100;

    let navButtons = '<div class="nav-buttons">';
    
    if (currentIndex > 0) {
      const prevMaterial = materials[currentIndex - 1];
      navButtons += `
        <button class="nav-button" onclick="navigateToMaterial(${subjectId}, ${prevMaterial.id})">
          ← Previous
        </button>
      `;
    } else {
      navButtons += '<button class="nav-button" disabled>← Previous</button>';
    }

    if (currentIndex < materials.length - 1) {
      const nextMaterial = materials[currentIndex + 1];
      navButtons += `
        <button class="nav-button" onclick="navigateToMaterial(${subjectId}, ${nextMaterial.id})">
          Next →
        </button>
      `;
    } else {
      navButtons += '<button class="nav-button" disabled>Next →</button>';
    }

    navButtons += '</div>';

    detailSidebar.innerHTML = `
      <div class="progress-widget">
        <h3>📊 Your Progress</h3>
        <div class="progress-bar">
          <div class="progress-fill" style="--progress: ${progress}%"></div>
        </div>
        <div class="progress-text">
          ${currentIndex + 1} of ${materials.length} completed
        </div>
      </div>

      <div class="navigation-widget">
        <h3>📍 Navigation</h3>
        ${navButtons}
      </div>

      <div class="tips-widget">
        <h3>💡 Pro Tip</h3>
        <p>Take your time with each step. Practice makes perfect! Don't rush through the lessons.</p>
      </div>
    `;
  }
}

// ==================== LANDING PAGE ==================== 
function loadLandingPage() {
  const subjectsGrid = document.querySelector('.subjects-grid');
  
  if (subjectsGrid) {
    subjectsGrid.innerHTML = '';
    
    coursesData.subjects.forEach((subject, index) => {
      const card = document.createElement('div');
      card.className = 'subject-card fade-in';
      card.style.animationDelay = `${index * 0.1}s`;
      card.style.color = subject.color;
      card.innerHTML = `
        <div class="subject-icon">${subject.icon}</div>
        <h3>${subject.title}</h3>
        <p>${subject.description}</p>
        <button class="btn-primary" onclick="navigateToSubject(${subject.id})">
          Explore →
        </button>
      `;
      card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-primary')) return;
        navigateToSubject(subject.id);
      });
      subjectsGrid.appendChild(card);
    });
  }
}

// ==================== PAGE INITIALIZATION ==================== 
function initPage() {
  const path = window.location.pathname;
  
  if (path.includes('materi.html')) {
    loadMaterials();
  } else if (path.includes('detail.html')) {
    loadDetail();
  } else {
    loadLandingPage();
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);

// ==================== SMOOTH SCROLL ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ==================== 
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.subject-card, .material-card, .step').forEach(el => {
    observer.observe(el);
  });
});
