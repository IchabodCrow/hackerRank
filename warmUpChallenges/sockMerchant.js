function sockMerchant(n, ar) {
    let socks = {
    }
    let two = 0;
    for (let i = 0; i < ar.length; i++ ){
        let nameOfSock = ar[i];
        socks[nameOfSock] = socks[nameOfSock] ? socks[nameOfSock] + 1 : 1;
    }
    for (let key in socks) {
        socks[key] = Math.floor(socks[key] / 2);
        two += socks[key];
    }

    return two;
}