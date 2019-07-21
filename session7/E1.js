let themBtn = document.getElementById(`them`);
let list = document.getElementById(`list`)
let x = document.getElementById(`food`)
themBtn.addEventListener('click',()=>{
    console.log("them")
    let li = `<li>${x.value}</li>`
    list.innerHTML+=li
})

let xoaBtn = document.getElementById("xoa")
xoaBtn.addEventListener('click',() =>{
    console.log(x.value)
    for(i=0;i<list.children.length;i++){
        let eachfood = list.children[i]
        if(eachfood.textContent===x.value){
            eachfood.remove()
        }
    }
    // let menuFood = [...list.children]
    // let delete = menuFood.filter(f=>f.textContent===x)
    // delete.remove();
})

let xoa = document.getElementById("xoac")   
xoa.addEventListener('click',()=>{
    list.lastElementChild.remove();
})