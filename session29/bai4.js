function demSoLanXuatHien(chuoi, kyTu) {
    let soLanXuatHien = 0;

    for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i] === kyTu) {
            soLanXuatHien++;
        }
    }

    return soLanXuatHien;
}

var chuoiNhap = prompt("Nhập vào một chuỗi:");
var kyTuNhap = prompt("Nhập vào một ký tự:");

console.log("Chuỗi đã nhập:", chuoiNhap);
console.log("Ký tự đã nhập:", kyTuNhap);
console.log("Số lần xuất hiện của ký tự trong chuỗi:", demSoLanXuatHien(chuoiNhap, kyTuNhap));
