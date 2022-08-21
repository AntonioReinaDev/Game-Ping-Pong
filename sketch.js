// variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

// velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// variáveis barra E
let xBarraE = 5;
let yBarraE= 150;
let comprimentoBarra = 10;
let alturaBarra = 90;
let bordaBarra = 5;

// variáveis barra D
let xBarraD = 585;
let yBarraD = 150;
let velocidadeYBArraD;

// variável da biblioteca
let colidiu = false;

// variáveis placar
let meusPontos = 0;
let pontosOponente = 0;

// variável para função random
let numeroAleatorio = [-6, 6];

function preload(){
  random(numeroAleatorio)
}
function setup() {
  createCanvas(600, 400);
}
function draw() {
  background(0);
  mostraBolinha();
  movimentoBolinha();
  verificarColisaoBorda(); 
  mostraBarra(xBarraE, yBarraE);
  movimentoBarraE();
  mostraBarra(xBarraD, yBarraD);
  movimentoBarraD();
  colisaoBarra(xBarraE, yBarraE);
  colisaoBarra(xBarraD, yBarraD);
  incluiPlacar();
  marcaPonto();
  fimDeJogo();
  mensagemFimDeJogo();
  recomecarBola();
  arrumarBolinhaPresa();
  barraDentroDasBordas();
}

// bolinha
function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}
function movimentoBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
function verificarColisaoBorda(){
  if (xBolinha + raio > width ||
     xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height ||
    yBolinha - raio < 0){
   velocidadeYBolinha *= -1
 }
}

// barra/raquete
function mostraBarra(x,y){
  rect(x, y, comprimentoBarra, alturaBarra, bordaBarra)
}
function movimentoBarraE(){
  if (keyIsDown(87)){
    yBarraE -= 10;
  }
  if (keyIsDown(83)){
    yBarraE += 10;
  }
}
function movimentoBarraD(){
  //velocidadeYBarraD = yBolinha - yBarraD - comprimentoBarra / 2 - 30;
  //yBarraD += velocidadeYBarraD
  if (keyIsDown(UP_ARROW)){
    yBarraD -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yBarraD += 10;
  }
}
function colisaoBarra(x, y){
   colidiu =
collideRectCircle(x, y, comprimentoBarra, alturaBarra, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1
  }
}

// placar e pontuação
function incluiPlacar (){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20, 10);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20, 10);
  fill(255);
  text(pontosOponente, 470, 26);
}
function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosOponente += 1;
  }
}

// fim de jogo e recomeço
function recomecarBola (){
  if (keyIsDown(32)){
    xBolinha = 300;
    yBolinha = 200;
    velocidadeXBolinha = random(numeroAleatorio);
    velocidadeYBolinha = random(numeroAleatorio);
    meusPontos = 0;
    pontosOponente = 0;
  }
}
function fimDeJogo(){
  if (meusPontos >= 10){
    xBolinha = 300;
    yBolinha = 200;
    velocidadeYBolinha = 0;
    velocidadeXBolinha = 0;
    xBarraE = 5;
    yBarraE= 150;
    xBarraD = 585;
    yBarraD = 150;
  }
  if (pontosOponente >= 10){
    xBolinha = 300;
    yBolinha = 200;
    velocidadeYBolinha = 0;
    velocidadeXBolinha = 0;
    xBarraE = 5;
    yBarraE= 150;
    xBarraD = 585;
    yBarraD = 150;
  }
}
function mensagemFimDeJogo(){
  if (meusPontos >= 10 && xBolinha === 300 && yBolinha === 200 && velocidadeYBolinha === 0){
    textAlign(CENTER);
    textSize(30);
    fill(255)
    text('Jogador 1 Venceu', 300, 300);
  }
  if (pontosOponente >= 10 && xBolinha === 300 && yBolinha === 200 && velocidadeYBolinha === 0){
    textAlign(CENTER);
    textSize(30);
    fill(255)
    text('Jogador 2 Venceu', 300, 300);
  }
}

// correções
function arrumarBolinhaPresa(){
    if (xBolinha - raio <= 0){
    xBolinha = 17;
    }
    if (xBolinha + raio >= 600){
    xBolinha = 573;
    }
}
function barraDentroDasBordas(){
  if (yBarraE < 0){
    yBarraE *= -0.2; 
  } 
  if (yBarraE > 310){ 
    yBarraE = 308;
  }
  if (yBarraD <0){
    yBarraD *= -0.2;
  }
  if (yBarraD > 310){
    yBarraD = 308;
  }
}