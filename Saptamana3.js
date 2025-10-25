// //PROBLEMA 1 

// const arr=[1995,2000,2001,2002,2008,2009,2010]
// const func=(arr)=>
// {
    
//         const result=arr.map((x)=>2025-x).filter(x=>x>18)
//         return result;
    
    
// }

// console.log(func(arr));


// //PROBLEMA 2 



// const arr1=[1,2,3,4,5,6,7,8,9,10]  

// const func2=(arr1 , div)=>{
    
//    return  arr1.filter(x=>!(x%div)).reduce((prev, current) => {
//         return prev + current
//     }, 0)

// }

// console.log(func2(arr1,10));



//PROBLEMA 3 



// const formatString = (s, format) => {

//     let modified = s
//     for(const key in format)
//     {
//         if(modified.indexOf('{' + key + '}')!==-1)
//         {
//             modified=modified.replace('{' + key + '}',format[key])
//         }
//     }
//     return modified
// }

// console.log(formatString("this is a {characteristic} {action} ", 
//     {
//         characteristic:'test',
//         action:'bombastic'
//     }
// ))

//Problema 4

//Functia map este o metoda pe array si acum vedem cum o putem face ca o functie globala

// const sampleArray=[1,2,3,4,5]

// const map=(array,transfomration)=>
// {
//     const result=[];
//     for(const element of array)
//     {
//         result.push(transfomration(element))
//     }
//     return result;
// }

// console.log(map(sampleArray,(x)=>x*2))

//Problema 4

// const numbers=[1,2,3,4,5]

// const reduceLeft = (array, reducer, initialValue) => {
//   let accumulator;
//   let startIndex;
//   if (initialValue !== undefined) {
//     accumulator = initialValue;
//     startIndex = 0;
//   } else {
//     accumulator = array[0];
//     startIndex = 1;
//   }

//   for (let i = startIndex; i < array.length; i++) {
//     accumulator = reducer(accumulator, array[i], i, array);
//   }

//   return accumulator;
// };

// console.log(reduceLeft(numbers, (acc, x) => acc + x, 0));





