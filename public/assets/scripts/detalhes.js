// public/assets/js/detalhes.js

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
  
    if (id) {
      fetch(`http://localhost:3000/receitas/${id}`)
        .then(response => response.json())
        .then(receita => {
          const container = document.getElementById('detalhe-receita');
          container.innerHTML = `
            <h2>${receita.titulo}</h2>
            <img src="${receita.imagem_principal}" class="img-fluid mb-3" alt="${receita.titulo}">
            <h4>Ingredientes</h4>
            <ul>${receita.ingredientes.map(item => `<li>${item}</li>`).join('')}</ul>
            <h4>Modo de Preparo</h4>
            <ol>${receita.modo_de_preparo.map(p => `<li>${p}</li>`).join('')}</ol>
          `;
        })
        .catch(error => console.error('Erro ao carregar detalhes da receita:', error));
    }
  });
  