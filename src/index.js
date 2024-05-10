import "./styles.css";
document.body.style.backgroundColor = "#e6faff";
document.getElementById("titulo").style.backgroundColor = "green";
window.novalinha = function () {
  // alert("oi, tudo bem?");
  document.getElementById("resultado").innerHTML +=
    document.getElementById("frase").value + "<br>";
};

window.vai = function (f) {
  alert(f);
  return false;
};
