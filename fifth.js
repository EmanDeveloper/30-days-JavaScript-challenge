// activity1
function EvenOdd(n){
    n%2==0?console.log("Even"):console.log("Odd");
}

EvenOdd(2);

function Square(n){
    return n*n;
}

console.log(`Square of 5 : ${Square(5)}`)

// Activity2
function maxNum(num){
    console.log("Maximum numbe : " +Math.max(...num))
}
let num=[1,3,2,5,6];
maxNum(num);

function concatenate(str1,str2){
    console.log(str1+str2);
}
concatenate("Eman"," Developer");

// Activity3
let Sum=(num1,num2)=>{
    return num1+num2;
}

console.log("Sum of 102+980 : ",Sum(102,980));

let SpecialCharCheck=(str)=>{
    let special="!@#$%^&*";
    for(let i of special){
        if(str.includes(i)){
            return true;
        }
    }
    return false;
}

console.log("Chek @ in string or not : ",SpecialCharCheck("eman"));

// Activity 4
function defaultset(num1,num2=3){
    return `Product of default function ${num1*num2}`
}

console.log(defaultset(23));

function greeting(name,age=21){
    console.log(`Hello, ${name}! You are ${age} years old.`)
}
greeting("Eman")

// Activity 5
function callmanytime(timecallfun, time) {
    return function(arg) {
      for (let i = 0; i < time; i++) {
        timecallfun(arg);
      }
    };
  }
  
  function timecallfun(arg) {
    console.log(arg);
  }
  
  const call5Times = callmanytime(timecallfun, 3);
  
  call5Times("Eman");

//   second

let arr=[1,2,3,4,5];

let result=arr.map((el)=>{
    return el*el;
})

console.log(result);
  