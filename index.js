        // 1-MASALA
// let numbers = prompt(`Enter numbers`);

// if (Number(numbers)) {
//     function numArr(arg) {
//         let arr = Array.from(arg);
//         return arr.reverse();
//     }
    
//     console.log(numArr(numbers));
    
// } else {
//     console.log(`It must be only numbers`);
// }


        // 2-MASALA
// let num = prompt(`Enter number`);
// let arr = [];

// if (num > 0) {
//     function printNumbers(start) {
//         if (start <= num) {
//             arr.push(start)
//             printNumbers(start + 1);
//         }

//         return arr
//     }

//     console.log(printNumbers(1));
// } else {
//     function printNumbers(start) {
//         if (start >= num) {
//             arr.push(start)
//             printNumbers(start - 1);
//         }

//         return arr
//     }

//     console.log(printNumbers(1));
// }



        // 3-MASALA
// let arr = [1, 2, 3] 
// let arr2 = [4, 5] 

// function sumArr() {
//     let sum = 0;
//     for (const iterator of arr) {
//         sum += iterator;
//     }
//     console.log(`First array's sum ${sum}`);

//     sum = 0
//     arr2.forEach((item) => {
//         sum += item
//     })

//     console.log(`Second array's sum ${sum}`);
// }

// sumArr()


        // 4-MASALA
// let arr = [1, 4, 8, 12, 76, -3];

// function finderSmallest(arr) {
//     if (arr.length == 0) {
//         console.log(`Array is empty`);
//         return;
//     }

//     let small = arr[0]
//     for (const iterator of arr) {
//         if (iterator < small) {
//             small = iterator
//         }
//     }

//     console.log(Math.pow(small, 4).toString())
// }

// finderSmallest(arr);


        // 5-MASALA
let str = `Salom`;

function reverseStr() {
    let arr = Array.from(str)
    arr.reverse();
    return arr.join('');
}

console.log(reverseStr());