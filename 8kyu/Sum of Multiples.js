//Your Job
// Find the sum of all multiples of n below m
//
// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples


function sumMul(n,m){
    let sum = 0;
    for (let i = 1; i * n < m; i++){
        sum = sum + i * n;
    }
    console.log(sum > 0 ? sum : "INVALID");
}

sumMul(2,9);
sumMul(13,123);
sumMul(4,-7);
sumMul(3,2015);

