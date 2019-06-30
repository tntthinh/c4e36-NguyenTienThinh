const a = [1,2,3,5,7,8]
a.forEach((number,index) => {
    console.log(`${index+1}.${number}`)
})
console.log("---------------------------------")
b = prompt("Enter Number: ")

for(i=0;i<=a.length;i++){
    console.log (a[i])
    if(b === a[i]){
        console.log("in positon")
        console.log (a[i])
    }
}
