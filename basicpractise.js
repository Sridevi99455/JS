let student={
    name:'ramu',
    age:4
} 
console.log(typeof student);
console.log(student);
console.log(typeof student.name);
console.log( typeof student['age']);

let a=10
let b=a;
a=20
console.log(a);
console.log(b);

let student1=student;
student.name='sri';
console.log(student);
console.log(student1);


//array
let arr=[1,'abc',true,null,];
console.log(typeof arr)
arr.forEach((i)=>
console.log(i));
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//functions
function createCourse(course){
    console.log("course= "+course)
}
createCourse('ise');
createCourse('cse')
// block scope
{
    let x=10;
    let y=20;
    console.log(x);
}
// console.log(y);
//lexical scope-check within a block if not check global
function hello(){
    let x=10;
    console.log(x);
}
let x=100
hello();

// functions-fis=rst clss citizens
//higher order functions-regular functions which either take func as argument or returns func

let sum=(a,b)=>a+b;
let diff=function(a,b){
    return a-b;
}
function cal(operation, a,b){
    return operation(a,b);
}
console.log(cal(sum,10,5));
console.log(cal(diff,10,5));


//closure=function+lexical scope
let i=10;
function outer(){
    i=100;
    let count=0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
let closure=outer();
i=20;
// console.log(closure);
closure();
closure();
closure();
closure();


//callbacks

function fetchData(callback){
    setTimeout(()=>{
        let data='fetch data';
        callback(data,null)},3000
)};

function handleData(data,error){
    if(error){
        console.log(error);
    }
    else{
        console.log (data);
    }
}

fetchData(handleData);

//problems-callback hell /pyramid doom
//  function asyncopern1(data,(result1) => {
//     asyncopern2(result1,(result2)=>{
//         asyncopern3(result2,(result3)=>{
//             //more nested oper
//             asyncopern4(result3,(result4)=>{
//                 //so on
//             });
//         });
//     });
// });

//promises-object
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve("fetch data");
        },5000);
    })
}
// getData()
//     .then(result => {console.log(result);
//     })
//     .catch(error =>{console.error(error);
//     })

// await
 async function fetchawaitData(){
    try{
        const result=await getData();
        console.log(result);
    }
    catch{
        console.error(error);
    }
}
fetchawaitData();
//map
//filter
//reduce

let array=[1,2,3,4,5];
let doubledArray=array.map((num)=> num*2);
console.log(doubledArray);
let evenArray=array.filter((num)=> num%2===0);
console.log(evenArray)
let sum1=0;

let reducedSumArray=array.reduce((num)=>sum1+=num);//accum ,0
console.log(reducedSumArray)
let reducedProductArray=array.reduce((accumulator,num)=>accumulator*num,1);
console.log(reducedProductArray)