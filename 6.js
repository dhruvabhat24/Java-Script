let a =prompt('Hey whats your age?');
a = Number.parseInt(a);
if(a<0){
    alert("this is an invalid age")
}
else if(a<9){
    alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>9){
    alert("You are a kid and you can think of driving after 18");
}
else{
    alert("This is a valid age");
}
console.log("Done")