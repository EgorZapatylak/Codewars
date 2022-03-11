//Given an array of integers, return a new array with each value doubled.
//
// For example:
//
// [1, 2, 3] --> [2, 4, 6]

function maps(x){
    let a =[];
    for (let i = 0; i < x.length; i++) {
        a[i] = x[i] * 2;
    }
    console.log(a);
}

maps([1, 2, 3]);
maps([4, 1, 1, 1, 4]);
maps([2, 2, 2, 2, 2, 2]);