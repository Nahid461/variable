//let

let strName = "Nahid";// Global Variable
//console.log(intValue);//intValue is not defined

{

    //Define Variable inside the scope
//console.log(intValue);//intValue is not defined
let  intValue1 = 10; //Local Variable
console.log(intValue1)//10

console.log(strName);

}

//console.log(intValue1);//intValue is not defined


//var

var strName2 = "Nahid Fatima";

console.log(intValue2);//Undefined

{

//console.log(intValue2);//Undefined 
var intValue2 = 10
console.log(intValue2);// 10

console.log(strName2);

}

console.log(intValue2);//10

//Const

const pi = 3.14; //Global Variable
//exception throw
console.log(pi1);//Uncaught ReferenceError: log is not defined
{

console.log(pi);
const pi1 = 3.15;//Local Variable
console.log(pi1 );

}

console.log(pi);
console.log(pi1);//Uncaught ReferenceError: log is not defined