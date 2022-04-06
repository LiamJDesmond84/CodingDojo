

//# Push Front

// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods

// var arr1 = [1, 2, 3, 4]

// function pushFront(array, value) {

//     for (var x = array.length - 1; x >= 0; x--) {
//         array[x + 1] = array[x];
//     }
//     array[0] = value;

// }

// pushFront(arr1, -1);

// console.log(arr1);

//# Pop Front

// var arr1 = [6, 2, 3, 4]

// function popFront(arr) {

//     var val = arr[0];

//     for(var x = 0; x < arr.length; x++) {

//         arr[x] = arr[x + 1];

//     }

//     arr.length = arr.length - 1;

//     return val
// }

// console.log(popFront(arr1));
// console.log(arr1);

//# Insert At

// var arr1 = [6, 2, 3, 4]

// function insertAt(arr, index, val) {

//     for(var x = arr.length - 1; x >= index; x--) {
//         arr[x + 1] = arr[x];
//     }
//     arr[x + 1] = val;

// }

// insertAt(arr1, 2, 7);

// console.log(arr1);


//# Remove At

// var arr1 = [6, 2, 3, 4]

// function removeAt(arr, index) {

//     //* Rounds index down
//     index = Math.floor(index);

//     //* If index out of array range
//     if (index < 0 || index >= arr.length)  {
//         return null;
//     }
//     var val = arr[index];

//     //* Start looping after index(that will be removed)
//     for (var x = index + 1; x < arr.length; x++) {
//         arr[x-1] = arr[x];
//     }
//     arr.pop();

//     return val;
// }
// removeAt(arr1, 2);

// console.log(arr1);

//# Swap Pairs

// var arr1 = [6, 2, 3, 4]

// function swapPairs(arr) {
//     for (var x = 0; x < arr.length - 1; x += 2) {

//         var temp = arr[x];

//         arr[x] = arr[x+1];
//         arr[x+1] = temp;
//     }
// }

// swapPairs(arr1);

// console.log(arr1);


//# Remove Duplicates

// var arr2 = [2, 2, 4, 4]


// function removeDupesV2(arr) {

//     //* Checking if array is empty or if there is more than one value
//     if (arr.length <= 1) {
//         return;
//     }
    
//     var lastUniqueVal = arr[0];

//     //* Setting index for where the next unique value will be added in array
//     var nextUniqueInd = 1;
//     for (var x = 1; x < arr.length; x++) {
//         if (arr[x] != lastUniqueVal) {
//             lastUniqueVal = arr[x];
//             arr[nextUniqueInd] = arr[x];
//             nextUniqueInd++;
//         }
//     }

//     //* Remove the duplicates
//     arr.length = nextUniqueInd; 
// }
// removeDupesV2(arr2);
// console.log(arr2);