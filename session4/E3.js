const company = [
    {
        name: "Dung",
        soluong: 50000,
        hour: 5,
        days: 15,
    },{
        name: "Duc",
        soluong: 80000,
        hour: 7,
        days: 25,
    },{
        name: "Phong",
        soluong: 60000,
        hour: 2,
        days: 30,
    }
] //JSON
// console.log(company)
let totalsalary = 0
company.forEach((person,index)=>{
    const salary = person.soluong * person.hour * person.days
    console.log(`Luong cua ${person.name} la ${salary}`)
    totalsalary += salary;
})
console.log(`Tong luong cua 3 nguoi la ${totalsalary}`)