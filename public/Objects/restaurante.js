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

class Restaurantes extends Restaurante {
  restaurantes = [];
  constructor() {
    this.restaurantes = [];
  }

  adicionarRestaurante(restaurante) {
    this.restaurantes.push(restaurante);
  }

  removerRestaurante(restauranteId) {
    this.restaurantes.findIndex((id) => id == restauranteId).splice();
  }

  getRestauranteById(restauranteId) {
    return this.restaurantes.findIndex((id) => id == restauranteId);
  }

  getRestaurantes() {
    return this.restaurantes;
  }
}

const restaurantes = [];

function criarCardsDeRestaurantes() {
  const container = document.querySelector(".restaurant-cards");
  restaurantes.forEach((restaurante) => {
    const card = `
    <div class="card">
    <h1 class="text-center h1">${restaurante.nome}</h1>
    <div class="card-image">
      <img src="${restaurante.imagem}" alt="Foto do ${restaurante.nome}">
      <div class="status-circle open"></div>
    </div>
  </div>
    `;

    container.innerHTML += card;
  });
}


function popularRestaurantes(json) {
  console.log("populate");
  var restaurantesJSON = json.restaurantes;
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

fetch('/db.json')
  .then(response => response.json())
  .then(data => {
    console.log("fetch");
    popularRestaurantes(data);
  })
  .catch(error => console.error(error));


