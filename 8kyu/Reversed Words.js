//Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str){
    return str.split(' ').reverse(' ').join(' '); // reverse those words
}

console.log(reverseWords("hello world!"));
console.log(reverseWords("yoda doesn't speak like this"));