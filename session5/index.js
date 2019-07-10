// Reverse a String With Built-In Functions=====================
// function reverseString(a) {
//     return a.split(``).reverse().join(``);
// }
// console.log(reverseString(`hello`))

// Reverse a String With a Decrementing For Loop==========
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    if (str != newString){
        return false
    } else {return true}
}
console.log(reverseString('racecar'))

// function printMyname(name,date) {
//     console.log(name)
//     console.log(date)
// }
// printMyname('Nguyen Tien Thinh','26/7/1998')

// function PT1(a,b,c) {
//     return((c-b)/a)
// }
// console.log(PT1(10,5,4))

// function name(a) {
//     return a.split(``)
// }
// console.log(name(`master`))