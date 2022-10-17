// Ator

let xAtor = 100;
let yAtor = 370;

// Funções do ator

function mostrarAtor(){
    image(imagemAtor1, xAtor, yAtor, 35, 25)
  }
    
  function movimentandoAtor(){
    if(keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
  
    if(keyIsDown(DOWN_ARROW)){
      yAtor += 3;
    }
  }