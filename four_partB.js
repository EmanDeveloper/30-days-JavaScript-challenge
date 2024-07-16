let n="";
for(let i=5;i>=1;i--){
    for(let j=i;j<=5;j++){
        n+="* ";
    }
    n+="\n";
}
console.log(n)

// Activity 5
n=""
for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    n+=i;
    n+=" "
}
console.log("1-10 number skip 5 : ",n);

// task 2
n=""
for(let i=1;i<=10;i++){
    if(i==7){
        break;
    }
    n+=i;
    n+=" "
}
console.log("1-10 number stop when 7 is come : ",n);

