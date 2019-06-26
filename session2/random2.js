
let a = 0
let b = 100
for(;;){
    let c = Math.floor((a+b)/2)
    console.log(c)
    console.log("If our number is larger than your, press  `l` ")
    console.log("If our number is smaller than your, press  `s` ")
    console.log("If your number is correct, press  `c` ")
    let x = prompt("Answer").toLowerCase()
    if (x === "s"){
        a=c
    }
    else if (x === "l"){
        b=c
    }
    else if (x === "c"){
        console.log("I know it")
        break;
    }
}