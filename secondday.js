// Activity 1
console.log("\nAdd two number : ",2+7);
console.log("Subtract two number : ",2-7);
console.log("Multiply two number : ",2*7);
console.log("Divid two number : ",(10/3).toFixed(4));
console.log("Remainder two number : ",10%7);

// Activity 2
let task6=0;
task6+=8;
console.log("\n+= operator perfome task6=task6+8 : ",task6);

task6-=7;
console.log("-= operator perfome task6=task6-7 : ",task6);

// Activity 3
let a=9,b=9;
let resut=a>b;
console.log("\na>b : ",resut);

resut=a<b;
console.log("a>b : ",resut);

resut=a>=b;
console.log("a>=b : ",resut);
resut=a<=b;
console.log("a<=b : ",resut);

// converting a value into string
a=String(a);
resut=a==b;
console.log("a==b : ",resut);
resut=a===b;
console.log("a===b : ",resut);

// Activity Four
let age=18;
if(age>=18 && age<=30){
    console.log("\nCan derive");
}
else{
    console.log("\nCan't be Derive")
}

// || (or operator) if any one condition is tru like here age is <30
if(age!=18 || age<=30){
    console.log("Can derive");
}
else{
    console.log("Can't be Derive")
}

// ! (not operator mean it convert true value into false and false into true)

console.log("a===b : ",!resut);// like this statement above show false result but by applying not operator it convert int true
if(!(age!=18 || age<=30)){
    console.log("Can derive");
}
else{
    console.log("Can't be Derive")
}

//activity 5
let num=-5;
num<0?console.log("\n-ve number"):console.log("\nPostive number");