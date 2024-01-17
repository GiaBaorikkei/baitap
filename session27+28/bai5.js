let mang = [3, 7, 5, 2, 7, 3, 8, 1, 5];
for(let i = 0;i < mang.length; i++){
        for(let j = i+1; j  < mang.length; j++){
            if(mang[i] === mang[j]){
                console.log(mang[i]);
                break;
            }
        }
    }
