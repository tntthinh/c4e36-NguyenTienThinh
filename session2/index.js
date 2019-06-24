// branching / conditional statement / if else
// let age = 16;
// if (age < 10) {
//     console.log("baby");
// } 
// else if (age <18){
//     console.log("teenager");
// }
// else {
//     console.log("adult");
// }

// for(i=1;i<101;i++){
//     if(i%2===0) {
//         console.log(i)
//     }
// }
// console.log(`nghiem kep la $[x]`)

let a = Number(prompt("Enter a: "));
let b = Number(prompt("Enter b: "));
let c = Number(prompt("Enter c: "));
d = b**2-4*a*c;
if (d===0) { 
    console.log("Phuong trinh co nghiem kep ", -b/(2*a));
}
else if (d<0) {
    console.log("Phuong trinh vo nghiem");
}
else if (d>0) {
    console.log("phuong trinh co nghiem thu nhat la ",(-b+d**0.5)/(2*a));
    console.log("phuong trinh co nghiem thu nhat la ",(-b-d**0.5)/(2*a));
}