let mang = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let chan = [];
let le = [];

for (let i of mang) {
    if (i % 2 === 0) {
        chan.push(i);
    } else {
        le.push(i);
    }
}

console.log("Các phần tử của mảng chẵn là: ", chan);
console.log("Các phần tử của mảng lẻ là: ", le);