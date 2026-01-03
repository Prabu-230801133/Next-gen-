
// var input = prompt("enter the marks");
// if (input === null || input.trim() === "") {
// 	document.write("Invalid input");
// } else {
// 	var result = Number(input);
// 	if (isNaN(result)) {
// 		document.write("Invalid input");
// 	} else {
// 		document.write(result>=90?"A+":result>=80?"A":result>=70?"B+":result>=60?"B":result>=50?"C":result>=40?"D":"F");
// 	}
// }


alert("Prabu's Calculator");
var num1 = Number(prompt("Enter the first number"));
var num2 = Number(prompt("Enter the second number"));
var ope = prompt("enter the operation (+, -, *, /)");
if (isNaN(num1) || isNaN(num2)) {
    document.write("Invalid input");
}
else {
    switch (ope) {
        case "+":
            document.write(num1 + num2);
            break;
        case "-":
            document.write(num1 - num2);
            break;
        case "*":
            document.write(num1 * num2);
            break;
        case "/":
            if (num2 === 0) {
                document.write("Cannot divide by zero");
            }
            else {
                document.write(num1 / num2);
            }
            break;
        default:
            document.write("Invalid operation");
    }

}