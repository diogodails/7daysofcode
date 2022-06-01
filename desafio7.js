function desafio7(){
var resultado = 0;
//var num1 = 0;
//var num2 = 0;
function soma(num1 , num2 ){
    return  num1 + num2;
} 

function subtrai(num1 , num2 ){
    return num1 - num2
}

function multiplica(num1 , num2 ){
    return num1 * num2
}

function divide(num1 , num2 ){
    return num1 / num2
}
let continuar = true;
while(continuar != false){

    const operacao  = prompt("Bem vindo a calculadora! escolha operação desejada: 1 - soma, 2 - subtração, 3 - multiplicação , 4 - divisão ou 0 para sair ");
    if (operacao == 1){
         num1 = parseInt(prompt("Digite o primeiro numero:"));
         num2 = parseInt(prompt("Digite o segundo numero:"));
        resultado = soma(num1, num2);
        alert(`O resultado da operação e: ${resultado}`);
        console.log(typeof num1);
    }else if (operacao == 2){
        let num1 = prompt("Digite o primeiro numero:");
        let num2 = prompt("Digite o segundo numero:");
        resultado = subtrai(num1, num2);
        alert(`O resultado da operação e: ${resultado}`);

    }else if (operacao == 3){
        let num1 = prompt("Digite o primeiro numero:");
        let num2 = prompt("Digite o segundo numero:");
        resultado = multiplica(num1, num2);
        alert(`O resultado da operação e: ${resultado}`);

    } else if (operacao == 4){
        let num1 = prompt("Digite o primeiro numero:");
        let num2 = prompt("Digite o segundo numero:");
        resultado = divide(num1, num2);
        alert(`O resultado da operação e: ${resultado}`);

   }else if (operacao == 0){
    alert(`Obrigado por usar a calculadora`);
    continuar = false;

}


}
}