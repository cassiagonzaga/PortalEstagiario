javascript
// Alterna entre as seções do painel (Atividades, Avaliações, etc.)
function mostrarSecao(secaoId) {
  const secoes = document.querySelectorAll('.secao');
  secoes.forEach(secao => {
    secao.style.display = 'none';
  });

  const secaoAtual = document.getElementById(secaoId);
  if (secaoAtual) {
    secaoAtual.style.display = 'block';
  }
}

// Simula logout
function logout() {
  window.location.href = 'index.html';
}

function mostrarSecao(secaoId) {
  const secoes = document.querySelectorAll('.secao');
  secoes.forEach(secao => secao.style.display = 'none');
  document.getElementById(secaoId).style.display = 'block';
}

function logout() {
  window.location.href = 'index.html';
}

