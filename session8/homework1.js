const context = {
    users: null,
}

window.onload = async()=>{
    await getUsers();
    await showinf();
showsalary();
}

const getUsers = async ()=>{
    const inf = await fetch('http://dummy.restapiexample.com/api/v1/employees')
    const user = await inf.json()
    context.users = user
    console.log(user)
}

const showinf = ()=>{
    let list = document.getElementById('info')
    for(let i=0;i<context.users.length;i++){
        let info = `
        <ul>
        <li> employee_age: ${context.users[i].employee_age}</li>
        <li id = "user-${i}"> employee_name: ${context.users[i].employee_name}</li>
        <li> id: ${context.users[i].id}</li>
        </ul>
        `
        list.innerHTML+=info
    }
}
const showsalary = ()=>{
    let salary = document.getElementById('employee_salary')
    for (let i=0;i<context.users.length;i++){
        let a = document.getElementById(`user-${i}`)
        a.addEventListener('mouseover',()=>{
            let slr = `
            <b>employee's salary:</b> ${context.user[i].employee_salary}
            `
            salary.innerHTML+=slr
        })
}
}

