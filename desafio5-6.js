   function desafio5_6(){
   let lista1 = [];
    let lista2 = [];
    let lista3 = [];
    let lista4 = [];
    let lista5 =[];
    let lista6 = [];

    let querAdicionar = true;

    for(let indice = 0 ; querAdicionar == true ; indice++){

        const resposta = prompt("Bem vindo a lista de compras! Quer adicionar um item agora? Digite 1 - Sim ou 2 - Não, ou  3 - Para remover um item da lista");
        if  (resposta != 1 && resposta != 2 && resposta != 3){
            alert("Responda somente com 1, 2 ou 3");
            querAdicionar= true;
        }else if(resposta == 1){
            const item = prompt("Digite o item que deseja adicionar a lista de compras");
            const categoria = prompt("Digite o número da categoria do item adicionado: 1 - Frutas, 2 - Laticínios, 3 - Verduras, 4 - Doces, 5 - Produtos de Limpeza, 6 - Grãos ");
            if (categoria != 1 && categoria != 2 && categoria != 3 && categoria != 4 && categoria != 5 && categoria != 6 ){
                alert("Por favor digite somente o número da categoria desejada");
            }else{

                if(categoria == 1){
                    lista1[lista1.length] = item;
                }
                if(categoria == 2){
                    lista2[lista2.length] = item;
                }
                if(categoria == 3){
                    lista3[lista3.length] = item;
                }
                if(categoria == 4){
                    lista4[lista4.length] = item;
                }
                if(categoria == 5){
                    lista5[lista5.length] = item;
                }
                if(categoria == 6){
                    lista6[lista6.length] = item;
                }
            
                }


            }else if(resposta == 2 ){
                
                    querAdicionar = false;
                
            }else{
                if(lista1[0] == undefined && lista2[0] == undefined && lista3[0] == undefined && lista4[0] == undefined && lista5[0] == undefined && lista6[0] == undefined ){

                    alert("A lista ainda está vazia!");

            }else{
                let itemDigitado = prompt(`a lista atual é ${lista1},  ${lista2},  ${lista3},  ${lista4},  ${lista5},  ${lista6}  qual item deseja excluir?`);
                var itemLista1 = lista1.indexOf(itemDigitado);
                var itemLista2 = lista2.indexOf(itemDigitado);
                var itemLista3 = lista3.indexOf(itemDigitado);
                var itemLista4 = lista4.indexOf(itemDigitado);
                var itemLista5 = lista5.indexOf(itemDigitado);
                var itemLista6 = lista6.indexOf(itemDigitado);

                if (lista1[itemLista1] == itemDigitado){
                    lista1.splice(itemLista1);
                    alert(`Item removido com sucesso! A lista atual é ${lista1},  ${lista2},  ${lista3},  ${lista4},  ${lista5},  ${lista6} `);
                }
                    else if (lista2[itemLista2] == itemDigitado){
                        lista2.splice(itemLista2);
                        alert(`Item removido com sucesso! A lista atual é ${lista1},  ${lista2},  ${lista3},  ${lista4},  ${lista5},  ${lista6} `);
                    } else if (lista3[itemLista3] == itemDigitado){
                        lista3.splice(itemLista3);
                        alert(`Item removido com sucesso! A lista atual é ${lista1},  ${lista2},  ${lista3},  ${lista4},  ${lista5},  ${lista6} `);
                    }
                    else if (lista4[itemLista4] == itemDigitado){
                        lista4.splice(itemLista4);
                        alert(`Item removido com sucesso! A lista atual é ${lista1},  ${lista2},  ${lista3},  ${lista4},  ${lista5},  ${lista6} `);
                    }
                    else if (lista5[itemLista5] == itemDigitado){
                        lista5.splice(itemLista5);
                        alert(`Item removido com sucesso! A lista atual é ${lista1},  ${lista2},  ${lista3},  ${lista4},  ${lista5},  ${lista6} `);
                    } else if (lista6[itemLista6] == itemDigitado){
                        lista6.splice(itemLista6);
                        alert(`Item removido com sucesso! A lista atual é ${lista1},  ${lista2},  ${lista3},  ${lista4},  ${lista5},  ${lista6} `);
                    }
                else{
                    
                    alert("Item não encontrado");
                }
            }
            }

    }
    alert(` A lista Final é ${lista1},  ${lista2},  ${lista3},  ${lista4},  ${lista5},  ${lista6} `);
   }