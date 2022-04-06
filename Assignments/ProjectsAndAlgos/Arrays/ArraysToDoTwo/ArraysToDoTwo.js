

//# Reverse

var myArr = [1, 2, 4, 6, 7, 8];

function reverse(arr) {

    newArr = [];

    for(var x = arr.length-1; x >= 0; x--) {
        newArr.push(arr[x]);
    }
    return newArr;

}

var revArr = reverse(myArr);
console.log(revArr);

//# Rotate


// var myArr = [1, 2, 4, 6, 7, 8];

// function rotateArr(arr, shiftBy) {

// }