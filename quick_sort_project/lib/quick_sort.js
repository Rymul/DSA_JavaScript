function quickSort(array) {
    if (array.length <= 1) return array;

    let pivot = array.shift();
    let left = array.filter(el => el < pivot);
    let right = array.filter(el => el >= pivot);

    let sortedLeft = quickSort(left);
    let sortedRight = quickSort(right);

    return sortedLeft.concat([pivot]).concat(sortedRight);
}


module.exports = {
    quickSort
};