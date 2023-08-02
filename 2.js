console.log("javascript variables:- var let and const")
//var can be redeclared 
//let cannot be redeclared but we can  update
let a="dhruva";
let b=4;
let c=null;
let d=undefined;
{
    let b='this'
    console.log(b)//let is mainly depend on the block
}// we can redeclare the same variable using let inside a let 
console.log(b)
console.log(a)
console.log(c)
console.log(d)
//const
// const cannot be redeclared and updated
const author="Dhruva"
//let author=5
 //Throws an error because const cannot be changed
 console.log(author)