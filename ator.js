// Ator

// Variáveis do ator

let xAtor = 107;
let yAtor = 370;
let colidiu = false;

// Variáveis Pontos

let meusPontos = 0;

// Funções do ator

function mostrarAtor(){
    image(imagemAtor1, xAtor, yAtor, 25, 25)
  }
    
  function movimentandoAtor(){
    if(keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
  
    if(keyIsDown(DOWN_ARROW)){
      yAtor += 3;
    }
  }

function colisao(){
  for(let i = 0; i < imagemCarros.length; i += 1){
  colidiu = collideRectCircle(xCarros[i], yCarros[i], carroComprimento, carroAltura, xAtor, yAtor, 15)
  if(colidiu){
  voltaAtorParaPosicaoInicial()
    }
  }
}

function voltaAtorParaPosicaoInicial(){
    yAtor = 370;
}

// Pontos

function mostraPontos(){
  textAlign(CENTER)
  textSize(20)
  fill(255,250,0)
  text(meusPontos, width / 5, 25)
}

function marcaPontos(){
  if (yAtor < 16){
    meusPontos += 1
    voltaAtorParaPosicaoInicial()
  }
}