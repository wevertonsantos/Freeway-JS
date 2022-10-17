// Imagens
let imagemEstrada;
let imagemCarro1;
let imagemAtor1;

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
    image(imagemCarro1, 520, 45, 60, 30)
    image(imagemAtor1, 100, 370, 35, 25)
  }