let n=""
for(let i=1;i<=10;i++){
    n+=i;
    n+=" "
}
console.log("1 to 10 nu,ber : ",n);

for(let i=0;i<=10;i++){
    console.log(`${5} * ${i} = ${i*5}`);
}

// Activity 2
let sum=0;
for(let i=1;i<=10;i++){
    sum+=i;
}
console.log("Sum of 1-10 number : ",sum);

let i=1;
n="";
while(i<=10){
    n+=i;
    n+=" ";
    i++;
}
console.log("1-10 number : ",n);
// task2

i=10;
n=""
while(i>=1){
    n+=i;
    n+=" "
    i--;
}
console.log("10-1 number : ",n);

//Activity 3
i=1;
n="";
do{
    n+=i;
    n+=" ";
    i++;
}while (i<=5)
console.log("1-5 number : ",n);

// task find factorial
i=5;
let fact=1;
do{
    fact*=i;
    i--;
}
while(i>=1)
console.log("Factorial of 5 : ",fact);