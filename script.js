const myButton = document.getElementById("my-button");

myButton.addEventListener("click", () => {
 var id= prompt("Enter City Name");
 if(id.toLowerCase() == "karachi"){
    alert("“Welcome to the city of lights” "+id);
 }
 else{
    alert("Please enter valid city name ");
 }
});

function displayGreeting() {
    var gender = prompt("Please enter a gender");

    if (gender.toLowerCase() === "male") {
      alert("Good Morning Sir.");
    } else if (gender.toLowerCase() === "female") {
      alert("Good Morning Ma'am.");
    } else {
      alert("Sorry, we don't recognize that gender.");
    }
  }

  function ShowMessage() {
    var signal = prompt("Please enter the color of road traffic signal");

    if (signal.toLowerCase() == "red") {
      alert("Must Stop 🛑 ");
    } else if (signal.toLowerCase() == "yellow") {
      alert("Ready to move 🤙");
    } else if (signal.toLowerCase() == "green") {
        alert("Move now 😉");
    }
        else {
      alert("Sorry, Enter valid color of road traffic signal.");
    }
  }

  function checkFuel() {
    var fuel = prompt("Enter remaining fuel in liters:");
    if (fuel < 0.25) {
      alert("Please refill the fuel in your car") ;
    } else {
      alert("Your car has enough fuel") ;
    }
  }


var secretNumber = Math.round(Math.random() * 10) + 1;
function checkGuess() {
 
  var guess = prompt("Guess the input");

  if (guess === secretNumber) {
   alert("Bingo! Correct answer");
  } else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
   
    alert("Close enough to the correct answer") ;
  } else {
 
    alert("Incorrect guess");
  }
}

function checkDivisibility() {

  var number = prompt("Input any number");
  if (number % 3 === 0) {
   alert("Your given number is divisible by 3");
  } else {
    alert("Your given number is not divisible by 3");
  }
}

function checkEvenOdd() {

  var number = prompt("Input any number");
  if (number % 2 === 0) {
   alert("Your given number is Even ");
  } 
  else if(number % 3 === 0,1,2) {
    alert("Your given number is Odd");
  }
   else{
    alert("Your given number is not correct");
  }
}

function checktemprature() {

  var temp = prompt("Input any number");
  if (temp  >= 40 ) {
   alert(" “It is too hot outside.” ");
  } 
  else if(temp >= 30) {
    alert(" “The Weather today is Normal.” ");
  }
  else if(temp >= 20) {
    alert(" “Today’s Weather is cool.” ");
  }
  else if(temp >= 10) {
    alert(" “OMG! Today’s weather is so Cool.” ");
  }
   else{
    alert("Please enter correct temprature");
  }
}

function calculate() {
  
  var firstNumber = prompt("Enter first number");
  var secondNumber = prompt("Enter second number")
  var operation =prompt("Enter Operator (+,-,/,x)")

  var result;
  if (operation == '+') {
    result = firstNumber + secondNumber;
  } else if (operation == '-') {
    result = firstNumber - secondNumber;
  } else if (operation == '*') {
    result = firstNumber * secondNumber;
  } else if (operation == '/') {
    result = firstNumber / secondNumber;
  } else if (operation == '%') {
    result = firstNumber % secondNumber;
  } else {
    result = 'Invalid operation';
  }

  document.getElementById('result').textContent = `Result: ${result}`;
}


function GradeSystem() {
  var subject1 = prompt("Marks Obtained in Subject 1");
  var subject2 =  prompt("Marks Obtained in Subject 2");
  var subject3 =  prompt("Marks Obtained in Subject 3");
  var totalMarks =  prompt("Enter Total Marks of the subjects ");


  var obtainedMarks = parseFloat(subject1) + parseFloat(subject2) + parseFloat(subject3);
  var percentage = (obtainedMarks / parseFloat(totalMarks)) * 100;

  var grade;
  if (percentage >= 90) {
      grade = "A+";
  } else if (percentage >= 80) {
      grade = "A";
  } else if (percentage >= 70) {
      grade = "B";
  } else if (percentage >= 60) {
      grade = "C";
  } else if (percentage >= 50) {
      grade = "D";
  } else {
      grade = "F";
  }

 
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "<h2>Result</h2><p>Total Marks: " + totalMarks + "</p><p>Obtained Marks: " + obtainedMarks + "</p><p>Percentage: " + percentage.toFixed(2) + "%</p><p>Grade: " + grade + "</p>";

  if (grade === "F") {
      resultDiv.innerHTML += "<p>Remarks: Fail - Better luck next time!</p>";
  } else if (grade === "D") {
      resultDiv.innerHTML += "<p>Remarks: Below Average - You need to improve!</p>";
  } else if (grade === "C") {
      resultDiv.innerHTML += "<p>Remarks: Average - Keep working hard!</p>";
  } else if (grade === "B") {
      resultDiv.innerHTML += "<p>Remarks: Good - Keep it up!</p>";
  } else if (grade === "A") {
      resultDiv.innerHTML += "<p>Remarks: Very Good - Excellent work!</p>";
  } else {
    alert("Invalid Error");
  }
  
}