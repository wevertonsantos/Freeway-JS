// Imagens
let imagemEstrada;
let imagemCarro1;
let imagemAtor1;

// Carro
let xCarro = 520;

// Ator
let yAtor = 370;

// Pré carregamento da página
function preload(){
  imagemEstrada = loadImage("imagens/estrada.png")
  imagemCarro1  = loadImage("imagens/carro-1.png")
  imagemAtor1   = loadImage("imagens/ator-1.png")
}

function setup() {
    createCanvas(600, 400);
  }
  
function draw() {
    background(imagemEstrada);
    mostrarCarro()
    mostrarAtor()
    movimentadoCarro1()
    movimentandoAtor()
  }

function mostrarCarro(){
  image(imagemCarro1, xCarro, 45, 60, 30)
}

function mostrarAtor(){
  image(imagemAtor1, 100, yAtor, 35, 25)
}

function movimentadoCarro1(){
  xCarro += - 2;
}

function movimentandoAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor += - 2;
  }

  if(keyIsDown(DOWN_ARROW)){
    yAtor -= - 2;
  }
}