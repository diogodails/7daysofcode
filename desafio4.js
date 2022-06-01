
function desafio4(){
const numero = Math.floor(Math.random() * (10 - 0 + 1) + 0);
//console.log(numero);
 const resposta = prompt("Tente adivinhar o numero que o computador escolher de 0 a 10");

if (numero == resposta){
    alert("Parabéns acertou de primeira");
}else{
    let tentativas = 0;
    let resposta;
    
        while( tentativas  < 4 && numero != resposta){
        resposta = prompt("Que pena você errou, tente novamente " + (3 - tentativas) + " tentarivas restantes");
        tentativas++;
    }
    if(numero == resposta){
        alert("Parabêns você acertou");
    }else{
        alert("Infelizmente suas tentativas acabaram e você não acertou");
    }
}
}