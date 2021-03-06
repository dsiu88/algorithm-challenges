// 1313. Decompress Run-Length Encoded List
// We are given a list nums of integers representing a list compressed with run-length encoding.
//
// Consider each adjacent pair of elements [a, b] = [nums[2*i], nums[2*i+1]] (with i >= 0).
// For each such pair, there are a elements with value b in the decompressed list.
//
// Return the decompressed list.

// Example 1:
//
// Input: nums = [1,2,3,4]
// Output: [2,4,4,4]
// Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation [2] + [4,4,4] is [2,4,4,4].
//
//
// Constraints:
//
// 2 <= nums.length <= 100
// nums.length % 2 == 0
// 1 <= nums[i] <= 100

// Slice into tuples?
// Array of arrs. iterate through

// let decompress = arr => {
//   let arrPairs = [];
//   for (let i = 0; i < arr.length; i+= 2){
//       let sliceIt = arr.slice(i, i + 2);
//         arrPairs.push(sliceIt);
//   };
//
// };

// make a map assign entry value as key, # of entries as value? NOPE
// var decompressRLElist = function(nums) {
//     let decompressList = [];
//     const numsMap = New Map)()
//     for(i = 0; i < nums.length; i + 2) {
//         let freq = nums[i];
//         let val = nums[i + 1];
//         numsMap.set(val, freq);
//     };
// };

// Run Time: 84 ms
// Mem Usage: 37.2 mb
var decompressRLElist = function(nums) {

    let decompressed = [];
    for (i = 0; i < nums.length; i += 2) {
        let freq = nums[i];
        let val = nums[i + 1];

        while(freq > 0){
          decompressed.push(val)
          freq--
        }
    };
  return decompressed;
};

decompressRLElist([1,2,3,4]);

// NOPE
// let decompress = arr => {
//   let arrPairs = [];
//   let decompressedArr = [];
//
//   for (let i = 0; i < arr.length; i+= 2) {
//       let sliceIt = arr.slice(i, i + 2);
//         arrPairs.push(sliceIt);
//   };
//
//   for (let i = 0; i < arrPairs.length; i++) {
//     let count = 0;
//     while(count <= arrPairs[i][i]) {
//       decompressedArr.push(arrPairs[i][i + 2])
//       count += 1;
//     };
//   };
//
//   console.log(decompressedArr)
//
// };

// function to return arr size of 2
// let separateIt = (arr, size) => {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i += size) {
//         var sliceIt = arr.slice(i, i + size);
//         newArr.push(sliceIt);
//     }
//     return newArr;
// };
