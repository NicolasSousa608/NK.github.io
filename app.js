const produtos = [
  { nome: "Morango", categoria: "tradicionais frutais", preco: 7.99, imagem: "https://br.freddo.com/wp-content/uploads/2025/04/FRUTILLA-A-LA-CREMA-1.jpg", descricao: "Sorvete cremoso de morango com pedaços da fruta" },
  { nome: "Chocolate Intenso", categoria: "Chocolate", preco: 15.99, imagem: "https://br.freddo.com/wp-content/uploads/2022/10/choco-intenso.jpg", descricao: "Chocolate belga intenso com cacau 70%" },
  { nome: "Baunilha", categoria: "tradicionais creme", preco: 9.99, imagem: "https://br.freddo.com/wp-content/uploads/2022/10/AMERICANA-e1665513208545.jpg", descricao: "Baunilha madagascar com base cremosa" },
  { nome: "Maracujá com Laranja", categoria: "Frutais", preco: 14.99, imagem: "https://br.freddo.com/wp-content/uploads/2022/10/Mousse-de-maracuya.jpg", descricao: "Mousse de maracujá com toque cítrico da laranja" },
  { nome: "Pistache", categoria: "Creme", preco: 15.99, imagem: "https://br.freddo.com/wp-content/uploads/2022/10/Pistacchio.jpg", descricao: "Pistache italiano torrado com pedaços crocantes" },
  { nome: "Chocolate", categoria: "tradicionais Chocolate", preco: 7.99, imagem: "https://br.freddo.com/wp-content/uploads/2022/10/choco-clasico.jpg", descricao: "Chocolate clássico cremoso" },
  { nome: "doce de leite", categoria: "tradicionais Doce de Leite", preco: 9.99, imagem: "https://br.freddo.com/wp-content/uploads/2022/10/DDL-Clasico.jpg", descricao: "Doce de leite tradicional argentino" },
  { nome: "Doce de Leite Granizado", categoria: "Doce de Leite", preco: 16.99, imagem: "https://br.freddo.com/wp-content/uploads/2022/10/DDL-granizado.jpg", descricao: "Doce de leite com chocolate granulado" },
  { nome: "Mini Oreo", categoria: "Doce de Leite", preco: 16.99, imagem: "https://br.freddo.com/wp-content/uploads/2022/10/DDL-minioreo.jpg", descricao: "Doce de leite com pedaços de biscoito Oreo" },
  { nome: "Tentação de Doce de Leite", categoria: "Doce de Leite", preco: 16.99, imagem: "https://br.freddo.com/wp-content/uploads/2022/10/DDL-tentacion.jpg", descricao: "Doce de leite com calda de chocolate e amendoim" },
  { nome: "Dupla tentação de Doce de Leite", categoria: "Doce de Leite", preco: 17.99, imagem: "https://br.freddo.com/wp-content/uploads/2022/10/DDL-tentacion.jpg", descricao: "Doce de leite duplo com calda especial" },
  { nome: "Cookies no creme", categoria: "Creme", preco: 15.99, imagem: "https://br.freddo.com/wp-content/uploads/2022/10/FREDDO-OREO-COOKIES-CREAM-e1666730300305.png", descricao: "Creme de baunilha com pedaços de cookies" },
  { nome: "Menta Granulado", categoria: "Creme", preco: 15.99, imagem: "https://br.freddo.com/wp-content/uploads/2022/10/MENTA-GRANIZADO.jpg", descricao: "Menta refrescante com chocolate granulado" },
  { nome: "Banana Split", categoria: "Creme", preco: 15.99, imagem: "https://br.freddo.com/wp-content/uploads/2022/10/BANANA-SPLIT.jpg", descricao: "Massa de banana com calda de chocolate e morango" },
  { nome: "Crostata al Limone", categoria: "Creme", preco: 15.99, imagem: "https://br.freddo.com/wp-content/uploads/2024/10/freddo1629.jpg-350x320-1-400x366-1.jpg", descricao: "Creme de limão siciliano com biscoito crocante" },
  { nome: "Amarena", categoria: "Creme", preco: 15.99, imagem: "https://br.freddo.com/wp-content/uploads/2024/07/Amarena-textura-400x368.jpg", descricao: "Creme de baunilha com cerejas amarena" },
  { nome: "Cafe al Cioccolato", categoria: "Creme", preco: 15.99, imagem: "https://br.freddo.com/wp-content/uploads/2025/01/textura-web-cafe-al-cioccolato.jpg", descricao: "Café expresso com chocolate belga" },
  { nome: "Tentação de Chocolate", categoria: "Chocolate", preco: 15.99, imagem: "https://br.freddo.com/wp-content/uploads/2022/10/choco-tentacion.jpg", descricao: "Chocolate com calda de caramelo e nozes" },
  { nome: "Branco Patagonico", categoria: "Chocolate", preco: 15.99, imagem: "https://br.freddo.com/wp-content/uploads/2022/10/blanco-patagonico.jpg", descricao: "Chocolate branco com frutas vermelhas" },
  { nome: "Framboesa Patagonica", categoria: "Frutais", preco: 15.99, imagem: "https://br.freddo.com/wp-content/uploads/2022/10/helado-frambuesa-e1666635213807.png", descricao: "Framboesa natural da Patagônia" },
  { nome: "Morango Natural", categoria: "Frutais", preco: 15.99, imagem: "https://br.freddo.com/wp-content/uploads/2022/10/FRUTILLA-AL-AGUA.jpg", descricao: "Morango natural sem lactose" },
  { nome: "Chocolate Dubai", categoria: "premium", preco: 19.99, imagem: "https://br.freddo.com/wp-content/uploads/2025/10/texturas-linea-boutique_350x320px-chocolate-dubai.jpg", descricao: "Chocolate com ouro 24k e especiarias árabes" },
  { nome: "Torta de Limão", categoria: "premium", preco: 19.99, imagem: "https://br.freddo.com/wp-content/uploads/2025/10/texturas-linea-boutique_350x320px-lemon-pie.jpg", descricao: "Base de biscoito com creme de limão siciliano" },
  { nome: "Frutilla a La Crema com Gianduia", categoria: "premium", preco: 19.99, imagem: "https://br.freddo.com/wp-content/uploads/2025/10/texturas-linea-boutique_350x320px-frutilla-con-gianduia-1.jpg", descricao: "Morango com creme de avelã gianduia" },
  { nome: "Doce de Leite ao Chocolate Crocante", categoria: "premium", preco: 19.99, imagem: "https://br.freddo.com/wp-content/uploads/2025/10/texturas-linea-boutique_350x320px-ddl-al-cioccolato-crocante-1.jpg", descricao: "Doce de leite com chocolate crocante belga" },
  { nome: "Pistacchio Bianco", categoria: "premium", preco: 19.99, imagem: "https://br.freddo.com/wp-content/uploads/2025/10/texturas-linea-boutique_350x320px-pistacchio-bianco.jpg", descricao: "Pistache branco com amêndoas caramelizadas" },
  { nome: "Fiordilatte al Pistacho", categoria: "premium", preco: 19.99, imagem: "http://br.freddo.com/wp-content/uploads/2025/10/texturas-linea-boutique_350x320px-fiordilatte-al-pistacchio.jpg", descricao: "Creme italiano com pistache siciliano" },
];

const container = document.getElementById("produtos");
const filtro = document.getElementById("filtro");

// Criar modal
const modal = document.createElement("div");
modal.classList.add("modal");
modal.innerHTML = `
  <div class="modal-content">
    <button class="fechar-modal">&times;</button>
    <div class="modal-container">
      <div class="modal-esquerda">
        <img src="" alt="" class="modal-imagem">
        <p class="modal-preco"></p>
      </div>
      <div class="modal-direita">
        <h2 class="modal-titulo"></h2>
        <p class="modal-descricao"></p>
        <div class="modal-saiba-mais">
          <p>Saiba mais sobre este sabor</p>
          <a href="https://br.freddo.com" target="_blank" class="botao-saiba-mais">Ver Detalhes Completos</a>
        </div>
      </div>
    </div>
  </div>
`;
document.body.appendChild(modal);

function renderizar(lista) {
  container.innerHTML = "";
  lista.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("card");

    const imagemFinal = p.imagem && p.imagem.trim() !== ""  
      ? p.imagem  
      : "";

    card.innerHTML = `
      <img src="${imagemFinal}" alt="${p.nome}">
      <h3>${p.nome}</h3>
      <p>R$ ${p.preco.toFixed(2)}</p>
    `;

    // Adicionar evento de clique no card
    card.addEventListener("click", () => {
      abrirModal(p);
    });

    container.appendChild(card);
  });
}

function abrirModal(produto) {
  const modalImg = modal.querySelector(".modal-imagem");
  const modalTitulo = modal.querySelector(".modal-titulo");
  const modalDescricao = modal.querySelector(".modal-descricao");
  const modalPreco = modal.querySelector(".modal-preco");

  modalImg.src = produto.imagem;
  modalImg.alt = produto.nome;
  modalTitulo.textContent = produto.nome;
  modalDescricao.textContent = produto.descricao;
  modalPreco.textContent = `R$ ${produto.preco.toFixed(2)}`;

  // Mostrar o modal primeiro e depois adicionar a classe de animação
  modal.style.display = "flex";
  
  // Pequeno delay para garantir que o display:flex foi aplicado
  setTimeout(() => {
    modal.classList.add("ativo");
  }, 10);
}

// Fechar modal
modal.querySelector(".fechar-modal").addEventListener("click", () => {
  fecharModal();
});

// Fechar modal clicando fora
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    fecharModal();
  }
});

function fecharModal() {
  modal.classList.remove("ativo");
  // Esperar a animação terminar antes de esconder completamente
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

filtro.addEventListener("change", () => {
  const valor = filtro.value;
  if (valor === "todos") {
    renderizar(produtos);
  } else {
    renderizar(produtos.filter(p => {
      const categorias = p.categoria.toLowerCase().split(' ');
      const valorBusca = valor.toLowerCase();
      
      if (!valorBusca.includes(' ')) {
        return categorias.includes(valorBusca);
      } else {
        return p.categoria.toLowerCase().includes(valorBusca);
      }
    }));
  }
});

renderizar(produtos);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}