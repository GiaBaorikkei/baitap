function locCacPhanTu(mangChuoi, chuoiNhap) {
    let ketQua = [];

    let soKyTu = 0;

    for (let i = 0; i < chuoiNhap.length; i++) {
        if (chuoiNhap[i] !== ' ') {
            ketQua.push(mangChuoi[i]);
            soKyTu++;
        }
    }

    return soKyTu;
}

var mangChuoi = ["bao", "hung", "hoang", "anh", "em"];

var chuoiNhap = prompt("Nhập vào một chuỗi:");

console.log("Mảng chứa các chuỗi:", mangChuoi);
console.log("Chuỗi đã nhập:", chuoiNhap);
console.log("Các phần tử trong mảng chứa chuỗi đã nhập:", locCacPhanTu(mangChuoi, chuoiNhap));
