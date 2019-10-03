var numberString1 = '';
var numberString2 = '';
var operator = '';
inicializeCalc();

function addNumber(n){
  if(counting.innerText == "0"){
    counting.innerHTML = '';
  }
  if(operator == ''){
    numberString1 += n;
    console.log(numberString1);
  }else{
    numberString2 += n;
    console.log(numberString2);
  }
  counting.innerHTML += n;
}
function addOperator(o){
  if(operator == '' && counting.innerHTML != "0"){
    operator = o;
    counting.innerHTML += o;
  }
}
function calculate(){
  let number1 = Number(numberString1);
  let number2 = Number(numberString2);
  let calc = 0;

  if(operator == '÷'){
    calc = number1/number2;
  }else if(operator == 'x'){
    calc = number1*number2;
  }else if(operator == '-'){
    calc = number1-number2;
  }else{
    calc = number1+number2;
  }

  let textResult = counting.innerText+" = "+String(calc);
  result.innerHTML = textResult;
  counting.innerHTML = '0';
  zeroVar();
}

function inicializeCalc(){
  const counting = document.querySelector('#counting');
  const result = document.querySelector('#result');
  counting.innerHTML = '0';
  result.innerHTML = '0';
}

function zeroVar(){
  numberString1 = '';
  numberString2 = '';
  operator = '';
}