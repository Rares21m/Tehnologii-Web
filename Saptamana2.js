// Exercitiul 1 - Exemplu
let sayHello = (name)=> `Hello,${name}`;
console.log(sayHello(process.argv[0]));

// Exercitiul 1 - Rezolvare
const concateneazaSiruri=(arr)=>arr.join('');
const cuvinte=["Salut"," ","lume","!"];
console.log(concateneazaSiruri(cuvinte));


//Exercitiul 2- Exemplu
function checkDivisible(n,divisor)
{
if(n%divisor) {
 return false
}else {
return true
}
}

console.log(checkDivisible(10,2))
console.log(checkDivisible(10,3))


//Exercitiul 2 - Rezolvare
function checkCaractere(arr1,arr2){
        if(arr1.length!==arr2.length){
        return -1
    }else{

    let contor=0
    for(let i=0;i<arr1.length;i++)
    {
        if(arr1[i]!==arr2[i])
        contor++
    }

    return contor;
    }
}

console.log(checkCaractere("Mama","Tata"));


// Exercitiul 3 - exemplu
function occurences(text,character){
    // let count=0;
    // for(var i =0;i<text.length;i++)
    // {
    //     if(text.charAt(i)===character){
    //         count++
    //     }
    // }
    // return count;
    return text.split(character).length-1;
}
console.log(occurences("sanoke text","e"));

//Exercitiul 3 - Rezolvare
function creazaArray(lista){
    return [...lista];
}
const numere =[1,2,3,4,5];
console.log(creazaArray(numere));


//Exercitiul 4 - Exemplu
function addToArray(array,...args){
    for(var i=0;i<args.length;i++)
    {
        array.push(args[i]);
    }
    return array;
}
let array=["a"]
console.log(addToArray(array,"b","c").join(", "));
//Exercitiul 4 - Rezolvare
function arrayIntercalat(arr1,arr2)
{
    const rez=[]
    for(let i=0;i<arr1.length;i++)
    {
        rez.push(arr1[i],arr2[i]);
    }
    return rez;
}
const a = [1, 3, 5];
const b = [2, 4, 6];
const rezultat = arrayIntercalat(a, b);
console.log(rezultat); 



//Exercitiul 5 - Exemplu
const checkPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (!(n % i)) {
            return false
        }
    }
    return true
}

if (process.argv.length <= 2) {
    console.log('not enough parameters')
} else {
    console.log(checkPrime(parseInt(process.argv[2])))
}


//Exercitiul 5 - Rezolvare
// funcție care calculează elementul de ordin n din șirul lui Fibonacci
function fibonacci(n) {
  if (n < 2) return n;
  let a = 0, b = 1, c;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// citim parametrul din linia de comandă
const n = parseInt(process.argv[2]);

console.log(`Elementul de ordin ${n} al șirului Fibonacci este: ${fibonacci(n)}`);



//Exercitiul 6 - DE INTREBAT 
// După ce ai urmărit videoclipul și ai testat exemplul, implementează o funcție care 
// calculează frecvențele relative de apariție a unor litere într-un text, excluzând caracterul pentru spațiu.
