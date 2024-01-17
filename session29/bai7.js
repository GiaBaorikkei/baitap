function timCapSoTongBangN(mang, soNhapVao) {
    for (let i = 0; i < mang.length - 1; i++) {
        for (let j = i + 1; j < mang.length; j++) {
            if (mang[i] + mang[j] === soNhapVao) {
                return [mang[i], mang[j]];
            }
        }
    }
    return null; 
}

let soNhapVao = +prompt("Nhập vào một số nguyên:");
soNhapVao = parseInt(soNhapVao);

var mangSoNguyen = [2, 5, 8, 11, 3, 7, 9];

var ketQua = timCapSoTongBangN(mangSoNguyen, soNhapVao);

if (ketQua) {
    console.log(`Cặp số có tổng bằng ${soNhapVao}: ${ketQua[0]} và ${ketQua[1]}`);
} else {
    console.log("Không tìm thấy cặp số có tổng bằng số đã nhập vào.");
}
