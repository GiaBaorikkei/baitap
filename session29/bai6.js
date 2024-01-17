var chuoiBatKy = "thái nguyễn gia bảo";

function vietHoaChuCaiDau(chuoi) {
  return chuoi.replace(/\b\w/g, function(match) {
    return match.toUpperCase();
  });
}

var ketQua = vietHoaChuCaiDau(chuoiBatKy);

console.log("Chuỗi gốc: " + chuoiBatKy);
console.log("Chuỗi sau khi viết hoa chữ cái đầu: " + ketQua);
