var canvas = document.getElementById("minha-tela");
var ctx = canvas.getContext("2d");

function desenhaCasa() {
  //paredes da casa
  ctx.fillStyle = "brown";
  ctx.fillRect(50, 200, 200, 200);

  //porta da casa
  ctx.fillStyle = "blue";
  ctx.fillRect(80, 300, 50, 100);

  //janela da casa
  ctx.fillStyle = "green";
  ctx.fillRect(160, 250, 50, 50);

  //sol amarelo
  ctx.beginPath();
  ctx.fillStyle = "#FF0";
  ctx.arc(400, 80, 50, 0, 2 * Math.PI, true);
  ctx.fill();

  //telhado
  ctx.beginPath();
  ctx.moveTo(0, 200); // Ponto inicial
  ctx.lineTo(300, 200);
  ctx.lineTo(150, 100);
  ctx.lineTo(0, 200);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "red";
  ctx.stroke();
  ctx.fillStyle = "blue";
  ctx.fill();
}
//inserindo uma nuvem
const imagem = new Image();
imagem.src = "https://3bmd2t.csb.app/aula5/nuvem.png";
var x = 300;
var y = 50;

function desenhaNuvem() {
  ctx.drawImage(imagem, x, y, 100, 50);
  ctx.drawImage(imagem, x + 10, y + 30, 100, 50);
  if (x > canvas.width) x = 0;
  else x = x + 1;
}

function jogar() {
  //apagar todo o cenário
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  desenhaCasa();
  desenhaNuvem();
  //chamar novamente a função jogar
  requestAnimationFrame(jogar);
}

//chamando a função para começar o jogo
jogar();
