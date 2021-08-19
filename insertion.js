function insertionSort(arr) {
    if(arr.length <= 1) return arr;
    let i = 1;
    let j;
    while(i < arr.length) {
        j = i;
        while (j > 0 && arr[j] < arr[j - 1]){
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;
        }
        i++;
    }
    return arr;
}

module.exports = insertionSort;