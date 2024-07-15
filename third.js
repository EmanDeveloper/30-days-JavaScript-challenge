// Activity 1
let num = 69;
if (num == 0) {
  console.log("\nNumber is Zero");
} else if (num > 0) {
  console.log("\nNumber is postive");
} else {
  console.log("\nNumber is negative");
}

let age = 20;
age >= 18
  ? console.log("Person is eligible for vote")
  : console.log("not eligible for vote");

// Activity 2
console.log("");
let a = 9,
  b = 10,
  c = 11;

if (a > b && a > c) {
  console.log("A is greater number");
} else if (b > a && b > c) {
  console.log("B is greater number");
} else {
  console.log("C is greater number");
}

// Activity 3
console.log("");
let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tusday");
    break;
  case 3:
    console.log("wednsday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Monday");
    break;
  default:
    console.log("give wright number");
}

let Num = 95;

switch (true) {
  case Num >= 90:
    console.log("A");
    break;
  case Num >= 80:
    console.log("B");
    break;
  case Num >= 70:
    console.log("C");
    break;
  case Num >= 60:
    console.log("D");
    break;
  default:
    console.log("F");
}

//Activity 4

let n=10;
n%2==0?console.log("Even"):console.log("Odd");

// Activity 5
console.log("");
let year=2020;

if(year%4==0){
  console.log("Leap Year");
}
else{
  console.log("Not a leap year");
}