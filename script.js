// Splash Screen Termination
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.classList.remove('overflow-hidden');
        document.body.classList.add('overflow-x-hidden');
        setTimeout(() => {
            const splash = document.getElementById('splash-screen');
            if(splash) splash.style.display = 'none';
        }, 1000);
    }, 4800); 
});

// Single-Page-App Tab Routing Function
function switchPage(pageId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => sec.classList.add('hidden'));

    const targetSection = document.getElementById('page-' + pageId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('text-white', 'border-b-2', 'border-schoolGold');
        btn.classList.add('text-gray-200');
    });

    const activeBtn = document.getElementById('nav-' + pageId);
    if (activeBtn) {
        activeBtn.classList.remove('text-gray-200');
        activeBtn.classList.add('text-white', 'border-b-2', 'border-schoolGold');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Multi-Photo Modal Opening Routine
function openNewsModal(title, tag, content, images = []) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-tag').innerText = tag;
    document.getElementById('modal-content').innerText = content;
    
    const gallery = document.getElementById('modal-gallery');
    gallery.innerHTML = ''; // Reset previous images
    
    if (Array.isArray(images) && images.length > 0) {
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.className = 'w-full h-48 object-cover rounded-lg shadow-md border border-gray-200';
            gallery.appendChild(img);
        });
    }

    document.getElementById('custom-modal').classList.remove('hidden');
    document.body.classList.add('overflow-hidden'); // Prevent background body scroll
}

function closeNewsModal() {
    document.getElementById('custom-modal').classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

document.getElementById('custom-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeNewsModal();
    }
});

// ==============================================
// AUTOMATIC SPORTS IMAGE SLIDER (3 SECONDS)
// ==============================================
let currentSportSlide = 0;

function cycleSportsSlider() {
    const slides = document.querySelectorAll('.sport-slide');
    if(slides.length === 0) return; // Failsafe if not on sports page
    
    // 1. Fade out the current slide
    slides[currentSportSlide].classList.remove('opacity-100');
    slides[currentSportSlide].classList.add('opacity-0');
    
    // 2. Calculate the next slide number
    currentSportSlide = (currentSportSlide + 1) % slides.length;
    
    // 3. Fade in the new slide
    slides[currentSportSlide].classList.remove('opacity-0');
    slides[currentSportSlide].classList.add('opacity-100');
}

// Run the cycle every 3000 milliseconds (3 seconds)
setInterval(cycleSportsSlider, 3000);