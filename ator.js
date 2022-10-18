// Ator

let xAtor = 100;
let yAtor = 370;
let colidiu = false;

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
  verificaColisao()
  }
}

function verificaColisao(){
  if(colidiu){
    yAtor = 370;
  }
}