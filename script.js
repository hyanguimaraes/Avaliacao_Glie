//Função calculaFibonacci, ativada pelo botão "Calcula"
function calculaFibonacci() {
    //variáveis que coletam os valores dados pelo usuário
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    //Verificação de números válidos para cálculo
    if (!ehNumeral(num1) || !ehNumeral(num2)) {
      alert("Por favor, digite números inteiros positivos!");
      return;
    }

    //Ajuste dos valores das variáveis de inputs
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    //Variável que coleta o array de resultados gerado na função pegaNumerosDeFibonacci (mais a frente)
    var numerosFibonacci = pegaNumerosDeFibonacci(num1, num2);

    //Lógica de resultados mostrados na tela
    if (numerosFibonacci.length === 0) {
        //Se o array estiver vazio:
        document.getElementById("resultado").innerHTML = "Nenhum número de Fibonnaci foi encontrado entre  " + num1 + " e " + num2;
    } else {
        //Se o array não estiver vazio, mostra os resultados separados por vírgula
        document.getElementById("resultado").innerHTML = "Números de Fibonacci encontrados entre " + num1 + " e " + num2 + ":";
        document.getElementById("numerosFibonacci").innerHTML = numerosFibonacci.join(", ");
    }

    //mostra o botão de reset
    document.getElementById("botaoResetar").style.display = "flex";
}

//Função que verifica que o input é mesmo numeral
function ehNumeral(value) {
    return /^\d+$/.test(value);
}


//Função que cria o array de resultados obtidos através da função calculaFibonacci
function pegaNumerosDeFibonacci(num1, num2) {
    var numerosFibonacci = [];
    var a = 0;
    var b = 1;

    while (a <= num2) {
        if (a >= num1) {
            numerosFibonacci.push(a);
        }

        var temp = a;
        a = b;
        b = temp + b;
    }

    return numerosFibonacci;

}

//Função de regarregamento da página através do botão Reiniciar
function reiniciar() {
    location.reload();
}