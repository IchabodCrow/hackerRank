function countSwaps(a,n) {
    let count = 0;
    let tmp = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (a[j] > a[j + 1]) {
                swap(j,tmp,a);
                count+=1;
            }
        }
    }
    console.log(`Array is sorted in ${count} swaps.`)
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length-1]}`);

}

function swap(j,tmp,a){
    tmp = a[j];
    a[j] = a[j+1];
    a[j+1] = tmp;
}