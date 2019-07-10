window.onload = ()=>{
    for(;;){
        let x = Math.floor(Math.random()*10 + 1);
        var y = Math.floor(Math.random()*10 + 1);
        const ops = ["+","-","*","/"];
        const Indexofop = Math.floor(Math.random()* ops.length);
        const op = ops[Indexofop];
        const result = calc(x,y,op);
        const errors = [-1,0,1];
        const indexOfError = Math.floor(Math.random()*errors.length);
        const error = errors[indexOfError];
        const displayResult = result+error;
        console.log(`${x} ${op} ${y} = ${displayResult}`);
        const Answer = prompt("T/F").toLowerCase();
        if (displayResult===result&&Answer===`t`){
            console.log(`Good job!`);
        } else if(displayResult===result&&Answer===`f`){
            console.log(`Gameover!`);
        break;
        } else if(displayResult!==result&&Answer===`t`){
            console.log(`Gameover!`);
        break;
        } else if(displayResult!==result&&Answer===`f`){
            console.log(`Good job!`);
        }
        }
}
