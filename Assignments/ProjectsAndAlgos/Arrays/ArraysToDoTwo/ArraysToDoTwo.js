

//# Reverse

// var myArr = [1, 2, 4, 6, 7, 8];

// function reverse(arr) {

//     newArr = [];

//     for(var x = arr.length-1; x >= 0; x--) {
//         newArr.push(arr[x]);
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
    
//     //* Handle rotations to the right
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

//     //* Handle rotations to the left
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


var myArr = [1, 2, 4, 6, 7, 8];


// Second version with only one for loop
function filterRange(arr, minVal, maxVal) {

    for (var x = 0; x < arr.length; x++) {

        // If value is NOT from min to max (inclusively)
        if (arr[x] < minVal || arr[x] > maxVal) {

            // Move everything that comes afterwards left one index
            for (var y = x+1; y < arr.length; y++) {
                arr[y-1] = arr[y];
            }

            arr.length--; // Decrease the length of the array by one
            x--; // To cancel the i++ operation effectively
        }
    }
}


filterRange(myArr, 0, 3);
console.log(myArr);

//# Concat


// var myArr = [1, 2, 4, 6, 7, 8];