// Variáveis dos carros

let xCarros = [650, 650, 650];
let yCarros = [45, 100, 155];
let velocidadeCarros = [2, 2.5, 3.2];

//*** Funções dos carros ***//

// Mostrando carros

function mostrarCarro(){
  for(let i = 0; i < imagemCarros.length; i += 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], 60, 30)
  }
}

// Movimentando carros

function movimentadoCarro(){
    for(let i = 0; i < imagemCarros.length; i += 1)
    xCarros[i] -= velocidadeCarros[i];
  }

// Carros para sempre

function voltaCarroDoInicio(){
  for(let i = 0; i < imagemCarros.length; i += 1){
  if(passouTodaTela(xCarros[i])){
    xCarros[i] = 650;
    }
  }
}

function passouTodaTela(xCarro){
  return xCarro < - 50;
}