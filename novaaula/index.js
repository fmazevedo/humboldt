var canvas = document.getElementById("minha-tela");
var ctx = canvas.getContext("2d");

//Variáveis para movimentação do personagem
var andar = 0;
var alexDir0 = new Image();
alexDir0.src = "https://3bmd2t.csb.app/aula6/alex-kidd-dir.png";
var alexDir1 = new Image();
alexDir1.src = "https://3bmd2t.csb.app/aula6/alex-kidd-dir-andando.png";
var alexDir2 = new Image();
alexDir2.src = "https://3bmd2t.csb.app/aula6/alex-kidd-dir.png";

var alexEsq0 = new Image();
alexEsq0.src = "https://3bmd2t.csb.app/aula6/alex-kidd-esq.png";
var alexEsq1 = new Image();
alexEsq1.src = "https://3bmd2t.csb.app/aula6/alex-kidd-esq-andando.png";
var alexEsq2 = new Image();
alexEsq2.src = "https://3bmd2t.csb.app/aula6/alex-kidd-esq.png";
var sentido = "";
var estado = 0;

var imgBola = new Image();
imgBola.src = "https://3bmd2t.csb.app/aula7/bola.png";
var xBola = canvas.width / 2;
var yBola = 0;

window.onkeydown = pressionaTecla;
function pressionaTecla(tecla) {
  //alert("O código da tecla pressionada é: " + tecla.keyCode);
  //movimentar para a direita
  if (tecla.keyCode === 39) {
    x = x + 5;
    sentido = "direita";
  }
  if (tecla.keyCode === 37) {
    x = x - 5;
    sentido = "esquerda";
  }
  if (tecla.keyCode === 38) y = y - 5;
  if (tecla.keyCode === 40) y = y + 5;

  //deixando o personagem se movimentar como se estivesse andando
  if (andar > 2) {
    andar = 0;
    estado = 0;
  }

  if (estado === 0) {
    if (sentido === "direita") imgAlex = alexDir0;
    else imgAlex = alexEsq0;
    estado = 1;
  } else if (estado === 1) {
    if (sentido === "direita") imgAlex = alexDir1;
    else imgAlex = alexEsq1;
    estado = 2;
  } else if (estado === 2) {
    if (sentido === "direita") imgAlex = alexDir2;
    else imgAlex = alexEsq2;
  }
  andar++;
}

window.onmousedown = pressionaMouse;
function pressionaMouse(clique) {
  //codigo da mov do mouse
}
//posição inicial do personagem
var x = canvas.width / 2 - 25;
var y = canvas.height / 2 - 25;
var imgAlex = new Image();
imgAlex.src = "https://3bmd2t.csb.app/aula6/alex-kidd-dir.png";

function desenhaBola(x, y) {
  //ctx.fillStyle = "brown";
  //ctx.fillRect(x0, y0, 50, 50);
  console.log(imgAlex.src + "estado" + estado);
  ctx.drawImage(imgBola, x, y, 40, 90);
}

function desenhaPersonagem(x0, y0) {
  //ctx.fillStyle = "brown";
  //ctx.fillRect(x0, y0, 50, 50);
  console.log(imgAlex.src + "estado" + estado);
  ctx.drawImage(imgAlex, x0, y0, 60, 60);
}

function detectarColisao(
  x_vermelho,
  y_vermelho,
  altura_vermelho,
  largura_vermelho,
  x_azul,
  y_azul,
  altura_azul,
  largura_azul
) {
  if (
    x_vermelho + largura_vermelho > x_azul &&
    x_vermelho < x_azul + largura_azul &&
    y_vermelho + altura_vermelho > y_azul &&
    y_vermelho < y_azul + altura_azul
  ) {
    //interrompe o game loop parando a movimentação dos quadrados
    alert("deu ruim");
  } else {
    requestAnimationFrame(jogar);
  }
}

function jogar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  desenhaPersonagem(x, y);
  desenhaBola(xBola, yBola);
  detectarColisao(x, y, 60, 60, xBola, yBola, 40, 90);
  //requestAnimationFrame(jogar);
  if (yBola >= canvas.height + 80) yBola = 0;
  yBola++;
}

jogar();
