document.addEventListener('DOMContentLoaded', () => {
  // Controle das abas por botões (.tab-button)
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  if (tabButtons.length && tabContents.length) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('active')) return;

        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        const tabId = btn.dataset.tab;
        const activeContent = document.getElementById(tabId);
        if (activeContent) activeContent.classList.add('active');
      });
    });
  }

  // Controle das abas por links <a.tab-link>
  const links = document.querySelectorAll('a.tab-link');
  const sections = document.querySelectorAll('.tab-content');

  function activateTab(id) {
    sections.forEach(sec => {
      sec.classList.toggle('active', sec.id === id);
    });
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + id);
    });
  }

  if (links.length && sections.length) {
    links.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        activateTab(targetId);
        history.pushState(null, '', '#' + targetId);
      });
    });

    // Ativa a aba pela URL ao carregar
    const hash = window.location.hash.substring(1);
    if(hash) {
      activateTab(hash);
    } else {
      activateTab('home'); // aba padrão
    }
  }

  // Pop-up de boas-vindas
  const popup = document.getElementById('popup');
  const closePopupBtn = popup ? popup.querySelector('.close-popup') : null;

  function hidePopup() {
    if (popup) {
      popup.classList.add('hide');
      localStorage.setItem('popupShown', 'true');
    }
  }

  if (popup && closePopupBtn) {
    const hasSeenPopup = localStorage.getItem('popupShown');
    if (!hasSeenPopup) {
      setTimeout(() => {
        popup.classList.remove('hide');
      }, 1000);
    } else {
      popup.classList.add('hide');
    }

    closePopupBtn.addEventListener('click', hidePopup);

    popup.addEventListener('click', e => {
      if (e.target === popup) hidePopup();
    });
  }

  // Animação para imagens com classe .img-animada
  const imagens = document.querySelectorAll('.img-animada');
  if (imagens.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revelada');
        }
      });
    });
    imagens.forEach(img => observer.observe(img));
  }
});

document.getElementById('contatoForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = this.nome.value.trim();
  const email = this.email.value.trim();
  const mensagem = this.mensagem.value.trim();

  if (!nome || !email) {
    alert('Por favor, preencha seu nome e email.');
    return;
  }

  // Se mensagem estiver vazia, coloca uma frase padrão
  // Se mensagem estiver vazia, coloca uma frase padrão
const mensagemFinal = mensagem || 'Sem mensagem adicional.';

const numeroWhatsApp = '5519971011446';

const texto = `Olá, meu nome é *${nome}*.\nEmail: *${email}*.\nDúvidas: ${mensagemFinal}`;

const textoCodificado = encodeURIComponent(texto);

const url = `https://wa.me/${5519971011446}?text=${textoCodificado}`;

window.open(url, '_blank');

this.reset();
});

document.getElementById('hamburgue-button').addEventListener('click', function() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('open');
});
const hamburgueButton = document.getElementById('hamburgue-button');
const menu = document.getElementById('menu');

hamburgueButton.addEventListener('click', function(e) {
  menu.classList.toggle('open');
  e.stopPropagation(); // evita que o clique feche imediatamente
});

// Fecha o menu se clicar fora
document.addEventListener('click', function(e) {
  if (!menu.contains(e.target) && !hamburgueButton.contains(e.target)) {
    menu.classList.remove('open');
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const hamburgueButton = document.getElementById('hamburgue-button');
  const menu = document.getElementById('menu');

  // Abre ou fecha o menu ao clicar no botão
  hamburgueButton.addEventListener('click', (e) => {
    menu.classList.toggle('open');
    e.stopPropagation(); // impede que o clique no botão feche o menu imediatamente
  });

  // Fecha o menu se clicar fora
  document.addEventListener('click', (e) => {
    if (menu.classList.contains('open') && !menu.contains(e.target) && !hamburgueButton.contains(e.target)) {
      menu.classList.remove('open');
    }
  });
});


  const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  const viagemCards = document.querySelectorAll('.viagem-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
}, { threshold: 0.1 });

viagemCards.forEach(card => observer.observe(card));



