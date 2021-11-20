var arr = [2,5,6,9,4,3]

function hoarePartition(arr, start, end) {
    const pivotVal = arr[Math.floor(Math.random() * (end - start + 1) + start)];
    while (start <= end) {
        while (arr[start] < pivotVal) {
            start++;
        }
        while (arr[end] > pivotVal) {
            end--;
        }
        if (start <= end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    return start;
} 

function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        const index = hoarePartition(arr, start, end);
        quickSort(arr, start, index - 1);
        quickSort(arr, index, end);
    }
    return arr;
}

var x = quickSort(arr)

console.log(x)