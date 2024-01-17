let mang = [3, 7, 5, 2, 7, 3, 8, 1, 5];

for (let i = mang.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [myArray[i], myArray[j]] = [myArray[j], myArray[i]];
}

console.log("Mảng sau khi sắp xếp ngẫu nhiên:", mang);
