function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let nonSwapped = true;
        for(let j = 0; j < arr.length - i; j++) {
            if(arr[j] > arr[j + 1]) {
                nonSwapped = false;
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        if(nonSwapped) break;
    }
    return arr;
}

module.exports = bubbleSort;