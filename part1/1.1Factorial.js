
    
function factorial(n){
    if(n == 1)
    return 1;
    else{
        return factorial(n - 1) * n;
    }
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(12));
console.log(factorial(10));
console.log(factorial(1));
