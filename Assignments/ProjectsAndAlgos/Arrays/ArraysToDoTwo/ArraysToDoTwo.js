

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


var myArr = [1, 2, 4, 6, 7, 8];

function rotateArr(arr, shiftBy) {

    var actualMovementsNeeded;


    if (shiftBy > 0) {
        actualMovementsNeeded = shiftBy % arr.length;

    } else {

        actualMovementsNeeded = Math.abs(shiftBy) % arr.length;
    }
    
    //* Handle rotations to the right
    if (shiftBy > 0) {

        //* Loop through all the rotations
        for (var x = 0; x < actualMovementsNeeded; x++) {

            //* Handle the single rotation
            var temp = arr[arr.length - 1];

            //* Loop through to moves items to the right by one index
            for (var y = arr.length - 2; y >= 0; y--) {
                arr[y+1] = arr[y];
            }

            //* Put temp value at the beginning of the array
            arr[0] = temp;
        }

    //* Handle rotations to the left
    } else {

        for (var x = 0; x < actualMovementsNeeded; x++) {
            var temp = arr[0];

            //* Loop moves items to the left one index
            for (var y = 1; y < arr.length; y++) {
                arr[y-1] = arr[y];
                console.log(arr);
            }

            //* Put temp value at end of array
            arr[arr.length - 1] = temp;
            console.log(arr);
        }
    }
}

rotateArr(myArr, 2);

console.log(myArr);