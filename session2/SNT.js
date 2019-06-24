let x = Number(prompt("Nhap x"));
let isSNT = true;
if (x<2){
    console.log("Khong phai so nguyen to")
}else{
for (i=2;i<x/2;i++){
    if (x%i===0){
        isSNT = false;
        break;
}
}
if(isSNT){
    console.log("SNT")
} else {
    console.log("khong la SNT")
}
}
