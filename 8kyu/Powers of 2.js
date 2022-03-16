//Complete the function that takes a non-negative integer n as input, and returns a list of
// all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n){
    let a = []
    for (let i = 0; i <= n; i++){
        a[i] = Math.pow(2,i)
    }
    console.log(a)
}

powersOfTwo(0);
powersOfTwo(2);
powersOfTwo(1);
powersOfTwo(4);