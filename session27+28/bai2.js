let a = +prompt("Nhập số nguyên a: ");
let b = +prompt("Nhập số nguyên b: ");

let mang = [];

if (a < b) {
    for (let i = a; i <= b; i++) {
        mang.push(i);
    }
}
console.log("Các phần tử có trong mảng là: ", mang);