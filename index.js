// Ler	o	ano	atual	e	o	ano	de	nascimento	de	uma	pessoa.	Escrever	uma	mensagem	que	diga se	ela	poderá	ou	não	votar	este	ano	(não	é	necessário	considerar	o mês	em	que	a	pessoa	nasceu).

var ano_nas, idade;
const ano = 2022;

// Mensagem de entrada
  alert ("CÁLCULO DE IDADE\n");

// Entrada de dados do usuário
ano_nas = parseInt(prompt("Em que ano você nasceu? "));

// Cálculo da idade
idade = ano - ano_nas
  alert ("\nVocê completou ou completará " + idade + " anos de idade esse ano. " );

// Condição para saber se a pessoa deve votar, não tem idade ou se o voto é opcional
if (idade >= 18 && idade < 70){
  alert ("\nVoto obrigatório. Você deve votar esse ano.");
} 
  else if (idade >= 16 && idade < 18 || idade >=70){
      alert ("\nVoto opcional. ");
  }
    else {
        alert ("\nVocê ainda não tem idade para votar.");
}