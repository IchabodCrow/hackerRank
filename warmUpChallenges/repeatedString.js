function repeatedString(s,n) {

    let arr = [...s];
    let tmp = arr.filter(item => item == 'a');

    let quantity = Math.floor(n / s.length);
    let difference = n / s.length;
    let find = Math.round((difference - quantity) * s.length);


    let array = [...s].slice(0,find);
    let count = array.filter(item => item == 'a');

    return (tmp.length * quantity) + count.length ;

}