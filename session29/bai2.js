function timPhanTuCoDoDaiLonNhat(mang) {
    let phanTuMax = mang[0];

    for (let i = 1; i < mang.length; i++) {
        if (mang[i].length > phanTuMax.length) {
            phanTuMax = mang[i];
        }
    }
    return phanTuMax;
}

var mangNgauNhien = ["Bảo", "Hùng", "Hoàng", "anh", "em"];

console.log("Mảng đã khai báo:", mangNgauNhien);
console.log("Phần tử có độ dài lớn nhất trong mảng:", timPhanTuCoDoDaiLonNhat(mangNgauNhien));
