// * * * * * 
//   * * * * 
//     * * * 
//       * * 
//         * 
// let n=5
// for(let i=1;i<=n;i++){
//     let row=""
//     for(let j=1;j<=n;j++){
//         (i<=j)?row+="* ":row+="  "
//     }
//     console.log(row);
// }


//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * * 
// let n=5
// for(let i=1;i<=n;i++){
//     let row=""
//     for(let j=1;j<=n;j++){
//         (i+j>=n+1)?row+="* ":row+="  "
//     }
//     console.log(row);
// }


// let n=9
// for(let i=1;i<=2*n-1;i++){
//     let row=""
//     for(let j=1;j<=n;j++){
//         ((i<=n && i+j>=n+1)||(i>n && i-j<=n-1))?row+="* ":row+="  "
//     }
//     console.log(row);
// }

//         *         
//       * * *       
//     * * * * *     
//   * * * * * * *   
// * * * * * * * * * 
//   * * * * * * *   
//     * * * * *     
//       * * *       
//         *   


// let n=5
// for(let i=1;i<=2*n-1;i++){
//     let row=""
//     for(let j=1;j<=2*n-1;j++){
//         ((i+j>=n+1 && j-i<=n-1) && (i-j<=n-1 && i+j<=3*n-1) ) ?row+="* ":row+="  "
//     }
//     console.log(row);
// }



//         *         
//       *   *       
//     *       *     
//   *           *   
// *               * 
//   *           *   
//     *       *     
//       *   *       
//         *     
// let n=5
// for(let i=1;i<=2*n-1;i++){
//     let row=""
//     for(let j=1;j<=2*n-1;j++){
//         ((i+j===n+1 || j-i===n-1) || (i-j===n-1 || i+j===3*n-1) ) ?row+="* ":row+="  "
//     }
//     console.log(row);
// }

// * * * * * * * * * 
// *     *   *     * 
// *   *       *   * 
// * *           * * 
// *               * 
// * *           * * 
// *   *       *   * 
// *     *   *     * 
// * * * * * * * * * 


// let n=5
// for(let i=1;i<=2*n-1;i++){
//     let row=""
//     for(let j=1;j<=2*n-1;j++){
//         (i+j===n+1 || j-i===n-1 || i-j===n-1 || i+j===3*n-1 || i===1 || j===1 || i===2*n-1 || j===2*n-1 ) ?row+="* ":row+="  "
//     }
//     console.log(row);
// }

// * * * * * * * * * 
//   *           *   
//     *       *     
//       *   *       
//         *         
//       *   *       
//     *       *     
//   *           *   
// * * * * * * * * * 
// let n=5
// for(let i=1;i<=2*n-1;i++){
//     let row=""
//     for(let j=1;j<=2*n-1;j++){
//         (i===1 || i===2*n-1 || i===j || i+j===2*n) ?row+="* ":row+="  "
//     }
//     console.log(row);
// }
// *               * 
// * *           * * 
// *   *       *   * 
// *     *   *     * 
// *       *       * 
// *     *   *     * 
// *   *       *   * 
// * *           * * 
// *               * 
// let n=5
// for(let i=1;i<=2*n-1;i++){
//     let row=""
//     for(let j=1;j<=2*n-1;j++){
//         (j===1 || j===2*n-1 || i===j || i+j===2*n) ?row+="* ":row+="  "
//     }
//     console.log(row);
// }

// *   *   * 
//   * * *   
// * * * * * 
//   * * *   
// *   *   * 

// let n=5
// for(let i=1;i<=n;i++){
//     let row=""
//     for(let j=1;j<=n;j++){
//         (i===Math.ceil(n/2) || j===Math.ceil(n/2) || i===j || i+j===n+1) ?row+="* ":row+="  "
//     }
//     console.log(row);
// }


// let n=5

// for(let i=1;i<=n;i++){
//     let row=""
//     let char=48
//     for(let j=1;j<=n;j++){
//          i>=j? row+=String.fromCharCode(char)+" ":""
//          char++
//     }
//     console.log(row);
// }

// let n=5
// for(let i=1;i<=n;i++){
//     let char=64+n
//     let row=""
//     for(let j=1;j<=n;j++){
//         if(i+j>=n+1){
//             row+=String.fromCharCode(char)+" "
//         }
//         else{
//             row+="  "
//         }
//         char--
//     }
//     console.log(row);
    
// }

let arr=[1,2,3,4,5]
console.log(arr[-1]);
