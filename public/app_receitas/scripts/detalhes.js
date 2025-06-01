// public/app_receitas/scripts/detalhes.js

document.addEventListener('DOMContentLoaded', () => {
  const id = new URLSearchParams(window.location.search).get('id');
  const container = document.getElementById('detalhe-receita');

  fetch(`http://localhost:3000/receitas/${id}`)
    .then(res => res.json())
    .then(receita => {
      container.innerHTML = `
        <h2 class="mb-3">${receita.titulo}</h2>
        <img src="../assets/images/${receita.imagem_principal}" class="img-fluid mb-4" alt="${receita.titulo}">
        <h4>Ingredientes</h4>
        <ul>${receita.ingredientes.map(i => `<li>${i}</li>`).join('')}</ul>
        <h4 class="mt-4">Modo de Preparo</h4>
        <ol>${receita.modo_de_preparo.map(p => `<li>${p}</li>`).join('')}</ol>
      `;
    })
    .catch(err => container.innerHTML = `<p>Erro ao carregar receita.</p>`);
});
