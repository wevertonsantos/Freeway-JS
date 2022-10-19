// Variáveis dos carros

let xCarros = [650, 650, 650, 650, 650, 650];
let yCarros = [45, 100, 155, 215, 267, 322];
let velocidadeCarros = [2, 2.5, 3.5, 5, 2.3, 2.8];
let carroComprimento = 60;
let carroAltura = 30;

//*** Funções dos carros ***//

// Mostrando carros

function mostrarCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], carroComprimento, carroAltura)
  }
}

// Movimentando carros

function movimentadoCarro(){
    for(let i = 0; i < imagemCarros.length; i++)
    xCarros[i] -= velocidadeCarros[i];
  }

// Carros para sempre

function voltaCarroDoInicio(){
  for(let i = 0; i < imagemCarros.length; i++){
  if(passouTodaTela(xCarros[i])){
    xCarros[i] = 650;
    }
  }
}

function passouTodaTela(xCarro){
  return xCarro < - 50;
}