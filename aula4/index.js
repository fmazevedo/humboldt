var canvas = document.getElementById("minha-tela");
var ctx = canvas.getContext("2d");
//paredes da casa
ctx.fillStyle = "brown";
ctx.fillRect(50, 200, 200, 200);

//porta da casa
ctx.fillStyle = "blue";
ctx.fillRect(80, 300, 50, 100);

//janela da casa
ctx.fillStyle = "green";
ctx.fillRect(160, 250, 50, 50);

//círculo amarelo
ctx.beginPath();
ctx.fillStyle = "#FF0";
ctx.arc(300, 150, 50, 0, 2 * Math.PI, true);
ctx.fill();
