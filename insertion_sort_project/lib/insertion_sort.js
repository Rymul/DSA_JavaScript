function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++){
        let current = arr[i]
        for (var j = i - 1; j >= 0 && current < arr[j]; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = current
    }
    return arr
}

insertionSort([2,1,4,3,6,5])


module.exports = {
    insertionSort
};