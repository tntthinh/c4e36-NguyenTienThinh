let a = document.getElementById("list");
let del= document.getElementById("dlt")
del.addEventListener("click",()=>{
        for (let i = 0; i <= a.options.length; i++) {
            if(a.options[i].selected){
            a.remove(i)}}
})