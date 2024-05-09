let buttons = document.querySelectorAll(".btn");
let updateDisplay = document.querySelector(".text");
let defaultDisplay = "";

let evaluate = (expression) => {
  let numbers = [];
  let operators = [];
  let currentNumber = "";

  for (let i = 0; i < expression.length; i++){ 
    let char = expression[i];
    if(char >= '0' && char <= '9' || char === '.'){
        currentNumber += char;
    }else{
        if (currentNumber !== "") {
            numbers.push(parseFloat(currentNumber));
            currentNumber = "";
    }
    operators.push(char);
  }
}
if (currentNumber !== "") {
    numbers.push(parseFloat(currentNumber));
  }

  let i = 0;

  while (i<operators.length) {
    if (operators[i] === "*") {
        numbers[i] = numbers[i]*numbers[i+1];
        numbers.splice(i+1, 1);
        operators.splice(i, 1);
    } else if(operators[i] === "/") {
        numbers[i] = numbers[i]/numbers[i+1];
        numbers.splice(i+1, 1);
        operators.splice(i, 1);
    }else{
        i++;
    } 
  }

  let result = numbers[0];
  for (let i = 0; i < operators.length; i++) {
    if (operators[i]==="+") {
        result += numbers[i+1];
    }else if(operators[i]==="-"){
        result -= numbers[i+1]
    }  
  }
  return result;
};

let btnclick = (event) => {
    let clickedBtn = event.target;
    let btnclicked = clickedBtn.textContent;
    
    
    if (btnclicked === "=") {
      defaultDisplay = evaluate(defaultDisplay).toString();
      updateDisplay.value = defaultDisplay;
    } else if (btnclicked === "C") {
      defaultDisplay = "";
      updateDisplay.value = defaultDisplay;
    } else if (btnclicked === "Del") {
      defaultDisplay = defaultDisplay.slice(0, -1);
      updateDisplay.value = defaultDisplay;
    } else {
      defaultDisplay += btnclicked;
      updateDisplay.value = defaultDisplay;
    }
    updateDisplay.style.color = "white";
  };
  
  buttons.forEach((button) => {
    button.addEventListener("click", btnclick);
  });