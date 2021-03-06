/* 
Bubble Sort:
- Largest values bubble up to the top.
- "Here swapping is carried on in two ways. In every iteration of the outer loop, the largest element is found and swapped with the last element in the loop. In the inner loop, we do pairwise swapping of two consecutive elements. In every inner loop, we go from the first element to the one less element we went in the previous loop." - https://www.geeksforgeeks.org/selection-sort-vs-bubble-sort/

Implementation:
- Loop, compare current & next values.
- If current > next, swap
- repeat

Optimization:
- If nothing was swapped in last iteration, break out of the loop.
- As this means the rest of the array is sorted.

Big O:
- If the list is already sorted (best case), O(n).
- As it requires only one iteration to realize that there are no swaps.
*/

import swap from "./swap";

function bubbleSort(array: (string | number)[]): (string | number)[] {
  // loop through array
  for (let i = 1; i < array.length; i++) {
    // started from i:1 cause i dont want to reach to lastEle > undefined (i = count iterations)
    let noSwaps = true;
    for (let j = 0; j < array.length - i; j++) {
      console.log("i: ", i, "j: ", j);
      // if current element > next element, then swap
      if (array[j] > array[j + 1]) {
        noSwaps = false;
        swap(array, j, j + 1);
      }
    }
    if (noSwaps) break;
  }
  return array;
}

// console.log(bubbleSort([4, 2, 3, 1])); // [1, 2, 3, 4]
console.log(bubbleSort([2, 1, 3, 4, 5, 6, 7])); // [1, 2, 3, 4]
