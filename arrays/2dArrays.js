function desert(arr) {
    let arrayHead = [];
    let arrayBody = [];
    let arrayTail = [];
    let finish = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i < 4 && j < 4) {
                let head = +arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
                arrayHead.push(head);
            }
            if (i < 4 && j < 4) {
                let body = arr[i + 1][j + 1];
                arrayBody.push(body);
            }
            if (i > 1 && j < 4) {
                let tail = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
                arrayTail.push(tail);
            }
        }

    }
    for (let k = 0; k < 16; k++) {
        finish.push(arrayHead[k] + arrayBody[k] + arrayTail[k]);
    }
    return finish;
}