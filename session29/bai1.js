function kiemTraChanLe(n) {
    if (n % 2 === 0) {
        return "Số " + n + " là số chẵn";
    } else {
        return "Số " + n + " là số lẻ";
    }
}
let n1 = +prompt("Nhập số ngẫu nhiên 1:")
let n2 = +prompt("Nhập số ngẫu nhiên 2:")
let n3 = +prompt("Nhập số ngẫu nhiên 3:")


console.log(kiemTraChanLe(n1));
console.log(kiemTraChanLe(n2));
console.log(kiemTraChanLe(n3));
