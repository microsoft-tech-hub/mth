document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is working!');

    // Back to Top button
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', () => {
 
  // ── Mobile nav toggle ──────────────────────────────────
  const toggle = document.getElementById('navToggle');
  const nav    = document.getElementById('siteNav');
 
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
 
    // Close nav when a link is clicked
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
  }
 
  // ── Back to Top ────────────────────────────────────────
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.style.display = window.scrollY > 200 ? 'flex' : 'none';
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  const tabs  = document.querySelectorAll('.events-tab');
  const cards = document.querySelectorAll('#eventsGrid .event-card');
 
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
 
      const filter = tab.dataset.filter;
 
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.type === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ── Team filter tabs ───────────────────────────────────
  const teamTabs   = document.querySelectorAll('.team-tab');
  const teamGroups = document.querySelectorAll('.team-section-group');

  teamTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      teamTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.team;
      teamGroups.forEach(group => {
        group.classList.toggle('hidden', group.dataset.group !== filter);
      });
    });
  });
});