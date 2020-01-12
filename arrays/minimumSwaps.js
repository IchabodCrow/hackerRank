function sort(arr){
    let tmp = 0;
    let count = 0;
    let sec = 0;

    for (let i = 1; sec < arr.length - 1; i++){

        if (arr[sec] != sec+1){
            swap(sec, arr, tmp);
            count++;
        }
        else {
            sec++;
            continue
        }
    }
    return count;
}

function swap(sec,arr,tmp){
    let cut = arr[sec];
    tmp = arr[sec];
    arr[sec] = arr[cut-1];
    arr[cut-1] = tmp;
}