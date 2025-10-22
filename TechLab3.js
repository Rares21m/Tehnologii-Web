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






