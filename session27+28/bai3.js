let mang = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let mangMoi = [];

for (let i of mang) {
    if (i % 2 === 0) {
        mangMoi.push(i);
    }
}

console.log("Các phần tử của mảng mới là: ", mangMoi);
