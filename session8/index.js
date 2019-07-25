// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 2000);

// console.log(3)
const context = {
    users: null,
}
window.onload = async ()=> {
    await getUsers();
    renderUsers();
}
const getUsers = async ()=>{
    const res = await fetch('https://reqres.in/api/users');
    const users = await res.json()
    context.users = users.data
}
const renderUsers = () => {
    console.log(context.users)
}