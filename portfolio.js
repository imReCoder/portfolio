// Topbar & Tabs
const topbar = document.getElementById('topbar');
const btnWork = document.getElementById('btnWork');
const btnInfo = document.getElementById('btnInfo');
const panelWork = document.getElementById('panelWork');
const panelInfo = document.getElementById('panelInfo');

// Scroll Fade In
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

function initFade(root) {
    root.querySelectorAll('.fade-in').forEach((el) => {
        el.classList.remove('visible');
        fadeObserver.observe(el);
    });
}
initFade(document.body);

// Topbar background on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        topbar.style.background = 'rgba(10, 10, 10, 0.92)';
        topbar.style.backdropFilter = 'blur(16px)';
        topbar.style.webkitBackdropFilter = 'blur(16px)';
    } else {
        topbar.style.background = 'linear-gradient(180deg, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0) 100%)';
        topbar.style.backdropFilter = 'none';
        topbar.style.webkitBackdropFilter = 'none';
    }
});

// Tab Switching
const tabsIndicator = document.querySelector('.tabs-indicator');

function updateIndicator(activeBtn) {
    if (!tabsIndicator || !activeBtn) return;
    const offsetLeft = activeBtn.offsetLeft;
    const btnWidth = activeBtn.offsetWidth;
    const indicatorWidth = 24; // Fixed glowing line width
    const translate = offsetLeft + (btnWidth / 2) - (indicatorWidth / 2);
    tabsIndicator.style.transform = `translateX(${translate}px)`;
}

// Initial setup
const queryParams = new URLSearchParams(window.location.search);
if (queryParams.get('tab') === 'work') {
    switchTab('work');
} else {
    updateIndicator(btnInfo);
}

function switchTab(tabId) {
    if (tabId === 'work') {
        panelWork.classList.remove('hidden');
        panelInfo.classList.add('hidden');
        btnWork.classList.add('active');
        btnInfo.classList.remove('active');
        updateIndicator(btnWork);
        initFade(panelWork);
    } else {
        panelInfo.classList.remove('hidden');
        panelWork.classList.add('hidden');
        btnInfo.classList.add('active');
        btnWork.classList.remove('active');
        updateIndicator(btnInfo);
        initFade(panelInfo);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

btnWork.addEventListener('click', () => switchTab('work'));
btnInfo.addEventListener('click', () => switchTab('info'));

// Re-calc indicator position on window resize
window.addEventListener('resize', () => {
    const activeBtn = document.querySelector('.tab-btn.active');
    updateIndicator(activeBtn);
});

// Footer tab links
document.querySelectorAll('.ft-link[data-tab]').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        switchTab(link.dataset.tab);
    });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileDropdown = document.getElementById('mobileDropdown');

if (menuToggle && mobileDropdown) {
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = menuToggle.classList.toggle('open');
        mobileDropdown.classList.toggle('show', isOpen);
    });

    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !mobileDropdown.contains(e.target)) {
            menuToggle.classList.remove('open');
            mobileDropdown.classList.remove('show');
        }
    });
}
