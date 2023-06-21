
//! variable declaration in js

// var a = 10;
// var b = 12.69;
// var c = 123456789;
// var d = 12345.56789;
// var e = 'e';
// var f = "qwerty";
// var g = true;
// var h = false;
// var i = null;
// var j;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);
// console.log(i);
// console.log(j);


//! re-initiaze and re-declare

// var a;       // declare

// a = 10;     // initialize

// a = 20;     // re-initialize

// var a = 30; // re-declare

// console.log( a );

//! identifier rules

// var a = 2000;

// console.log( A );


//! Datatypes

// var a = 10;
// console.log( typeof a );

// var b = 'abcd';
// console.log( typeof b );

// var c = true;
// console.log( typeof c );

// var d;
// console.log( typeof d );

//! operators

// var a = 0 ;

// var b = false;

// console.log( a == b );

// console.log( a === b );


// var a = "20";

// var b = -a;

// console.log( b );

// console.log( typeof b );

//! DMS

// var day = "holiday"

// switch(day)
// {
//     case "monday" : console.log("Weekday");
//                     break;
//     case "tuesay" : console.log("Weekday");
//                     break;
//     case "wednesday" : console.log("Weekday");
//                     break;
//     case "thursday" : console.log("Weekday");
//                     break;
//     case "friday" : console.log("Weekday");
//                     break;
//     case "saturday" : console.log("Weekday");
//                     break;
//     case "sunday" : console.log("Weekday");
//                     break;
//     default : console.log("invalid");
// }



// if(day=="monday")
// {
//     console.log("Weekday");
// }
// else if(day=="tuesday")
// {
//     console.log("Weekday");
// }
// else if(day=="wednesday")
// {
//     console.log("Weekday");
// }
// else if(day=="thursday")
// {
//     console.log("Weekday");
// }
// else if(day=="friday")
// {
//     console.log("Weekday");
// }
// else if(day=="saturday")
// {
//     console.log("Weekend");
// }
// else if(day=="sunday")
// {
//     console.log("Weekend");
// }
// else
// {
//     console.log("Invalid")
// }


//! Looping

// find a factorial of a value

// var num = 8;
// var prod = 1;

// for(var n=num ; n>0 ; n--)
// {
//     prod = prod * n;
// }

// console.log(prod);

//! find a factorial number of a value
// var prod = 120;
// var n = 1;

// while(prod>1)
// {
//     prod = prod/n;
//     n++;
// }
// console.log(--n);

//! reverse the given number


//! functions or method
// function palindrome( num )
// {
//     let rev = 0;
//     const temp = num;
//     while(num>0)
//     {
//         var last = num%10;
//         rev =( rev*10 )+ last;
//         num = parseInt(num/10);
//     }
//     console.log(rev==temp ? "palindrome" : "not");
// }

// palindrome(12321);





//! VAR

// var a = 10;

// a = 20;

// var a = 30;

// console.log( a );


//! LET

// let a = 10;

// a = 20;

// let a = 30;

// console.log( a );


//! CONST

// const a = 10;

// a = 20;

// console.log( a );

// function sample()
// {
//     if(10 > 5)
//     {
//         const a = 10;
//         console.log(a);
//     }
//     console.log(a);
// }

// sample();

//! ARRAYS

// let arr = [10 , 20 , 30 , 40];

// arr.length--;
// arr.length--;
// arr.length--;


// console.log( arr );

//! OBJECTS


//!   with using class
// class Laptop
// {
//     constructor(brand , color , price , RAM)
//     {
//         this.brand = brand;
//         this.color = color;
//         this.price = price;
//         this.RAM = RAM;
//     }
//     createDoc()
//     {
//         console.log("create a new document");
//     }
// }
// var l1 = new Laptop("HP","RED",20000,"12GB");

// console.log(l1.brand);
// l1.createDoc();

//!   with using  object literal {}


let l1 = {
            brand : "HP",
            color :"red",
            price : 20000,
            ram : "12GB",
            createDoc : function createDoc()
                        { console.log("create new docs") }
}

console.log(  l1.color );
l1.createDoc();