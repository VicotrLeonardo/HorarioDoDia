const agora = new Date();
const horario = agora.getHours();
console.log(horario);
//declaração de variaveis
var corDeFundo = document.body;
var saudacao = document.querySelector(".texto-horas");
var imagem = document.querySelector(".img-responsive");

//
if (horario >= 0 && horario <= 12) {
  corDeFundo.style.background = "rgb(243, 146, 19)";
  saudacao.innerHTML = "Bom Dia!!";
  imagem.src = "./imagens/bomdia.jpg";
} else if (horario <= 18) {
  corDeFundo.style.background = "rgb(187, 145, 6)";
  saudacao.innerHTML = "Boa Tarde!!";
  imagem.src = "./imagens/boatarde.jpg";
} else {
  corDeFundo.style.background = "black";
  saudacao.innerHTML = "Boa Noite!!";
  imagem.src = "./imagens/boanoite.jpg";
}
