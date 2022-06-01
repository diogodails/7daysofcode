
function desafio3(){
const area = prompt("Qual área você deseja seguir? Digite 1 para Front-end ou 2 para Back-end");
let escolha = "";
let backOuFront = "";
if(area == 1 ){
	backOuFront = "Front-end";
	const areaFront = prompt("Quer aprender React ou aprender Vue? Digite 1 para React ou 2 para Vue");
	if (areaFront == "1"){
	escolha = "React";
	} else if(areaFront == "2"){
	escolha = "Vue";	
	}
}else if(area ==  2){
	backOuFront = "Back-end";
	const areaBack = prompt("Quer aprender C# ou aprender Java? Digite 1 para C# ou 2 para Java");
	if(areaBack == 1){
		escolha = "C#";
	}else if(areaBack == "2"){
		escolha = "Java";
	}
}
alert("Excelente você vai estudar " + backOuFront, " e vai se especializar em " + escolha);

const carreira = prompt(`Deseja continuar se especializando em ${backOuFront} ou seguir se desenvolvendo e se tornar Fullsatck`);
alert(carreira + " é uma ótima escolha de carreira");
let tecnologias= [];
let maisAlgumaTecnologia = ""

for(let indice = 0 ;  maisAlgumaTecnologia != 1; indice++){
	 

	 tecnologias[indice] = prompt("Gostaria de aprender mais alguma tecnologia? se não digite 1");
	 maisAlgumaTecnologia = tecnologias[indice]
	 alert("Ótimo continue se dedicando!");
	 
}
tecnologias.pop();
for(let contador = 0; contador < tecnologias.length; contador++ ){

	console.log(`você vai aprender ${tecnologias}`);

}
}