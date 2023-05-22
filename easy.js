// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
// Example 1:
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2


function averageArray(arr){
	let average = 0;
for(let i = 0; i < arr.length; i++){
average += (arr[i] / arr.length) ;
    }
    return average;
}

console.log(averageArray([1, 4, 7])); // Output: 4
console.log(averageArray([10,5])); // Output: 7.5
console.log(averageArray([1.5,3,2.5,1])); // Output: 2
console.log(averageArray([10,6])); //Output:8