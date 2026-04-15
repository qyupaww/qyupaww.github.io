function renderProjects() {
  const container = document.getElementById('proj-grid-container');
  if (!container) return;

  container.innerHTML = '';
  PROJECTS.forEach(proj => {
    if (proj.isPlaceholder) {
      container.innerHTML += `
        <div class="proj-card" style="border-style:dashed;box-shadow:none;background:var(--gray)">
          <div class="proj-thumb" style="background:#eee;color:#ccc;border-bottom:2px dashed #ccc">${proj.icon}</div>
          <div class="proj-body">
            <div class="proj-title" style="color:#bbb">${proj.title}</div>
            <p class="proj-desc" style="color:#bbb">${proj.desc}</p>
            ${proj.tags.map(t => `<span class="tag ${t.style}">${t.label}</span>`).join('')}
          </div>
        </div>
      `;
    } else {
      container.innerHTML += `
        <div class="proj-card">
          <div class="proj-thumb">${proj.icon}</div>
          <div class="proj-body">
            <div class="proj-title">${proj.title}</div>
            <p class="proj-desc">${proj.desc}</p>
            ${proj.tags.map(t => `<span class="tag ${t.style}">${t.label}</span>`).join('')}
          </div>
        </div>
      `;
    }
  });
}

function renderSkills() {
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = '';
  SKILLS.forEach((skill, index) => {
    const isLast = index === SKILLS.length - 1;
    container.innerHTML += `
      <div class="skill-group" ${isLast ? 'style="margin-bottom:0"' : ''}>
        <div class="skill-group-label">${skill.group}</div>
        ${skill.items.map(i => `<span class="skill-pill">${i}</span>`).join('')}
      </div>
    `;
  });
}

function renderContacts() {
  const container = document.getElementById('contacts-container');
  if (!container) return;

  container.innerHTML = '';
  CONTACTS.forEach(contact => {
    const valHtml = contact.url 
      ? `<a href="${contact.url}" target="_blank">${contact.value}</a>` 
      : contact.value;

    container.innerHTML += `
      <div class="contact-row">
        <div class="contact-icon">${contact.icon}</div>
        <div>
          <div class="contact-label">${contact.label}</div>
          <div class="contact-val">${valHtml}</div>
        </div>
      </div>
    `;
  });
}

function switchTab(id) {
  document.querySelectorAll('.tab-page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  
  const targetPage = document.getElementById('tab-' + id);
  if (targetPage) targetPage.classList.add('active');
  
  const idx = ['projects','skills','contact'].indexOf(id);
  const tabBtns = document.querySelectorAll('.tab-btn');
  if (tabBtns[idx]) tabBtns[idx].classList.add('active');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderSkills();
  renderContacts();
});
