let arr = [1, 3, 4, 2, 7, 9, 10, 6, 8];
let arr2 = [1, 3, 9, 11, 5, 7, 13];

let result = [];

arr.forEach((item, index) => {
    arr2.forEach(n => {
        if(n === item) {
            return result.push(n)
        }
    })
})
console.log(result);
