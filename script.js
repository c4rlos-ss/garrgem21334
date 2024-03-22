let carrossel = document.getElementById('carrossel-principal');
let pressed = false;
let startX;
let scrollLeft;

carrossel.addEventListener('mousedown', (e) => {
 pressed = true;
 startX = e.pageX - carrossel.offsetLeft;
 scrollLeft = carrossel.scrollLeft;
});

carrossel.addEventListener('mouseleave', () => {
 pressed = false;
});

carrossel.addEventListener('mouseup', () => {
 pressed = false;
});

carrossel.addEventListener('mousemove', (e) => {
 if (!pressed) return;
 e.preventDefault();
 const x = e.pageX - carrossel.offsetLeft;
 const walk = (x - startX) * 3; // Ajuste o fator de 3 para controlar a velocidade do arrastar
 carrossel.scrollLeft = scrollLeft - walk;
});

function moveCarousel(direction) {
  const currentTransform = innerSlider.style.transform;
  const currentPosition = parseInt(currentTransform.replace(/[^0-9]/g, ''), 10);
  const newPosition = direction === 'left' ? currentPosition + 200 : currentPosition - 200;
  innerSlider.style.transform = `translateX(${newPosition}px)`;
}

prevButton.addEventListener('click', () => moveCarousel('left'));
nextButton.addEventListener('click', () => moveCarousel('right'));


const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

prevButton.addEventListener('click', () => {
    // Lógica para mover o carrossel para a esquerda
    // Isso pode envolver ajustar a propriedade CSS 'transform' do innerSlider
});

nextButton.addEventListener('click', () => {
    // Lógica para mover o carrossel para a direita
    // Isso pode envolver ajustar a propriedade CSS 'transform' do innerSlider
});


function pegarEmprestado(carro) {
  // Aqui você pode adicionar a lógica para pegar o carro emprestado, como exibir uma mensagem de confirmação ou redirecionar para uma página de checkout.

  // Por exemplo:
  alert(`Você selecionou o carro: ${carro}. Opção de empréstimo será apresentada aqui.`);
}

function exibirQuestionario() {
  document.getElementById('questionario-secao').style.display = 'block';
 }