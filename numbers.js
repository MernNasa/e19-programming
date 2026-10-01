//! write a js program to check a given number is even or odd?

// function isEvenOrOdd(n){
//     if(n%2===0){
//         console.log(`${n} is a even number`);
//     }
//     else{
//         console.log(`${n} is a odd number`);
//     }
// }
// isEvenOrOdd(11)

//! find a square of a given number

// function square(n){
//     return n**2
// }

// console.log(square(10));


//! find n even numbers

// function evenNumbers(n){
//     let numbers=[]
//     let i=1
//     while(numbers.length<n){
//         if(i%2===0){
//             numbers.push(i)
//         }
//         i++
//     }
//     console.log(numbers); 
// }
// evenNumbers(5)
// evenNumbers(15)

//! sum of n even numbers

// function sumOfNEven(n){
//     let sum=0
//     // let count=0
//     let i=1
//     while(i<=n){
//       sum += i*2;
//         i++
//     }
//     console.log(sum);
    
// }
// sumOfNEven(5)


//! greatest number from 3 numbers



// function greatestNumber(a,b,c){
//     if(a>b && a>c){
//         console.log(a);
//     }
//     else if( b>c){
//         console.log(b);
//     }
//     else{
//         console.log(c);
        
//     }
// }
// greatestNumber(21,20,10)


// function GCD(a,b){
//     while(b!==0){
//         let rem=a%b 
//         a=b 
//         b=rem
//     }
//     console.log(a);
// }
// GCD(200,100)


// function LCM(a,b){
//     let lcm=a
//     while(lcm%b!==0){
//         lcm+=a
//     }
//     console.log(lcm);
// }
// LCM(18,12)


// function largestDigit(n){
//     let largest=0
//     while(n>0){
//         let digit=n%10
//         if(digit>largest){
//             largest=digit
//         }
//         n=Math.floor(n/10)
//     }
//     console.log(largest);
// }
// largestDigit(12345432)


// function smallestDigit(n){
//     let smallest=9
//     while(n>0){
//         let digit=n%10
//         if(digit<smallest){
//             smallest=digit
//         }
//         n=Math.floor(n/10)
//     }
//     console.log(smallest);
// }
// smallestDigit(12345432)



// function occurrenceDigit(n,d){
//     let count=0
//     while(n>0){
//         let digit=n%10
//         if(digit===d){
//             count++
//         }
//         n=Math.floor(n/10)
//     }
//     console.log(count);
// }
// occurrenceDigit(123412345674,3)


// function Digit_frequency(n){
//     let obj={}
//     while(n>0){
//         let digit=n%10
//         obj[digit]=(obj[digit] || 0)+1
//         n=Math.floor(n/10)
//     }
//     console.log(obj);   
// }
// Digit_frequency(1234561234)

// object

// let obj={
//     1:"abc"
// }
// console.log(obj[1]);




// function fibonacci(n){
//     let series=[0,1]
//     let i=2
//     while(series.length<n){
//         series[i]=series[i-1]+series[i-2]
//         i++
//     }
//     console.log(series);
    
// }
// fibonacci(10)

// function isAutomorphic(n){
//     let square=n**2
//     while(n>0){
//         let digit=n%10
//         let sq_digit=square%10
//         if(digit!==sq_digit){
//             return false
//         }
//         n=Math.floor(n/10)
//         square=Math.floor(square/10)
//     }
//     return true
// }
// console.log(isAutomorphic(5));
// console.log(isAutomorphic(25));
// console.log(isAutomorphic(250));
// console.log(isAutomorphic(76));




// function isNenoNumber(n){
//     let square=n**2
//     let sum=0
//     while(square>0){
//         sum+=square%10
//         square=Math.floor(square/10)
//     }
//    return sum===n
// }
// console.log(isNenoNumber(9));
// console.log(isNenoNumber(12));


// function duckNumber(num){
//     let n=parseInt(num)
//     while(n>0){
//         let digit=n%10
//         if(digit===0){
//             return true
//         }
//         n=Math.floor(n/10)
//     }
//     return false
// }
// console.log(duckNumber("01101"));



// function spyNumber(n){
//     let sum=0,product=1
//     while(n>0){
//         let digit=n%10
//         sum+=digit
//         product*=digit
//         n=Math.floor(n/10)
//     }
//     return sum=== product
// }
// console.log(spyNumber(123));
// for(let i=1;i<=100;i++){
//     if(spyNumber(i)){
//         console.log(i);
//     }
// }

function sunnyNumber(n){
    let num=n+1
    let sq_root=Math.sqrt(num)
    if(sq_root%1!==0){
        return false
    }
    return true
}
console.log(sunnyNumber(49));


