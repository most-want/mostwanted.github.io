// script.js

// Menu Filtering Function
function showCategory(category) {
  const items = document.querySelectorAll('.menu-item');
  const buttons = document.querySelectorAll('.tab-btn');
  
  // Update active button
  buttons.forEach(btn => {
    if (btn.textContent.toLowerCase().includes(category) || (category === 'all' && btn.textContent === 'All')) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Show/hide items
  items.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = 'grid';
    } else {
      item.style.display = 'none';
    }
  });
}

// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);
      
      // Basic validation
      if (!data.name || !data.email || !data.message) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
      }
      
      // Simulate form submission
      showFormMessage('Thank you for your message! We will contact you soon.', 'success');
      contactForm.reset();
    });
  }
  
  // Background Music Control
  const bgMusic = document.getElementById('bgMusic');
  if (bgMusic) {
    bgMusic.volume = 0.3; // Set volume to 30%
  }
});

function showFormMessage(message, type) {
  const messageDiv = document.getElementById('formMessage');
  if (messageDiv) {
    messageDiv.textContent = message;
    messageDiv.className = 'form-message';
    messageDiv.classList.add(type === 'success' ? 'success' : 'error');
    
    // Remove message after 5 seconds
    setTimeout(() => {
      messageDiv.textContent = '';
      messageDiv.className = 'form-message';
    }, 5000);
  }
}

// Toggle Background Music
function toggleMusic() {
  const bgMusic = document.getElementById('bgMusic');
  const musicBtn = document.querySelector('.music-btn');
  
  if (bgMusic.paused) {
    bgMusic.play();
    if (musicBtn) musicBtn.textContent = '🔇 Stop Music';
  } else {
    bgMusic.pause();
    if (musicBtn) musicBtn.textContent = '🎵 Play Music';
  }
}

// Image Gallery Lightbox (optional enhancement)
function openLightbox(imageSrc) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <span class="close" onclick="closeLightbox()">&times;</span>
      <img src="${imageSrc}" alt="Enlarged view">
    </div>
  `;
  document.body.appendChild(lightbox);
}

function closeLightbox() {
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    lightbox.remove();
  }
}

// Add CSS for lightbox
const lightboxStyles = `
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 90vh;
  border-radius: 10px;
}

.lightbox .close {
  position: absolute;
  top: -40px;
  right: 0;
  color: white;
  font-size: 30px;
  cursor: pointer;
}
`;

// Inject lightbox styles
const styleSheet = document.createElement('style');
styleSheet.textContent = lightboxStyles;
document.head.appendChild(styleSheet);