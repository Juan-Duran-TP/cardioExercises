// Set 1


// CHALLENGE 1: REVERSE A STRING

// Return a string in reverse

// ex. reverseString('hello') === 'olleh'



function reverseString(str) {
    return str.split("").reverse().join("");
}  
  // CHALLENGE 2: VALIDATE A PALINDROME
  
  // Return true if palindrome and false if not
  
  // ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
  
  
  
function isPalindrome(str) {
    return str.toLowerCase() === reverseString(str.toLowerCase());
}
  
  
  
  
  
  
  
  // CHALLENGE 3: REVERSE AN INTEGER
  
  // Return an integer in reverse
  
  // ex. reverseInt(521) === 125
  
  
  
function reverseInt(int) {
    return +reverseString(int.toString());
}
  
  
  
  
  
  
  
  // CHALLENGE 4: CAPITALIZE LETTERS
  
  // Return a string with the first letter of every word capitalized
  
  // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
  
function capitalizeLetters(str) {
    const strArray = str.toLowerCase().split(' ');
    for(let i = 0; i < strArray.length; i++)
        strArray[i] = strArray[i].substring(0, 1).toUpperCase() + strArray[i].substring(1);
    return strArray.join(' ');
}
  
  // CHALLENGE 5: MAX CHARACTER
  
  // Return the character that is most common in a string
  
  // ex. maxCharacter('javascript') == 'a'
  
function maxCharacter(str) {
    let str = str.split("").sort().join("");
    let maxCount = 1;
    let maxChar = str[0];
    let count = 1;
    let char = str[0];
    for (let i = 1; i < str.length; i++){
        if (char === str[i]){
            count++;
        }
        else {
            if (maxCount < count){
                maxCount = count;
                maxChar = char;
            }
            char = str[i];
            count = 1;
        }
        if (maxCount < count){
            maxCount = count;
            maxChar = char;
        }
    }
    return maxChar;
}
  
  
  
  
  
  
  
  // CHALLENGE 6: FIZZBUZZ
  
  // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
  
function fizzBuzz() {
    let message = "";
    for (let i = 1; i <= 100; i ++){
        if (i%3 === 0)
            message = message.concat("Fizz");
        if (i%5 === 0)
            message = message.concat("Buzz");
        if (i%3 != 0 && i%5 != 0)
            message = message.concat(i.toString());
        message = message.concat(" ");
    }
    console.log(message);
}
  
  
  
  
  
  // Call Function
  
//   const output = reverseString('hello');
//   console.log(output);
//   console.log(isPalindrome("horse"))
//   console.log(reverseInt(521))
//   fizzBuzz()
//   console.log(capitalizeLetters("howdy everyone"))
//console.log(maxCharacter("aadfffffdeee"))




///////////////////////////////////////////////////////////////////////////////////// Set 2

// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
    const arr = sen.split(" ").sort(function(a, b){
        // ASC  -> a.length - b.length
        // DESC -> b.length - a.length
        return b.length - a.length;
    });
    let multiple = false;
    let matchedSize = true;
    const returnedArr = [arr[0]];
    let i = 1;
    const size = arr[0].length;
    while (matchedSize){
        if (size === arr[i].length){
            returnedArr.push(arr[i]);
            multiple = true;
        }
        else {
            matchedSize = false;
        }
        i++;
    }
    if (multiple){
        return returnedArr;
    }
    else {
        return returnedArr[0];
    }
    // SOLUTION 1 - Return a single longest word
    // SOLUTION 2 - Return an array and include multiple words if they have the same length
    // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
}
  
  // CHALLENGE 2: ARRAY CHUNKING
  // Split an array into chunked arrays of a specific length
  // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
  // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
  
function chunkArray(arr, len) {
    const outArr = [];  
    let i  = 1;
    let temp = [];
    for (const item of arr){
        temp.push(item);
        if (i%len === 0 || outArr.length*2+i === arr.length){
            outArr.push(temp);
            temp = [];
            i = 1;
        }
        i++;
    }
    return outArr;
}
  
  // CHALLENGE 3: FLATTEN ARRAY
  // Take an array of arrays and flatten to a single array
  // ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
  
  function flattenArray(arrays) {
      const outArr = [];
      for (i of arrays){
          for (j of i){
              outArr.push(j);
          }
      }
      return outArr;
  }
  
  // CHALLENGE 4: ANAGRAM
  // Return true if anagram and false if not
  // ex. 'elbow' === 'below'
  // ex. 'Dormitory' === 'dirty room##'
  
function isAnagram(str1, str2) {
    if(str1.split("").sort().join("") === str2.split("").sort().join("")){
        return true;
    }
    else {
        return false;
    }
}
  
  // CHALLENGE 5: LETTER CHANGES
  // Change every letter of the string to the one that follows it and capitalize the vowels
  // Z should turn to A
  // ex. 'hello there' === 'Ifmmp UIfsf'
  // 65 - 90 A - Z // 97 - 122 a - z
  // 97, 101, 105, 111, 117
function letterChanges(str) {
    const vowels = ['a', 'e', 'u', 'i', 'o'];
    let newString = "";
    let letter = "";
    for (i of str.toLowerCase()){
        if (i.charCodeAt(0)  < 97 || i.charCodeAt(0) > 122){
            newString += i;
        }
        else {
            letter = String.fromCharCode((i.charCodeAt(0) - 97 + 1)%25 + 97)
            if (vowels.includes(letter)){
                newString += letter.toUpperCase();
            }
            else {
                newString += letter;
            }
        }    
    }


    return newString;
}
  
  // Call Function
  //const output = longestWord('Hello, my name is Brad');
  
  //console.log(output);
  //console.log(chunkArray([0,1,2],2));
  //const test = [[1, 2], [3, 4], [5, 6], [7]];
  //console.log(flattenArray(test) );
  //console.log(isAnagram("test","tset") );
  console.log(letterChanges("hello there!") );
