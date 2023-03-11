let numero1 = undefined;
let numero2 = undefined;
let resultado = 0;
let operadorResultado = undefined;
let liberaDigito = true;

function digita(numero){
  const caixaTexto = document.getElementById('caixa');
  // const arrBotoes = document.getElementsByTagName('button');
  caixaTexto.value += numero;

  if(operadorResultado != undefined && !liberaDigito){
    caixaTexto.value = numero;
    liberaDigito = true;
  }
}

function converterPercentual(){
  const caixaTexto = document.getElementById('caixa');
  if(caixaTexto.value != ''){
    caixaTexto.value = Number.parseInt(caixaTexto.value) / 100;
  }
  
}

function inverterNumero(){
  const caixaTexto = document.getElementById('caixa');
  if(caixaTexto.value != ''){
    caixaTexto.value = Number.parseInt(caixaTexto.value) * -1;
  }
}

function operacao(operador) {
  const caixaTexto = document.getElementById('caixa');
  if(numero1 != undefined && operadorResultado){
    calcular();
  }
  numero1 = caixaTexto.value;
  operadorResultado = operador;
  liberaDigito = false;
  
}

function calcular(){
  const caixaTexto = document.getElementById('caixa');
  resultado = 0;
  numero2 = caixaTexto.value;
  
  if(operadorResultado == '+'){
    resultado = Number.parseFloat(numero1) + Number.parseFloat(numero2);
  }
  else if(operadorResultado == '-'){
    resultado = Number.parseFloat(numero1) - Number.parseFloat(numero2);
  }
  else if(operadorResultado == '*'){
    resultado = Number.parseFloat(numero1) * Number.parseFloat(numero2);
  }
  else if(operadorResultado == '/'){
    resultado = Number.parseFloat(numero1) / Number.parseFloat(numero2);
  }
  caixaTexto.value = resultado;
  operadorResultado = undefined;
  numero1 = resultado;
}

function limpaCampo() {
   const caixaTexto = document.getElementById('caixa');
   caixaTexto.value = "";
   numero1 = undefined;
   numero2 = undefined;
   operadorResultado = undefined;
}