let qtdp1 = Number(0) //quantidade produto 1 
let qtdp2 = Number(0) //quantidade produto 2 
let qtdp3 = Number(0) //quantidade produto 3 
let vproduto1 = Number(0)   //valor do produto 1
let vproduto2 = Number(0)   //valor do produto 2
let vproduto3 = Number(0)   //valor do produto 3
function test(){

    
    console.log(qtdp1)
}

function somap(botao){
    switch(botao){
        case '+1': qtdp1++; document.getElementById("qtd1").innerHTML = qtdp1; vproduto1 = (qtdp1 * 1000); document.getElementById("valortotal1").innerHTML = "R$" + (vproduto1).toLocaleString('pr-BR'); break;
        case '-1': if (vproduto1 <= 0){break;}else{qtdp1--; document.getElementById("qtd1").innerHTML = qtdp1; vproduto1 = (vproduto1 - 1000);   document.getElementById("valortotal1").innerHTML = "R$" + (vproduto1).toLocaleString('pr-BR'); break;}
        case '+2': qtdp2++; document.getElementById("qtd2").innerHTML = qtdp2; vproduto2 = (qtdp2 * 1200); document.getElementById("valortotal2").innerHTML = "R$" + (vproduto2).toLocaleString('pr-BR'); break;
        case '-2': if (vproduto2 <= 0){break;}else{qtdp2--; document.getElementById("qtd2").innerHTML = qtdp2; vproduto2 = (vproduto2 - 1200);   document.getElementById("valortotal2").innerHTML = "R$" + (vproduto2).toLocaleString('pr-BR'); break;}
        case '+3': qtdp3++; document.getElementById("qtd3").innerHTML = qtdp3; vproduto3 = (qtdp3 * 2300); document.getElementById("valortotal3").innerHTML = "R$" + (vproduto3).toLocaleString('pr-BR'); break;
        case '-3': if (vproduto3 <= 0){break;}else{qtdp3--; document.getElementById("qtd3").innerHTML = qtdp3; vproduto3 = (vproduto3 - 2300);   document.getElementById("valortotal3").innerHTML = "R$" + (vproduto3).toLocaleString('pr-BR'); break;}
    }
    document.getElementById('total').innerHTML = "Subtotal: R$" + (vproduto1 + vproduto2 + vproduto3).toLocaleString('pr-BR')
}
