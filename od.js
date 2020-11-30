const University = {
    name : "windsor University",
    cost : "CAD 38000",
    location : "Windsor Ontario",

}

// let {name,cost} = University;
// console.log(name,cost)

//alias 

 const {name : secretname , cost : fees} = University
console.log(fees)

//https://dmitripavlutin.com/javascript-object-destructuring/