const ADMIN_PASS = '1234';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('admin-login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const pass = document.getElementById('admin-pass').value;
      if (pass === ADMIN_PASS) {
        document.getElementById('admin-login-modal').classList.add('hidden');
        document.getElementById('admin-dashboard').classList.remove('hidden');
        loadAdminData();
      } else {
        document.getElementById('login-error').classList.remove('hidden');
      }
    });
  }
});

function switchTab(tab) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('bg-slate-800', 'text-white'));
  
  document.getElementById(`section-${tab}`).classList.remove('hidden');
  const activeBtn = document.getElementById(`tab-btn-${tab}`);
  if (activeBtn) activeBtn.classList.add('bg-slate-800', 'text-white');
}

function adminLogout() {
  location.reload();
}

function loadAdminData() {
  if (!window.db) return;
  
  // Live sync for messages
  window.db.collection('messages').onSnapshot(snapshot => {
    const el = document.getElementById('admin-messages-list');
    if (!el) return;
    if (snapshot.empty) {
      el.innerHTML = '<p class="text-slate-500 text-sm">Aucun message ou devis reçu pour le moment.</p>';
      return;
    }
    el.innerHTML = snapshot.docs.map(doc => {
      const m = doc.data();
      return `
        <div class="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2">
          <div class="flex justify-between items-center">
            <span class="px-2.5 py-1 rounded-full text-xs font-bold ${m.type === 'Devis' ? 'bg-indigo-500/20 text-indigo-400' : 'bg-cyan-500/20 text-cyan-400'}">${m.type}</span>
            <span class="text-xs text-slate-500">${new Date(m.date).toLocaleDateString()}</span>
          </div>
          <h4 class="font-bold text-white">${m.name}</h4>
          <p class="text-xs text-slate-400">${m.email || ''} ${m.phone ? '| Tel: ' + m.phone : ''}</p>
          <p class="text-sm text-slate-300 pt-2">${m.msg || m.details || ''}</p>
        </div>
      `;
    }).join('');
  });
}

// Image Compression Helper HTML5 Canvas < 150KB
function compressImage(file, callback) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (event) => {
    const img = new Image();
    img.src = event.target.result;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;
      const max_size = 800;
      if (width > height) {
        if (width > max_size) {
          height *= max_size / width;
          width = max_size;
        }
      } else {
        if (height > max_size) {
          width *= max_size / height;
          height = max_size;
        }
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
      callback(dataUrl);
    };
  };
}