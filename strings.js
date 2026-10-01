// let str1="abcdef"
// let str2='abcdef'

// let str3=`a
// b
// c
// d
// e
// f`


// let str="abcdefa"
// console.log(str.length);
// console.log(str[-1]);
// console.log(str.charAt(-1));
// console.log(str.at(-1));
// console.log(str.indexOf("a"));
// console.log(str.lastIndexOf("a"));
// console.log(str.includes("a"));
// console.log(str.startsWith("az"));
// console.log(str.endsWith("fa"));
// console.log(str.slice(3));-
// console.log(str.slice(3,1));
// console.log(str.substring(3,1));

// let words="abcd-efgh-ijkl-mnop-qrst-uvwx-yz"
// console.log(words.split("-"));


// let mobile="500"
// console.log(mobile.padStart(10,"X"));
// console.log(mobile.padEnd(10,"X"));

// let str="azAZ09"
// console.log(str.charCodeAt(0));
// console.log(str.charCodeAt(1));
// console.log(str.charCodeAt(2));
// console.log(str.charCodeAt(3));
// console.log(str.charCodeAt(4));
// console.log(str.charCodeAt(5));
// console.log(String.fromCharCode(113));

// console.log({...str});
// let obj={
//     user:"abc",
//     age:23,
//     address:{
//         pin:54321,
//         city:"BBSR"
//     }
// }

// let data={...obj} // shallow copy
// let data=JSON.parse(JSON.stringify(obj))

// data.user="mala"
// data.address.city="BLR"
// console.log(data);
// console.log(obj);


//! write a js program to find the length od string without length method?

// function findLength(str){
//     let i=0;
//     while(str[i]){
//         i++
//     }
//     console.log(i); 
// }
// findLength("abcdef")

//! write a js program to reverse a string without inbuilt methods?

// function reverseString(str){
//     let res=""
//     for(let i=str.length-1;i>=0;i--){
//         res+=str[i]
//     }
//     console.log(res);
// }
// reverseString("abcd")

//! write a js program to reverse a string
// function reverseSTR(str){
// return str.split("").reverse().join("")
// }
// console.log(reverseSTR("abcdef"));


//! write js program to check a given string is a palindrome or not.
// function palindrome(str){
//     let i=0,j=str.length-1;
//     while(i<=j){
//         if(str[i]!==str[j]){
//             return false
//         }
//         i++
//         j--
//     }
//     return true
// }
// console.log(palindrome("sundari"));

//! write a js program to count how many vowels in a give string.

// function countVowels(str){
//     let count=0,i=0,vowels="aeiou";
    
//     while(i<str.length){
//         if(vowels.includes(str[i])){
//             count++
//         }
//         i++
//     }
//     console.log(count); 
// }
// countVowels("qwrtyp")

//! write a js program to print frequency of each character in a given string

// function frequency(str){
//     let obj={};
//     let i=0;
//     while(i<str.length){
//         let char=str[i]
//         obj[char]=( obj[char] || 0 )+1
//         i++
//     }
//     console.log(obj);
    
// }
// frequency("hello")


// function countWords(str){
//     let words=[]
//     let word=""
//     for(let i=0;i<str.length;i++){
//         let char=str[i]
//         if(char===" "){
//             words.push(word)
//             word=""
//         }
//         else{
//             word+=char
//         }
//     }
//     if(word!==""){
//         words.push(word)
//         word=""
//     }
//     console.log(words);
    
// }
// countWords("js is my love ")


function spliwords(str){
    let words=[]
    let word=""
    for(let i=0;i<str.length;i++){
        let char=str[i]
        if(char===" "){
            if(word!==""){
                words.push(word)
                word=""
            }
        }
        else{
            word+=char
        }
    }
    if(word!==""){
        words.push(word)
        word=""
    }
return words    
    
}
// spliwords("i love     sundari")

function caps(word){
    let res=String.fromCharCode(word.charCodeAt(0)-32)
    for(let i=1;i<word.length;i++){
        res+=word[i]
    }
    return res
}

function captilized(scentence){
    let arr=spliwords(scentence)
    let result=""
    for(let i=0;i<arr.length;i++){
        i<arr.length-1 ? result+=caps(arr[i])+" ":result+=caps(arr[i])
    }
    console.log(result);
}
// captilized("hello world how are you i am good what about you")




// let str="hello world hoW are you i am good what about you"

// let res=str.split(" ").map((word)=>word[0].toUpperCase()+word.slice(1).toLowerCase()).join(" ")
// console.log(res);


function checkNumbers(str){
    for(let i=0;i<str.length;i++){
        let val=str.charCodeAt(i)
        
        if(!(val>=48 && val<=57)){
            return false
        }
    }
    return true
}
// console.log(checkNumbers("1234567890"));


function mostFrequcencyCharacter(str){
    let freq={}
    let i=0
    while(i<str.length){
        let char=str[i]
        freq[char]= (freq[char] || 0)+1
        i++
    }
    let max=1
    let char=""
    for (const key in freq) {
        
        if(freq[key]>max){
            char=key
        }   
    }
    console.log(char);
}

mostFrequcencyCharacter("javascripts")