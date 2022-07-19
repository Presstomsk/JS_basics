let numA = Number(prompt("Введите первое число"));
let numB = Number(prompt("Введите второе число"));
let operation = prompt("Введите операцию над числами (+, - , * , /)");

if(operation == "+") alert(`${numA} ${operation} ${numB} = ${numA+numB}`);
else if (operation == "-") alert(`${numA} ${operation} ${numB} = ${numA-numB}`);
else if (operation == "*") alert(`${numA} ${operation} ${numB} = ${numA*numB}`);
else if (operation == "/") alert(`${numA} ${operation} ${numB} = ${numA/numB}`);
else alert(`Неверная операция!`);