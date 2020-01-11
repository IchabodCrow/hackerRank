
    let arr = s.split('');

    let newArr = arr.map( (item) => {
        if (item == 'U'){
            item = 1;
        } else {
            item = -1;
        }
        return item;
    } );

    function countArr() {
        let count = 0;
        let rift = 0;
        for (let i = 0; i <= newArr.length; i++) {
            if (count == 0 && newArr[i] < 0) {
                rift += 1;
            }
            count += newArr[i];

        }
        return rift;
    };
    