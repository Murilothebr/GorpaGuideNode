class Restaurante {
  constructor(id, nome, imagem, endereco, telefone, horarioFuncionamento) {
    this.id = id;
    this.nome = nome;
    this.imagem = imagem;
    this.endereco = endereco;
    this.telefone = telefone;
    this.horarioFuncionamento = horarioFuncionamento;
  }
}

const restaurantes = [];

function popularRestaurantes(json) {
  var restaurantesJSON = json;
  for (var i = 0; i < restaurantesJSON.length; i++) {
    restaurante = restaurantesJSON[i];
    restaurantes.push(new Restaurante(
      restaurante.id,
      restaurante.name,
      restaurante.imagem,
      restaurante.endereco,
      restaurante.telefone,
      restaurante.horarioFuncionamento
    ));
  }
}

function criarCardsDeRestaurantes() {
  
  const container = document.querySelector(".restaurant-cards");

		(setTimeout(() => {
      restaurantes.forEach(
        (restaurante) => {
        console.log("1")
        const card = `
        <div class="card">
        <h1 class="text-center h1">${restaurante.nome}</h1>
        <div class="card-image">
          <img src="${restaurante.imagem}" alt="Foto do ${restaurante.name}">
          <div class="status-circle open"></div>
        </div>
      </div>
        `;
        container.innerHTML += card;
      }
      );
		}, "0100"));
}

fetch('http://localhost:3000/restaurantes')
  .then(response => response.json())
  .then(data => {
    console.log("fetch");
    popularRestaurantes(data);
  })
  .catch(error => console.error(error));


