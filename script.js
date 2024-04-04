const carrossel = document.querySelector('.carrossel-conteudo');
const carrosselAnterior = document.querySelector('.carrossel-anterior');
const carrosselProximo = document.querySelector('.carrossel-proximo');
let indiceAtual = 0;

carrosselAnterior.addEventListener('click', () => {
 indiceAtual--;
 if (indiceAtual < 0) {
    indiceAtual = carrossel.children.length - 1;
 }
 carrossel.style.transform = `translateX(-${indiceAtual * 100}%)`;
});

carrosselProximo.addEventListener('click', () => {
 indiceAtual++;
 if (indiceAtual > carrossel.children.length - 1) {
    indiceAtual = 0;
 }
 carrossel.style.transform = `translateX(-${indiceAtual * 100}%)`;
});
