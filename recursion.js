// function demo(n){
//     console.log(n);
//     if(n===100){
//         return
//     }
//     demo(n+1) 
// }
// demo(1)

//! sum of numbers from 1 to N

// function sum(n){
//     if(n===1){
//         return n
//     }
//     return n+ sum(n-1)
// }
// console.log(sum(5));

//! factorial of a given number.

// function factorial(n){
//     if(n===1) return n;
//     return n*factorial(n-1);
// }
// console.log(factorial(5));

//! power of a number
// function power(n,exponent=n){
//     if(exponent===0) return 1
//     return n* power(n,exponent-1)
// }
// console.log(power(2));


//! count no of digits

function count(n){
    if(n===0) return n
    return 1+count(Math.floor(n/10))
}
console.log(count(11111111));
