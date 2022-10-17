// Variáveis dos carros

let xCarros = [650, 650, 650];
let yCarros = [45, 100, 155];
let velocidadeCarros = [2, 2.5, 3.2];

//*** Funções dos carros ***//

// Mostrando carros

function mostrarCarro(){
  image(imagemCarro1, xCarros[0], yCarros[0], 60, 30)
  image(imagemCarro2, xCarros[1], yCarros[1], 60, 30)
  image(imagemCarro3, xCarros[2], yCarros[2], 60, 30)
}

// Movimentando carros

function movimentadoCarro(){
    xCarros[0] += - velocidadeCarros[0];
    xCarros[1] += - velocidadeCarros[1];
    xCarros[2] += - velocidadeCarros[2];
  }

function voltaCarroDoInicio(){
  if(xCarros[0] < -50){
    xCarros[0] = 650;
  }
  if(xCarros[1] < -50){
    xCarros[1] = 650;
  }
  if(xCarros[2] < -50){
    xCarros[2] = 650;
  }
}