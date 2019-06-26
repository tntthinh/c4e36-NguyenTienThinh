// Study----------------------------------------------------
// 1.
// A JavaScript Boolean represents one of two values: true or false.
// 3 different expression that results a Boolean type: 3==7; temperature > 40; age < 18

// 2. A flowchart is a visual representation of a process in which each step in the process is represented by a different shape and contains a short description of the process step

// 3.
// Placing If Statement inside another IF Statement is called JavaScript Nested conditionals Statement
// Code use Nested conditionals: 
//     let t = Number(prompt("temp"))
//     if (t<20){
//         if (t<10){
//             console.log("Extreme cold")
//         } else {
//             console.log("Cold")
//         }
//     } else if (t<30){
//         console.log("Comfort")
//     } else {
//         if (t>39) {
//             console.log("Extreme Hot")
//         }else{
//         console.log("Hot")
//         }
//     }

// Turtle exercise------------------------------------------
// 1.
// clear();
// color("red");
// for(i=0;i<4;i++){
// lt(30);
// fd(90);
// rt(60);
// fd(90);
// rt(120);
// fd(90);
// rt(60);
// fd(90);
// lt(120);
// }

// 2.
// clear();
// lt(30)
// color("red")
// for(i=0;i<6;i++){
// fd(100)
// rt(60)
// }
// rt(30)
// for(i=0;i<4;i++){
// fd(100)
// rt(90)
// }
// lt(18)
// color("blue")
// for(i=0;i<4;i++){
// fd(100)
// rt(72)
// }
// rt(60)
// fd(100)
// lt(120)
// fd(100)

// Serious exercises---------------------------------------------

// 1. 

// let h = Number(prompt("Enter height (cm): "))
// let m = Number(prompt("Enter weight (kg): "))
// let bmi = m/((h/100)**2)
// console.log("Your BMI:", bmi)
// if(bmi<16){
//     console.log("You are serverely under weight")
// } else if(bmi<=18.5){
//     console.log("You are underweight")
// } else if(bmi<=25){
//     console.log("You are normal")
// } else if(bmi<=30){
//     console.log("You are overweight")
// } else{
//     console.log("You are obese")
// }

// 2.

// let n = Number(prompt("Enter n: "));
// let a = 1
//  for(i=1;i<=n;i++){
//       a=a*i;
//  }
//  console. log(`x! = ${a}`);
