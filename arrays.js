// let arr=['a','b','c','d','a']
// console.log(arr.indexOf('b'));
// console.log(arr.lastIndexOf('b'));
// console.log(arr.includes('z'));

// let data=[
//     {
//         user:'sundari',
//         age:22
//     },
//     {
//         user:'mala',
//         age:25
//     },
//     {
//         user:'sundari',
//         age:26
//     },
// ]

// let res=data.find((ele)=>ele.user==="sundari")
// console.log(res);
// let lastres=data.findLast((ele)=>ele.user==="sundari")
// console.log(lastres);


// let students = [
//   { name: "Rahul", skills: ["JavaScript", "React"] },
//   { name: "Priya", skills: ["Java", "Python"] },
//   { name: "Arun", skills: ["HTML", "CSS"] }
// ];

// let res=students.map((ele)=>ele.skills).flat(Infinity)
// let res=students.flatMap((ele)=>ele.skills)
// console.log(res);





// let arr1=[1,2,3,4,5],arr2=[6,7,8,9],arr3=['a','b','c','d','e']

// let res=arr1.concat(arr2,arr3)
// console.log(res);

// console.log(arr3.slice(0,2));
// console.log(arr3.join("-`"));


// let arr=[1,[2,[3,[4,[5,[6]]]]]]

// console.log(arr.flat(Infinity))


let arr=[1,2,3,4,5]

// let res=arr.forEach((ele,index,array)=>ele*2)
// let res=arr.map((ele,index,array)=>ele*2)

// let res= arr.filter((ele)=>ele>=4)


// console.log(res);

// let res=arr.reduce((acc,ele)=>acc+ele)
// let res= arr.reduceRight((acc,ele)=>acc+ele)
// console.log(res);

let res=arr.some((ele)=>ele>4)
let res1=arr.every((ele)=>ele>0)
console.log(res);
console.log(res1);
