// Activity 1
let book={
    title:"Programing",
    author:"Eman",
    year:2024
}

for(let i in book){
    console.log("Key : ",i," Value : ",book[i])
}

console.log(" ")
console.log(book["title"]);
console.log(book.author)


// Activity two

book={...book,task3:function(){
    let val="";
    val+=this.title+" ";
    val+=this.author;
    return val;
}}

console.log(book.task3())

book={...book,update:function(year){
    this.year=year
}}
book.update(2030);
console.log(book.year)

// Activity 3
const library={
    name:"City Libray",
    book:[
        {
        title:"Programing",
        author:"Eman",
        year:2024
    },
    {
        title:"DSA",
        author:"Wasib",
        year:2020
    }
]
}

console.log(library);

library.book.forEach((el)=>{
    console.log(el.title)
})

console.log(Object.keys(library))
console.log(Object.values(library))
