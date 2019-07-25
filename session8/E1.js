const context = {
    users: null,
}
window.onload = async ()=> {
    await getUsers();
    await renderUsers();
    show();
    show2();
}
const getUsers = async ()=>{
    const res = await fetch('https://reqres.in/api/users');
    const users = await res.json()
    context.users = users.data
}
const renderUsers = async() => {
    await console.log(context.users)
}

const show = ()=>{
//     let demo = document.getElementById('demo')
//     context.users.forEach((user, index)=>{
//     let info = `<img  src = ${user.avatar} alt=""></img>`
//                 <b>Full name:</b> ${user.first_name} ${users.last_name}
//                 `<b>Email:</b> ${user.email}`
//             demo.innerHTML+=info
// }
    let demo = document.getElementById('demo')
    for(let i=0;i<context.users.length;i++){
    let img = `
    <div id = "user-${i}">
    <img src = ${context.users[i].avatar} alt=""></img>
    <p>Full name: ${context.users[i].first_name} ${context.users[i].last_name}</p>
    <p>Email: ${context.users[i].email}</p>
    </div>`
    demo.innerHTML+=img
                    }
                }

const show2 = ()=>{
    for (let i=0;i<context.users.length;i++){
        let a = document.getElementById(`user-${i}`)
        let userDetail = document.getElementById('user-detail')
        a.addEventListener('click',(event)=>{
            console.log(event)
            userDetail.innerHTML = ''
            userDetail.innerHTML+=demo.innerHTML
        })
    }

}

