// A nested list is a list that appears as an element in another list.
// A list can store both integers and strings  
// example: whatever = [123,"a",456,"b"]

// 3. ============================================================
// const items = ["T-Shirt","Sweater"]
// console.log(items)
// for(;;){
// let a = prompt("Welcome to our shop, what do you want (C,R,U,D)? ").toLowerCase()
// if (a==="c"){
//     newitems = prompt("Enter new items: ")
//     items.push(newitems)
//     console.log(items)
// } else if (a ==="r") {
//     console.log(items)
// } else if (a ==="u") {
//     up = prompt("Update position: ")
//     ni = prompt("New Items:")
//     items[up-1] = ni
//     console.log(items)
// } else if (a ==="d"){
//     dp = prompt("Delete position: ")
//     items.splice(dp-1,1)
//     console.log(items)
// }
// }

// 4. ============================================================
// const flock = [5, 7, 300, 90, 24, 50, 75]
// console.log(`Hello, My name is Thinh and these are my sheep size: [${flock.join(', ')}]`)
// function sold(){
//  let max = flock[0]
// for(i=0;i<flock.length;i++){
//     if (max < flock[i]){
//         max = flock[i]
//     }
// } console.log(`Now my biggest sheep has size ${max} and let shear it`)
// flock[flock.indexOf(max)] = 8;
// console.log(`After shearing, here are my flock [${flock.join(', ')}]`)
// }
// sold()
// for(m=1;m<4;m++){
// for(i=0;i<flock.length;i++){
//     flock[i]=flock[i]+50
// }
// console.log(`Month ${m} :One month has passed, now here is my flock \n [${flock.join(', ')}]`);
// if (m===3){continue;}
// sold();
// }
// let total = flock[0]
// for (i=1;i<flock.length;i++) {
//     total = total + flock[i];
// }
// console.log(`My flock has size in total: ${total}`)
// console.log(`I would get ${total} * 2$ = ${total * 2}$`);
