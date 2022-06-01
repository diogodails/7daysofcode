
function desafio2(){
const nome = prompt("Qual o seu nome");
const idade = prompt("Quantos anos você têm");
const linguagem = prompt("Qual linguagem de programação você está aprendendo no momento");

const msg = `Olá ${nome}, você tem ${idade} anos, e já está aprendendo ${linguagem} `;

alert(msg);

const opiniao = prompt(`Você gosta de estudar ${linguagem}? Responda com número 1 para sim e 2 para não`);

if  (opiniao == 1 ){
	alert("Muito bom! Continue estudando e você terá muito sucesso.");
}
if (opiniao == 2 ){
	alert("Ahh que pena... Já tentou aprender outras linguagens?");
}
}
