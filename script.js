// Seleciona o botão
const botao = document.querySelector('.botao-site');

// Cria um objeto de áudio
const somClique = new Audio('meow.mp3');

// Adiciona um evento de clique no botão
botao.addEventListener('click', () => {
    somClique.play(); // Toca o som quando o botão é clicado
});
