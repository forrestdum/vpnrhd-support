// Navigation
function renderNav() {
  const nav = document.querySelector('.nav-inner');
  if (!nav) return;

  const logo = document.createElement('a');
  logo.className = 'nav-logo';
  logo.href = 'index.html';
  logo.innerHTML = '<span class="logo-icon">&#x1F512;</span>' + SITE.name;
  nav.appendChild(logo);

  const links = document.createElement('nav');
  links.className = 'nav-links';
  NAV_ITEMS.forEach(item => {
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.label;
    links.appendChild(a);
  });
  nav.appendChild(links);

  const cta = document.createElement('a');
  cta.className = 'btn btn-primary btn-sm nav-cta';
  cta.href = SITE.appStoreLink;
  cta.textContent = 'App Store';
  nav.appendChild(cta);

  // Mobile toggle
  const toggle = document.createElement('button');
  toggle.className = 'nav-toggle';
  toggle.setAttribute('aria-label', 'Menu');
  toggle.innerHTML = '<span></span><span></span><span></span>';
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });
  nav.appendChild(toggle);
}

// Features section
function renderFeatures() {
  const grid = document.getElementById('featuresGrid');
  if (!grid) return;
  FEATURES.forEach(f => {
    const card = document.createElement('div');
    card.className = 'feature-card animate';
    card.innerHTML = `<div class="feature-icon">${f.icon}</div><h3>${f.title}</h3><p>${f.desc}</p>`;
    grid.appendChild(card);
  });
}

// Steps section
function renderSteps() {
  const container = document.getElementById('stepsContainer');
  if (!container) return;
  STEPS.forEach(s => {
    const div = document.createElement('div');
    div.className = 'step animate';
    div.innerHTML = `<div class="step-num">${s.num}</div><h3>${s.title}</h3><p>${s.desc}</p>`;
    container.appendChild(div);
  });
}

// FAQ section
function renderFAQ() {
  const container = document.getElementById('faqContainer');
  if (!container) return;
  FAQ.forEach(item => {
    const div = document.createElement('div');
    div.className = 'faq-item';
    div.innerHTML = `<button class="faq-q">${item.q}<span class="faq-arrow">&#9662;</span></button><div class="faq-a"><p>${item.q === FAQ[FAQ.length-1].q ? item.a.replace(/yt-dlp/g, '<a href="https://github.com/yt-dlp/yt-dlp" target="_blank">yt-dlp</a>') : item.a}</p></div>`;
    const btn = div.querySelector('.faq-q');
    const answer = div.querySelector('.faq-a');
    btn.addEventListener('click', () => {
      const open = answer.classList.contains('open');
      answer.classList.toggle('open');
      btn.querySelector('.faq-arrow').style.transform = open ? '' : 'rotate(180deg)';
    });
    container.appendChild(div);
  });
}

// Footer
function renderFooter() {
  const container = document.getElementById('footerContent');
  if (!container) return;

  const grid = document.createElement('div');
  grid.className = 'footer-grid';

  const brand = document.createElement('div');
  brand.className = 'footer-brand';
  brand.innerHTML = `<a href="index.html" class="nav-logo"><span class="logo-icon">&#x1F512;</span>${SITE.name}</a><p>Secure VPN and smart media downloader for iOS. All on-device, zero tracking.</p>`;
  grid.appendChild(brand);

  const legal = document.createElement('div');
  legal.className = 'footer-links';
  legal.innerHTML = '<h4>Legal</h4>';
  ['privacy.html','support.html'].forEach((href, i) => {
    const a = document.createElement('a');
    a.href = href;
    a.textContent = i === 0 ? 'Privacy Policy' : 'Support';
    legal.appendChild(a);
  });
  grid.appendChild(legal);

  const tech = document.createElement('div');
  tech.className = 'footer-links';
  tech.innerHTML = '<h4>Tech Stack</h4>';
  TECH_STACK.forEach(t => {
    const a = document.createElement('a');
    a.href = t.url;
    a.target = '_blank';
    a.textContent = t.name;
    tech.appendChild(a);
  });
  grid.appendChild(tech);

  container.appendChild(grid);

  const bottom = document.createElement('div');
  bottom.className = 'footer-bottom';
  bottom.innerHTML = '<p>&copy; 2026 ' + SITE.name + '. All rights reserved.</p>';
  container.appendChild(bottom);
}

// Scroll animations
function initAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.animate').forEach(el => observer.observe(el));
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFeatures();
  renderSteps();
  renderFAQ();
  renderFooter();
  initAnimations();
});
