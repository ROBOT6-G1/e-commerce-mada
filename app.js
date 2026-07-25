const defaultServices = [
  { id: '1', title: 'Transformation Digitale', desc: 'Modernisation de vos infrastructures informatiques, migration cloud et automatisation des processus métier.', icon: 'fa-solid fa-network-wired' },
  { id: '2', title: 'Conseil & Audit Stratégique', desc: 'Analyse approfondie de votre organisation pour identifier les leviers de croissance et d eﬃcience.', icon: 'fa-solid fa-chart-pie' },
  { id: '3', title: 'Développement Web & Mobile', desc: 'Conception d applications sur-mesure modernes, sécurisées et adaptées à vos besoins spécifiques.', icon: 'fa-solid fa-code' }
];

const defaultTestimonials = [
  { id: '1', author: 'Rivo Andriamanitra', company: 'Groupe Analamanga', quote: 'Apex Vision a complètement transformé notre gestion informatique. Un gain de temps exceptionnel pour notre équipe !' },
  { id: '2', author: 'Sophie Razafy', company: 'Tech Madagascar', quote: 'Un accompagnement irréprochable et un professionnalisme rare. Je recommande les yeux fermés.' },
  { id: '3', author: 'Haja Rakoto', company: 'Aina Logistics', quote: 'L audit stratégique réalisé par ApexVision nous a permis d optimiser nos coûts logistiques de 25%.' }
];

const defaultTeam = [
  { name: 'Jean-Marc Randria', role: 'Directeur Général & Fondateur', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80' },
  { name: 'Miora Raharison', role: 'Directrice Technique & Lead Cloud', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
  { name: 'Andry Rasolofo', role: 'Consultant en Stratégie', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80' },
  { name: 'Lova Ramanantsoa', role: 'Chef de Projet Digital', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80' }
];

const defaultProjects = [
  { title: 'Plateforme ERP sur-mesure', category: 'Développement Web', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' },
  { title: 'Migration Cloud Hybride', category: 'Transformation Digitale', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80' },
  { title: 'Audit de Sécurité Système', category: 'Cyber-Sécurité', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80' }
];

const defaultFAQ = [
  { q: 'Quels sont vos délais moyens d intervention ?', a: 'Nos équipes interviennent sous 24h à 48h selon l urgence et la complexité de la demande.' },
  { q: 'Proposez-vous une maintenance après la réalisation ?', a: 'Oui, nous proposons des contrats d accompagnement et de maintenance récurrents 24/7.' },
  { q: 'Comment est calculé le montant d un devis ?', a: 'Le devis est totalement gratuit et établi sur-mesure en fonction des ressources mobilisées et des objectifs visés.' }
];

const defaultBlog = [
  { title: 'Les tendances clés du Cloud en 2025', date: '12 Janvier 2025', desc: 'Analyse des priorités technologiques pour les entreprises en Afrique et dans l Océan Indien.' },
  { title: 'Comment réussir sa transformation digitale ?', date: '05 Janvier 2025', desc: 'Guide pratique en 5 étapes pour moderniser sereinement votre organisation.' }
];

document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderTestimonials();
  renderTeam();
  renderPortfolio();
  renderFAQ();
  renderBlog();
  setupForms();
});

function renderServices() {
  const el1 = document.getElementById('home-services-list');
  const el2 = document.getElementById('full-services-list');
  const html = defaultServices.map(s => `
    <div class="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-cyan-500/50 transition duration-300 space-y-4">
      <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xl font-bold">
        <i class="${s.icon}"></i>
      </div>
      <h3 class="text-xl font-bold text-white">${s.title}</h3>
      <p class="text-slate-400 text-sm leading-relaxed">${s.desc}</p>
    </div>
  `).join('');

  if (el1) el1.innerHTML = html;
  if (el2) el2.innerHTML = html;
}

function renderTestimonials() {
  const el = document.getElementById('home-testimonials-list');
  if (!el) return;
  el.innerHTML = defaultTestimonials.map(t => `
    <div class="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-4 relative">
      <div class="text-cyan-400 text-2xl"><i class="fa-solid fa-quote-left"></i></div>
      <p class="text-slate-300 text-sm italic leading-relaxed">"${t.quote}"</p>
      <div class="pt-4 border-t border-slate-800">
        <h4 class="font-bold text-white text-sm">${t.author}</h4>
        <p class="text-cyan-400 text-xs">${t.company}</p>
      </div>
    </div>
  `).join('');
}

function renderTeam() {
  const el = document.getElementById('team-list');
  if (!el) return;
  el.innerHTML = defaultTeam.map(m => `
    <div class="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden group">
      <img src="${m.img}" alt="${m.name}" class="w-full h-64 object-cover group-hover:scale-105 transition duration-500">
      <div class="p-6 space-y-1">
        <h3 class="font-bold text-white text-lg">${m.name}</h3>
        <p class="text-cyan-400 text-xs font-medium">${m.role}</p>
      </div>
    </div>
  `).join('');
}

function renderPortfolio() {
  const el = document.getElementById('portfolio-list');
  if (!el) return;
  el.innerHTML = defaultProjects.map(p => `
    <div class="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden group">
      <div class="overflow-hidden h-52">
        <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
      </div>
      <div class="p-6 space-y-2">
        <span class="text-xs text-indigo-400 font-semibold uppercase tracking-wider">${p.category}</span>
        <h3 class="font-bold text-white text-lg">${p.title}</h3>
      </div>
    </div>
  `).join('');
}

function renderFAQ() {
  const el = document.getElementById('faq-list');
  if (!el) return;
  el.innerHTML = defaultFAQ.map((f, idx) => `
    <div class="bg-slate-900 border border-slate-800 rounded-2xl p-6 cursor-pointer" onclick="toggleFaq(${idx})">
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-white text-base">${f.q}</h3>
        <i class="fa-solid fa-chevron-down text-cyan-400 text-sm transition-transform duration-300" id="faq-icon-${idx}"></i>
      </div>
      <div class="accordion-content mt-3 text-slate-400 text-sm leading-relaxed" id="faq-content-${idx}">
        ${f.a}
      </div>
    </div>
  `).join('');
}

function toggleFaq(idx) {
  const content = document.getElementById(`faq-content-${idx}`);
  const icon = document.getElementById(`faq-icon-${idx}`);
  content.classList.toggle('active');
  icon.classList.toggle('rotate-180');
}

function renderBlog() {
  const el = document.getElementById('blog-posts-list');
  if (!el) return;
  el.innerHTML = defaultBlog.map(b => `
    <article class="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4">
      <span class="text-xs text-slate-500"><i class="fa-regular fa-calendar mr-2"></i>${b.date}</span>
      <h3 class="text-xl font-bold text-white hover:text-cyan-400 transition cursor-pointer">${b.title}</h3>
      <p class="text-slate-400 text-sm leading-relaxed">${b.desc}</p>
    </article>
  `).join('');
}

function setupForms() {
  const cForm = document.getElementById('contact-form');
  if (cForm) {
    cForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('c-name').value;
      const email = document.getElementById('c-email').value;
      const subject = document.getElementById('c-subject').value;
      const msg = document.getElementById('c-message').value;

      if (window.db) {
        window.db.collection('messages').add({
          type: 'Contact',
          name, email, subject, msg, date: new Date().toISOString()
        });
      }
      document.getElementById('contact-success').classList.remove('hidden');
      cForm.reset();
    });
  }

  const dForm = document.getElementById('devis-form');
  if (dForm) {
    dForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('d-name').value;
      const phone = document.getElementById('d-phone').value;
      const service = document.getElementById('d-service').value;
      const budget = document.getElementById('d-budget').value;
      const details = document.getElementById('d-details').value;

      if (window.db) {
        window.db.collection('messages').add({
          type: 'Devis',
          name, phone, service, budget, details, date: new Date().toISOString()
        });
      }
      document.getElementById('devis-success').classList.remove('hidden');
      dForm.reset();
    });
  }
}