// Review-------------------------------------------------------------------
// -------------------------
// Why should we use functions at all?
// We should you function because it is reusablity and easy to fix in big data
// -------------------------
// How to define/declare a function?
// function funName() {
// 	//code
// } 
// OR 
// const funName = ()=>{
//     //code
// }
// -------------------------
// How to call/use a function?
// funName
// -------------------------
// Do we have to use return in every function?
// Because return help us to use result outside function

// What are function arguments/parameters, why and how we use it?
// const funName = (parameters1, ... ,parametersN)=>{
//     //code
// }
// -------------------------
// How to use function from a different file other than our currently working file?
// window.onload = ()=>{
// }
// -------------------------
// Turtle Exercises-------------------------------------------------------------------
// // 1.-------------------------
// const hello = ()=>{
//     for (i=0;i<3;i++){
//         console.log(`Hello World`)
//     }
// }
// // 2.-------------------------
// const sum = (x,y)=>{
//     console.log(x+y)
// }
// // 3.-------------------------
// const draw_square = (length,color)=>{
//     color(color)
//     for(i=0;i<4;i++){
//     fd(length)
//     rt(90)
//     }
// }
// // 4.-------------------------
// const draw_square = (length,colorline)=>{
//     color(colorline)
//     for(i=0;i<4;i++){
//     fd(length)
//     rt(90)
//     }
// }
// for (let i = 0; i  < 30; i ++){
//         draw_square(i*5, "red")
//         lt(17)
// 		penup()
//            fd(i*2)
//            pendown()
// }
// // 5.-------------------------
// const draw_star=(length)=> {
//     rt(90)
//     for (i = 0; i < 5; i++) {
//         fd(length)
//         rt(144)
//     }
// }
// Serious Exerciese-------------------------------------------------------------------
// 6.-------------------------
// const remove_dollar_sign = (s)=> {
//     let newstring = s.replace(/[$]/g, "")
//     return newstring
// }
// // 7.-------------------------
// string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
// if (string_with_no_dollars == "80% percent of life is to show up"){
//    console.log("Your function is correct")}
// else{
//    console.log("Oops, there's a bug")}
// // 10.-------------------------
// function is_inside(point, rectangle) {
//     var inside = true;
//     if (point[0] >= rectangle[0] && point[0] <= rectangle[0] + rectangle[2] && point[1] >= rectangle[1] && point[1] <= rectangle[1] + rectangle[3]) {
//         inside = true;
//     } else {
//         inside = false;
//     }
//     return inside;
// }
// // 11.-------------------------
// let pTest = [200, 120];
// let recTest = [140, 60, 100, 200];
// if (is_inside(pTest, recTest)) {
//     console.log("Point is inside the retangle");
// } else {
//     console.log("Point is outside the retangle");
// }