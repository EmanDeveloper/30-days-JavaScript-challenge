let name="Eman",age=21;
console.log(`${name} you ar now ${age} year old`);
console.log(`The reason why I'm emphasizing this is\n because there are other methods in JavaScript to create\n strings. But watch out, they actually don't produce true\n "Multi-Line" outputs 😱`);

// Activity 2
let arr=[1,2,3,4,5];
let [a,b]=arr;
console.log(a,b)

let book={
    title:"Programing",
    author:"Eman",
    year:2024
}

let {title,author}=book;

console.log(title)

// Activity 3
let newarr=[...arr,"Footbal","Snooker"];
console.log(newarr)


function sum(...num){
    
    return num.reduce((pre,next)=>pre+next);
}

console.log(sum(1,2,3,4,5));

// Activity 4
function defaultparameter(n1,n2=1){
    return n1*n2;
}

console.log(defaultparameter(5));

// Activity 5
let student = true;
let id = 66;
let year = 2024;

let stu={
    student,
    id,
    year,
    display(){
        console.log(`${this.student} ${id} ${year}`)
    }
}

console.log(stu)
stu.display()

let propName1 = "name";
let propName2 = "age";
let propName3 = "occupation";

let person = {
    [propName1]: "Alice",
    [propName2]: 30,
    [propName3]: "Engineer"
};

console.log(person);
