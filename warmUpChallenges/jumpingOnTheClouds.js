function jumpingOnClouds(c) {
    function jump(c) {
        for (let i = 0; i <= c.length; i++){
            if (c[i] != c[i+1]){
                continue
            } if ( c[i] == c[i+1] && c[i] == c[i+2]) {
                c.splice(i+1,1);
            }
        }

        return c;

    }
    let newAr = jump(c).filter( (item) => item == 0)
    return newAr.length -1
}