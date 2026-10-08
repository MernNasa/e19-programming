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


// let arr=[1,2,3,4,5]

// let res=arr.forEach((ele,index,array)=>ele*2)
// let res=arr.map((ele,index,array)=>ele*2)

// let res= arr.filter((ele)=>ele>=4)


// console.log(res);

// let res=arr.reduce((acc,ele)=>acc+ele)
// let res= arr.reduceRight((acc,ele)=>acc+ele)
// console.log(res);

// let res=arr.some((ele)=>ele>4)
// let res1=arr.every((ele)=>ele>0)
// console.log(res);
// console.log(res1);


// let arr=[3,5,6,1,2,8,9,4,7]

// arr.sort((a,b)=>a-b)
// let ascendingArray=arr.toSorted((a,b)=>a-b)
// arr.reverse()
// let reverseArray=arr.toReversed()
// console.log(arr);
// console.log(reverseArray);

// console.log(ascendingArray);

// let arr=['a','b','c',23]

// console.log(arr[-1]);
// console.log(arr.at(-1));
// console.log(arr.toString(2));


// console.log(Array.isArray(arr));

// let str="abcdefg"
// console.log(Array.from(str));

// console.log(Array.of(str));



//! 1. find largest element in an array

// function findLargestElement(arr){
//     let largest=arr[0]
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>largest){
//             largest=arr[i]
//         }
//     }
//     console.log(largest);
// }
// findLargestElement([1,2,3,4,5,23,34,10])

//! find smallest element in an array


// function findSmallestElement(arr){
//     let smallest=arr[0]
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]<smallest){
//             smallest=arr[i]
//         }
//     }
//     console.log(smallest);
// }
// findSmallestElement([1,2,3,4,5,23,34,-10])

//! find the search element index

// function searchElementIndex(arr,target){
//     let index=-1
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             index=i
//             break;
//         }
//     }

//     index>=0?console.log("element is fount in "+ index):console.log("element not fount");
// }

// searchElementIndex([1,2,3,4,5,6,7],1)



// function reverseArray(arr){
//     let start=0,end=arr.length-1
//     while(start<end){
//         let temp=arr[start]
//         arr[start]=arr[end]
//         arr[end]=temp
//         start++
//         end--
//     }
//     return arr
// }

// console.log(reverseArray([1,2,3,4,5]));


function findSecondLargestElement(arr){

    let largest=arr[0]
    let secondLargest=-Infinity
    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest=largest
            largest=arr[i]  
        }
        else if(arr[i]>secondLargest && arr[i]!==largest){
            secondLargest=arr[i]
        }
    }
    console.log(secondLargest);
}

findSecondLargestElement([1,2,3,4,5])
