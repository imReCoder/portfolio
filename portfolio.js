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
function switchTab(tabId) {
    if (tabId === 'work') {
        panelWork.classList.remove('hidden');
        panelInfo.classList.add('hidden');
        btnWork.classList.add('active');
        btnInfo.classList.remove('active');
        initFade(panelWork);
    } else {
        panelInfo.classList.remove('hidden');
        panelWork.classList.add('hidden');
        btnInfo.classList.add('active');
        btnWork.classList.remove('active');
        initFade(panelInfo);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

btnWork.addEventListener('click', () => switchTab('work'));
btnInfo.addEventListener('click', () => switchTab('info'));

// Footer tab links
document.querySelectorAll('.ft-link[data-tab]').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        switchTab(link.dataset.tab);
    });
});
