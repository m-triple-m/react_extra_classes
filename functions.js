const fact = (num) => {

    var f = 1;


    for (let i = 2; i <= num; i++) {
        f *= i;
    }

    return f;

}

let res = fact(6)
console.log(res);
// console.log(f);