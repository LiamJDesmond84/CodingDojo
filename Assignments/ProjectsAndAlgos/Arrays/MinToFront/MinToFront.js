var myArr = [4,2,1,3,5];

function minToFront(arr) {

    var min = arr[0];
    var idx = 0;
    for (var i = 1; i < arr.length; i++){

        if (arr[i] < min) {
            min = arr[i];
            idx = i;
        }
    }
    for (var x = idx; x > 0; x--){
        
        var temp = arr[x];
        arr[x] = arr[x-1];
        arr[x-1] = temp;
    }
    return arr;


    // var minIndex = arr[0];
    // var currIndex = 0;

    // for (var i = 1; i < arr.length; i++){


    // if (minIndex > arr[i]){
    //         minIndex = arr[i];
    //         currIndex = i;
    //     }
    // }
    // for (var i=currIndex; i<arr.length-1; i++){
    //     arr[i]=arr[i+1];
    // }
    // arr.length-=1;
    // for (var i=arr.length; i>0; i--){
    //     arr[i]=arr[i-1];
    // }
    // arr[0]=minIndex;
    // return arr;
}

minToFront(myArr);
console.log(myArr);