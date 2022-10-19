function countingSort(arr, max) {

    let res = []
    let counter = new Array(max + 1).fill(0)

    for (let i = 0; i < arr.length; i++) {
        counter[arr[i]]++;
    }

    for (let j = 0; j < counter.length; j++){
        while(counter[j] > 0){
            res.push(j);
            counter[j]--;
        }
    }
    return res;
}


module.exports = {
    countingSort
};