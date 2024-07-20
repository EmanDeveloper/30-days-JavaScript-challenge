// Activity 1
let num=[1,2,3,4,5];
console.log(num)
console.table(num)

// task2
console.log(num[0]);
console.log(num[num.length-1])

// Activity 2
num.push("last")
console.log(num);

num.pop();
console.log(num);

num.shift();
console.log(num)

num.unshift(90);
console.log(num);

// Activity 3
let modified_num=num.map(el=>el+el);
console.log(modified_num);

let even_num=num.filter(el=>el%2==0);
console.log(even_num)

let sum_num=num.reduce((pre,next)=>pre+next);
console.log(sum_num)

// Activity 4
console.log(" ")
for(let i of num){
    console.log(i);
}
console.log(" ")
num.forEach((el)=>{
    console.log(el)
})

console.log(" ")
let two_d_arr=[[1,2,3],
               [4,5,6],
               [7,8,9]];

for(let i of two_d_arr){
    let row="";
    for(let j of i){
        row+=j+" ";
    }
    console.log(row)
}

console.log(two_d_arr[2][2])