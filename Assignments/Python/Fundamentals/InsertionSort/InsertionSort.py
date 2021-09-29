

arr = [3 ,9, 5, 4, 0]

def insertionSort(arr):
    print(arr)
    for x in range(1, len(arr)):
        z = arr[x]
        y = x-1
        while y >=0 and z < arr[y] :
            arr[y+1] = arr[y]
            y -= 1
        arr[y+1] = z


insertionSort(arr)
print(arr)