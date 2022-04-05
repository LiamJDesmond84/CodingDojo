

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

var arr1 = [1, 2, 3, 4]

function popFront(arr) {

    var temp = 0

    for(var x = 0; x < arr.length; x++) {



        arr[x] = arr[x + 1];
    }
    temp = arr[0];
    arr.length = arr.length - 1;

    return temp
}



console.log(popFront(arr1));
console.log(arr1);

//# 




//# 




//# 




//# 
