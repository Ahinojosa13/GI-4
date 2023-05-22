// *VERY HARD: You are given coins of different denominations and a total total of money total. Write a function to compute the fewest number of coins
// that you need to make up that total. If that total of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give 
// you the answer or solve this problem for you. 
// Example 1:
// Input: coins = [1, 2, 5], total = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], total = 3
// Output: -1

// Note: You may assume that you have an infinite number of each kind of coin.


// Sudo Code: 
// 1. Look at total total money     
// 2. take TOAM & check if it is divisible by the largest coin         
// 3.check each coin      
// 4.keep track of coins
// 5.return what coins used 

// function cashier(coins, total){
//     let coinLength = coins.length;
//     let coinCount = 0;
//     let counter = total;

//     while(counter > 0){    
//         let stuck = true;                             
//         for(i = 0; i < coinLength; i++){
//             if(coins[i] > counter){
//             continue;       //Skip if Coin is Bigger than the current total of loop
//             }

//             stuck = false;  //If coin can be used
//             counter -= coins[i];
//             coinCount++;
//             break;          //After using coin it'll break out of loop
//     }
//         if(stuck){
//             return -1;     
//         }
//     }
//     return coinCount;
// }
// console.log(cashier([1,2,5],11));

function cashier(coins, total){                                             // Function takes in two Parameters 
    const dp = Array(total + 1).fill(Infinity);                             // Make array to track minimum # of coins required to completed total
    dp[0] = 0;                                                              
    for(let i = 1; i <= total; i++) {                                       // for loop for total
        for(let c = 0; c < coins.length; c++){                              // nested for loop for coins
            if(coins[c] <= i){
                dp[i] = Math.min(dp[i], dp[i- coins[c]] + 1);               // Calculates minimum # coins to complete the certain total of the loop 
                }
            }
        }
        return dp[total] === Infinity ? -1 : dp[total];                     // If the total can't be completed if the set coins it'll return -1
    }
console.log(cashier([1,2,5],11));