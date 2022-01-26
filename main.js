const agora = new Date();
const horario = agora.getHours();
//const horario = 11;
console.log(horario);
//declaração de variaveis
var body = document.body;
var saudacao = document.querySelector(".texto-horas");
var imagem = document.querySelector(".img-responsive");

//
if (horario >= 0 && horario < 12) {
  body.style.background = "#e2cd9f";
  saudacao.innerHTML = `Bom Dia!! Agora são ${horario} Hrs.`;
  imagem.src = "./imagens/bomdia.jpg";
} else if (horario >= 12 && horario <= 18) {
  body.style.background = "#b9846f";
  saudacao.innerHTML = `Boa Tarde!! Agora são ${horario} Hrs.`;
  imagem.src = "./imagens/boatarde.jpg";
} else {
  body.style.background = "black";
  saudacao.innerHTML = `Boa Noite!! Agora são ${horario} Hrs.`;
  imagem.src = "./imagens/boanoite.jpg";
}
