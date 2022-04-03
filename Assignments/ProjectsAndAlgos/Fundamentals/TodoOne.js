//@ Setting and Swapping

var myNumber = 42;

var myName = "Some Sucka";

[myNumber, myName] = [myName, myNumber];

// console.log(myNumber);
// console.log(myName);


//@ Print -52 to 1066

// for(var x = -52; x <= 1066; x++) {
//     console.log(x);
// }


//@ Don’t Worry, Be Happy

// function beCheerful() {
//     console.log("good morning SUCKAS!")
// }

// beCheerful();

//@ Multiples of Three – but Not All

// for(var x = -300; x <= 0; x++) {
//     if(x % 3 == 0) {
//         if(x == -3 || x == -6) {
//             continue;
//         }
//         console.log(x);

//     }
// }

//@ Printing Integers with While

// var x = 2000;

// while(x <= 5280) {
//     console.log(x);
//     x += 1;
// }


//@ You Say It’s Your Birthday

// function birthday(month, day) {

//     if(month === "Feb" && day === 1){
//         console.log("How did you know mang?!?!");

//     }
//     else {
//         console.log("Just another day...")
//     }
// }


// birthday("Feb", 1);

//@ Leap Year

// function leapYear(year) {
    
//     if(year % 4 == 0 && year % 100 !== 0) {
//         console.log("Leap Year: " + year);
//     }
// }

// leapYear(2008);

//@ Print and Count

// var count = 0;

// for(x = 512; x <= 4096; x++) {
//     if(x % 5 == 0) {
//         count += 1;
//         console.log(x);
//         console.log(count);

//     }
// }


//@ Multiples of Six


// var x = 0;

// while(x <= 60000){
    
//     if(x % 6 == 0) {
//         console.log(x);

//     }
//     x += 1;
// }




//@ Counting, the Dojo Way


// for(var x = 1; x <= 100; x++) {
//     if(x % 5 == 0) {
//         console.log("Coding");
//     }
//     if(x % 10 == 0) {
//         console.log("Dojo");
//     }
// }


//@ What Do You Know?

// function param(input) {
//     console.log(input);
// }

// param("Whateva");


//@ Whoa, That Sucker’s Huge…

// function oddInts() {
//     var sum = 0

//     for(var x = -300000; x <= 300000; x++){
//         if(x % 2 == 1){
//             sum += x;
//         }
//     }
//     console.log(sum)
// }

// oddInts();


//@ Countdown by Fours

// var x = 2016

// while(x > 0){

//     console.log(x);
//     x--;

// }


//@ Flexible Countdown


// function flexCount(lowNum, highNum, multi) {

//     for(var x = highNum; x > lowNum; x-= multi){
//         console.log(x);
//     }
// }

// flexCount(2,9,3);



//@ The Final Countdown

// function finalCountDown(param1, param2, param3, param4){

//     while(param2 < param3){

//         if(param2 % param4 != 0){

//             if(param2 % param1 === 0){
//             console.log(param2)

//             }
//         }
//         param2++
//     }
// }

// finalCountDown(3,5,17,9);