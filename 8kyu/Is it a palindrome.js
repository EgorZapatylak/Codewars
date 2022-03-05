//Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    x = x.toLowerCase();
    return x === x.split('').reverse().join(''); // your code here
}

console.log(isPalindrome('Hello'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome('Bob'));
console.log(isPalindrome('a'));
console.log(isPalindrome('AbBa'));