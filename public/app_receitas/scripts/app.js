// public/app_receitas/scripts/app.js

fetch('http://localhost:3000/receitas')
  .then(res => res.json())
  .then(data => {
    const cardsContainer = document.querySelector('#cards-receitas');
    const carousel = document.querySelector('#carousel-inner');

    data.forEach((receita, index) => {
      // Inserir card de receita
      cardsContainer.innerHTML += `
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card">
            <img src="../assets/images/${receita.imagem_principal}" class="card-img-top" alt="${receita.titulo}">
            <div class="card-body">
              <h5 class="card-title">${receita.titulo}</h5>
              <p class="card-text">${receita.descricao}</p>
              <a href="detalhes.html?id=${receita.id}" class="btn btn-outline-primary">Ver Receita</a>
            </div>
          </div>
        </div>`;

      // Inserir slide no carrossel se for destaque
      if (receita.destaque && carousel) {
        carousel.innerHTML += `
          <div class="carousel-item ${carousel.children.length === 0 ? 'active' : ''}">
            <img src="../assets/images/${receita.imagem_principal}" class="d-block w-100" alt="${receita.titulo}">
            <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50">
              <h5>${receita.titulo}</h5>
              <p>${receita.descricao}</p>
            </div>
          </div>`;
      }
    });
  })
  .catch(error => console.error("Erro ao carregar receitas:", error));
