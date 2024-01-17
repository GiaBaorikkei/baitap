function demSoKyTu(chuoi) {
    let soKyTu = 0;

    for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i] !== ' ') {
            soKyTu++;
        }
    }

    return soKyTu;
}

var chuoiBatKy = "Thái Nguyễn Gia Bảo";

console.log("Chuỗi đã khai báo:", chuoiBatKy);
console.log("Số ký tự trong chuỗi:", demSoKyTu(chuoiBatKy));
