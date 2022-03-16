//In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
//
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
//
// Your function will be tested with pre-made examples as well as random ones.
//
// If you can, try writing it in one line of code.

function findDifference(a, b) {
    console.log(Math.abs((a[0]*a[1]*a[2]) - (b[0]*b[1]*b[2])));
}

findDifference([3, 2, 5], [1, 4, 4])
findDifference([9, 7, 2], [5, 2, 2])
findDifference([11, 2, 5], [1, 10, 8])
findDifference([15, 20, 25], [10, 30, 25])
findDifference([4, 4, 7], [3, 9, 3])