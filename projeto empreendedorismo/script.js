// Obter o elemento do logotipo
var logo = document.querySelector('.logo');

// Adicionar um evento de clique para alterar o estilo do logotipo
logo.addEventListener('click', function() {
  // Alterar o tamanho da fonte e a cor do logotipo
  this.style.fontSize = '48px';
  this.style.color = '#ff0000';
});

var header = document.querySelector('header');

// Adicionar um evento de clique para alternar a cor de fundo do cabeçalho
header.addEventListener('click', function() {
  // Verificar se o cabeçalho já tem a cor de fundo alternativa
  if (this.style.backgroundColor === 'rgb(255, 0, 0)') {
    // Se sim, restaurar a cor de fundo original
    this.style.backgroundColor = '#009688';
  } else {
    // Caso contrário, definir a cor de fundo alternativa
    this.style.backgroundColor = '#ff0000';
  }
});

var secondaryButtons = document.querySelectorAll('.secondary-button');

// Adicionar um evento de hover para cada botão secundário
secondaryButtons.forEach(function(button) {
  button.addEventListener('mouseenter', function() {
    // Adicionar a classe de destaque quando o mouse entrar no botão
    this.classList.add('highlight');
  });

  button.addEventListener('mouseleave', function() {
    // Remover a classe de destaque quando o mouse sair do botão
    this.classList.remove('highlight');
  });
});