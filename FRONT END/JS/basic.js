// // console.log("Prabu is the coolie")
// var name = "Prabu"
// console.log(name)
// var age = 24
// var age = 25
// console.log(age)
// var isCool = true
// a=202
// b='202'
// console.log(a==b)
// console.log(a===b)


// var user=prompt("Enter your username")
// var password=prompt("Enter your password")

// if(user==="Prabu" && password==="12345"){
//     console.log("Login Successful")
//     document.write("Welcome " + user)
// }
// else{
//     console.log("Login Failed")
//     document.write("Invalid Credentials")
// }


// for(var i=1;i<=10;i+=2){
//     console.log(i); 
// }
// let a=1;
// for(;a<=5;){
//     console.log(a++);
// }

// var i=1;
// do{
//     console.log(i);
//     i+=2;
// }while(i<20);

var secretNumber = Math.floor(Math.random() * 10) + 1;
var attempts = 2;
alert("WELCOME TO JS BASICS");
alert("YOU HAVE 3 ATTEMPTS TO GUESS A NUMBER BETWEEN 1 TO 10");
prompt("Press OK to start the game");
while(attempts-->0){

    var input = Number(prompt("Enter your guess : "+secretNumber));
    if(input===secretNumber){
        alert("CONGRATS! YOU GUESSED IT RIGHT");
        break;
    }
}
if(attempts<1){

    alert("SORRY! YOU'VE USED ALL YOUR ATTEMPTS. THE NUMBER WAS " + secretNumber);
}





