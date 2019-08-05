
let playBtn = document.getElementById(`play`)
playBtn.addEventListener('click',()=>{
    let a = document.getElementById(`vi`)
    let vid = document.getElementById(`container`)
    let add = 
    `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/515807238&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`
    vid.innerHTML+=add
    a.innerHTML+=add;
})

let a = ()=> {
    var cmb = document.getElementById("genres");
    document.getElementById("US/UK").value = cmb.value;
    document.getElementById("Vpop").value = cmb.options[cmb.selectedIndex].text;
    
}