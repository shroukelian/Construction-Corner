(() => {
    const toggle = document.getElementById('menuToggle'), nav = document.getElementById('mainNav');
    if (toggle && nav) {
        const close = () => { nav.classList.remove('open'); toggle.classList.remove('active'); toggle.setAttribute('aria-expanded', 'false') };
        toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.classList.toggle('active', open); toggle.setAttribute('aria-expanded', String(open)) });
        nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
        document.addEventListener('click', e => { if (!nav.contains(e.target) && !toggle.contains(e.target)) close() });
        window.addEventListener('resize', () => { if (innerWidth > 820) close() });
    }
    const items = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) { const observer = new IntersectionObserver((entries, obs) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }), { threshold: .12, rootMargin: '0px 0px -25px 0px' }); items.forEach(el => observer.observe(el)) }
    else items.forEach(el => el.classList.add('visible'));
    const buttons = document.querySelectorAll('.filter-btn'), cards = document.querySelectorAll('.project-card');
    buttons.forEach(btn => btn.addEventListener('click', () => { buttons.forEach(b => b.classList.toggle('active', b === btn)); const filter = btn.dataset.filter; cards.forEach(card => { const show = filter === 'all' || card.dataset.category === filter; card.classList.toggle('is-hidden', !show); if (show && card.animate) card.animate([{ opacity: .3, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 320, easing: 'ease-out' }) }) }));
    document.querySelectorAll('details').forEach(item => item.addEventListener('toggle', () => { const s = item.querySelector('summary span'); if (s) s.textContent = item.open ? '−' : '＋' }));
    const year = document.getElementById('year'); if (year) year.textContent = new Date().getFullYear();
})();