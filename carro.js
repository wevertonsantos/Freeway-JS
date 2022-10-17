// Variáveis dos carros

// Carro 1
let xCarro = 700;
let yCarro = 45;
let velocidadeCarro1 = 2;

// Carro 2
let xCarro2 = 700;
let yCarro2 = 100;
let velocidadeCarro2 = 2.5;

// Carro 3
let xCarro3 = 700;
let yCarro3 = 155;
let velocidadeCarro3 = 3.2;

//*** Funções dos carros ***//

// Mostrando carros

function mostrarCarro(){
  image(imagemCarro1, xCarro, yCarro, 60, 30)
  image(imagemCarro2, xCarro2, yCarro2, 60, 30)
  image(imagemCarro3, xCarro3, yCarro3, 60, 30)
}

// Movimentando carros

function movimentadoCarro(){
    xCarro += - velocidadeCarro1;
    xCarro2 += - velocidadeCarro2;
    xCarro3 += - velocidadeCarro3;
  }