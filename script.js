/*Função que será ativada quando o botão for pressionado*/
function validarNumero(){
    /*Variável que pega o valor número do input inserido pelo usuário*/
    var numero = document.getElementById("numero").value;

    /*Variável que assume a forma do elemento identificável pelo id "mensagem"*/
    var mensagem = document.getElementById("mensagem");

    /*Caso não haja nenhum input inserido pelo usuário*/
    if(numero == ""){
        /*Trocar da cor do texto da mensagem para cor vermelha*/
        mensagem.style.color = "red";

        /*Alteração do valor de mensagem para requerimento do input*/
        mensagem.textContent = "Por favor, insira um número.";
    }

    /*Caso haja input inserido pelo usuário*/
    else{
        /*Conversão do valor pego em número (que até então é interpretado como string) para Int*/
        numero = parseInt(numero);

        /*Caso o valor digitado seja maior que 10*/
        if(numero>10){
            /*Trocar da cor do texto da mensagem para cor verde*/
            mensagem.style.color = "green";

            /*Mensagem informa que o valor é maior que 10*/
            mensagem.textContent = "O número é maior que 10.";
        }

        /*Caso o valor digitado seja maior ou igual a 10*/
        else{
            /*Se o valor digitado é maior que 5*/
            if(numero>5){
                /*Trocar da cor do texto da mensagem para cor laranja*/
                mensagem.style.color = "orange";

                /*Mensagem informa que o valor é maior que 5 e menor que 11*/
                mensagem.textContent = "O número é maior que 5, mas menor ou igual a 10."
            }

            /*Se o valor digitado é menor ou igual que 5*/
            else{
                /*Trocar da cor do texto da mensagem para cor azul*/
                mensagem.style.color = "blue";

                /*Mensagem informa que o valor é menor que 6*/
                mensagem.textContent = "O número é 5 ou menor."
            }
        }
    }
}