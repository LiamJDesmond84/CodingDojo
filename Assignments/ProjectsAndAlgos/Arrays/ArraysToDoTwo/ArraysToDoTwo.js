

//# Reverse

// var myArr = [1, 2, 4, 6, 7, 8];

// function reverse(arr) {

//     newArr = [];

//     index = 0;

//     for(var x = arr.length-1; x >= 0; x--) {

//         newArr[index] = arr[x];

//         index++;

//     }
//     return newArr;

// }

// var revArr = reverse(myArr);
// console.log(revArr);

//# Rotate


// var myArr = [1, 2, 4, 6, 7, 8];

// function rotateArr(arr, shiftBy) {

//     var actualMovementsNeeded;


//     if (shiftBy > 0) {
//         actualMovementsNeeded = shiftBy % arr.length;

//     } else {

//         actualMovementsNeeded = Math.abs(shiftBy) % arr.length;
//     }
    
//     //* Right rotations
//     if (shiftBy > 0) {

//         //* Loop through all the rotations
//         for (var x = 0; x < actualMovementsNeeded; x++) {

//             //* Temp value for current last index
//             var temp = arr[arr.length - 1];

//             //* Loop through to moves items to the right by one index
//             for (var y = arr.length - 2; y >= 0; y--) {
//                 arr[y+1] = arr[y];
//             }

//             //* Put temp value at the beginning of the array
//             arr[0] = temp;
//         }

//     //* Left rotations
//     } else {

//         for (var x = 0; x < actualMovementsNeeded; x++) {

//             //* Temp value for current first index
//             var temp = arr[0];

//             //* Loop moves items to the left one index
//             for (var y = 1; y < arr.length; y++) {
//                 arr[y-1] = arr[y];
//                 console.log(arr);
//             }

//             //* Put temp value at end of array
//             arr[arr.length - 1] = temp;
//             console.log(arr);
//         }
//     }
// }

// rotateArr(myArr, 2);

// console.log(myArr);


//# Filter Range

// var myArr = [1, 2, 4, 6, 7, 8];

// function filter(arr, min, max) {

//     //* Index for the value between min & max for each iteration
//     var ind = 0;

//     for (var x = 0; x < arr.length; x++) {
//         if (arr[x] >= min && arr[x] <= max) {

//             arr[ind] = arr[x];

//             //* Increment index for next round
//             ind++;
//         }
//     }

//     //* Remove excess values
//     arr.length = ind; 
// }


// filter(myArr, 4, 8);
// console.log(myArr);

//# Concat

// var myArr = [1, 2, 4, 5, 6, 7, 8];

// var myArr2 = [9, 10, 11];

// function concat(arr, arr2) {

//     var newArr = [];

//     var index = 0;

//     for(var x = 0; x < arr.length; x++) {

//         newArr[index] = arr[x];
//         index++;

//     }

//     for(var y = 0; y < arr2.length; y++) {
//         newArr[index] = arr2[y];
//         index++;
//     }
//     return newArr;

// }

// var result = concat(myArr, myArr2);

// console.log(result);