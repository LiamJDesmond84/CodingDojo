

arr = [6, 3, 5, 2, 4, 0]

def selectionSort(arr):
    for i in range(len(arr)):
            min = i
            for j in range(i+1, len(arr)):
                if arr[j] < arr[min]:
                    min = j
            arr[i], arr[min] = arr[min], arr[i]
selectionSort(arr)
print(arr)