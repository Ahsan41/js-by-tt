// ------- from two hours to four hours ----------//

// diffrence between == and ===
// example 
var num1 = 10  // num
var num2 = "10" // string

console.log(num1==num2)// true
console.log(num1===num2)// false

// == check only value but === check also the data type



// if else challenge 
//write a program for confirming of leap year or 366 days year.

var year = 2100
if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
        }else{
          console.log(`year ${year} is not a leap year`)
        }
    }else{
    console.log(`year ${year} is a leap year`)
    }
}else{
    console.log(`year ${year} is not a leap year`)
}


// CONDITION TERNARY OPERRATOR OR SHORTER IF & ELSE 

// var age = 17
// (age >= 18) ? "you acn vote" : "you cant vote "


//write a program that write a 100 numbers 
 
var numb = 10

while (numb < 100){
    numb++ ;
    console.log (numb)
}

// with help of for loop 


for(n=0 ; n<=10 ; n++){
    console.log(n)
}

//take a prompt from user and write a table of number
var user = prompt("enter a number")
for(n=1 ; n<=10 ; n++){
    var tableOf = `${user}`
    console.log(`${tableOf } * ${n} = ${tableOf * n}`)
}