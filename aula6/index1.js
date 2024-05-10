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

//Definimos uma variável inicializada com 0 que controla o pulo, no início do código, e quando passar para 1 significa que o personagem deve pular
var pula = 0;
var alturaPulo = 100;
var yInicial = 0;

var fundo = new Image();
fundo.src = "background.jpg";
var xFundo = 0;
var yFundo = 0;

window.onkeydown = pressionaTecla;
function pressionaTecla(tecla) {
  //alert("O código da tecla pressionada é: " + tecla.keyCode);
  //movimentar para a direita
  if (tecla.keyCode === 39) {
    x = x + 5;
    sentido = "direita";
    xFundo -= 5;
  }
  if (tecla.keyCode === 37) {
    x = x - 5;
    sentido = "esquerda";
    xFundo += 5;
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
  pula = 1;
}
//posição inicial do personagem
var x = canvas.width / 2 - 25;
var y = canvas.height - 60;
var imgAlex = new Image();
imgAlex.src = "https://3bmd2t.csb.app/aula6/alex-kidd-dir.png";

function desenhaPersonagem(x0, y0) {
  //ctx.fillStyle = "brown";
  //ctx.fillRect(x0, y0, 50, 50);
  console.log(imgAlex.src + "estado" + estado);
  ctx.drawImage(imgAlex, x0, y0, 60, 60);
}

function desenhaFundo(x0, y0) {
  if (x0 >= 0) x0 = 0;
  ctx.drawImage(fundo, x0, y0, 1400, 800);
}

function jogar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  desenhaFundo(xFundo, 0);
  desenhaPersonagem(x, y);
  if (pula) {
    y -= 10;
    if (yInicial - y == alturaPulo) pula = 0;
  } else {
    yInicial = y;
  }
  if (pula == 0 && y <= canvas.height - 70) y += 10;

  requestAnimationFrame(jogar);
}

jogar();
