function setup() {
    createCanvas(600, 400);
  }
  
function draw() {
    background(imagemEstrada);
    mostrarCarro()
    mostrarAtor()
    movimentadoCarro()
    movimentandoAtor()
    voltaCarroDoInicio()
    colisao()
    mostraPontos()
    marcaPontos()
  }