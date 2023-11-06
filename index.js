// Reverse a String:
// Write a function that takes a string as input and returns the string reversed.
const reverseString = ((argument)=>{
    return argument.split('').reverse().join('')
})
console.log(reverseString("Ahmed"))

// Palindrome Check:
// Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).

const palindromeCheck = ((argument)=>{
    let reverseValue =  argument.split('').reverse().join('')  
    return argument === reverseValue 
   })
   console.log(palindromeCheck('civic'))

//  If don't know What is Fibonacci Visit this image to Understand 👇  
// https://i.pinimg.com/originals/98/82/d5/9882d569f7e0b5665fe3b2edd5069b06.png
const fibonacci = ((argument)=>{
const sequence = [0,1 , 2]
for (let index = 3; index < argument; index++) {
    sequence.push(sequence[index-1] +  sequence[index-2] )
}
return  sequence
})
console.log(fibonacci(25))

// Find the Largest Number

const findLargestNumber = ((argument)=>{
    return argument.find((a, b)=>   a > argument[b +1 ])
 })
 console.log(findLargestNumber([32,45,63,223,3]))


//Factorial Calculation:
// Write a function to calculate the factorial of a given number
const factorial = ((argument)=>  argument === 0 ? 1 :  argument *  factorial(argument-1))
console.log(factorial(4))

// Write a function that counts the number of words in a string.

function countWords(str) {
    const words = str.split(/\s+/); // Split the string by spaces
    return words.length;
}
console.log(countWords("Ahmed Raza"))


// Find the Largest Number Inside the Array  
const numbers = [1, 2, 3, 4, 5];
const highestValue = Math.max(...numbers);

console.log(highestValue);


// find the largest number in an array without using Math.max() 

const findLargestNumberPure  = ((argument)=>{
    console.log(argument.length)

})

findLargestNumberPure([32,45,63,223,3])


// Two Sum Problem:

function twoSum(nums, target) {
    const numMap = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in numMap) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i;
    }
}




// isAnagram Checker

function isAnagramSortOriol(a, b) {
    let str1 = a.toLowerCase().split('').sort().join('');
    let str2 = b.toLowerCase().split('').sort().join('');
    return str1 === str2;
}

console.log(isAnagramSortOriol('Ahmed', 'hamed')); // Outputs true


// The function should return an array containing the indices of these two numbers.

function sum (array , target ){
    let obj = {}
    for(var i = 0 ; i<array.length ;  i++ ){
    let complies = target - array[i]
    if(complies in  obj ){
    return [obj[complies] , i]
    }
    obj[array[i]] = i 
    }
    }
    console.log(sum([2,3,4], 5))

    // Write a function that takes an object and returns a new object with the same keys and values, but with all values multiplied by 2.

    let obj = {
        "name": 12,
        "Age": 24,
        "sum": 223
      };
      
      function doubleObjectValues(obj) {
        let newObj = {}
        for(var key in obj){
            newObj[key] = obj[key] * 2
        }
        return newObj 
      }
      console.log(doubleObjectValues(obj))

      let obj2 ={
        age : 14, 
        cls : 12,
        weight : 70, 
    }
    
    function getObjectProperties(obj) {
        let newArray = []
        for(var key in obj){
            newArray.push(obj[key]) 
        }
        return newArray
    }
    console.log(getObjectProperties(obj2))

    // Object Comparison
    // Write a function that compares two objects to determine if they have the same properties and values.    
    function objectsAreEqual (obj1,obj2){
        if(typeof obj1 !== 'object' || typeof obj2 !== 'object' ){
            return obj1 === obj2
        }
     const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    if(keys1.length !==  keys2.length){
        return false 
    }
    
    for (var key in obj1 )
    if(!objectsAreEqual(obj1[key]) , obj2[key]){
        return false
    }
    return true
    }
    
    
    
    const obj3 = { a: 1, b: { c: 2 } };
    const obj4 = { a: 1, b: { c: 3 } };
    console.log(objectsAreEqual(obj3, obj4))

    // Finding Elements: To find elements, you can use the indexOf() method to find the index of a specific value or the find() method to find the first element that matches a condition.

    let number = [1,2,3,5,6]
let find = number.find((value)=>  value*2  === 6 )
    console.log(number.indexOf(5))
    
    
    const myArray = [5, 10, 15, 20, 25];
    let filteredArray = myArray.filter((value)=> value*2)
    console.log(filteredArray)


    // Sort the Array with out Using .Sort()


    

    // Combining Arrays
    const array1 = [1, 2];
const array2 = [3, 4]
let mixedArray  = [...array1 ,...array2 ]
console.log(mixedArray)

    const originalObject = {
        a: 1,
        b: {
        c: 2,
        d: 3,
        },
    };
    
    let newArraySecond =  [...originalObject] 
    console.log(newArraySecond)