var arrayUse = [-33, 900, 5, 22, 20, -5, 17, 55, 52, 5];

//=====================================================================================================================
//SELECTION SORT
//=====================================================================================================================

// function selectionSort(numbers) {
//     var length = numbers.length;

//     for (var index = 0; index < length; index++) {
//         var smallestNumIndex = index;
//         for (var nextNumIndex = index + 1; nextNumIndex < length; nextNumIndex++) {
//             console.log('comparing ' + numbers[smallestNumIndex] + ' and ' + numbers[nextNumIndex])
//             if (numbers[nextNumIndex] < numbers[smallestNumIndex]) {
//                 smallestNumIndex = nextNumIndex;
//             }
//         }

//         if (smallestNumIndex != index) {
//             var currentNumber = numbers[index];
//             console.log('swapping the number ' + numbers[smallestNumIndex] + ' for the number ' + numbers[index]);

//             numbers[index] = numbers[smallestNumIndex];
//             numbers[smallestNumIndex] = currentNumber;
//         }

//         console.log('numbers currently looks like: ' + numbers);
//     }

//     return numbers;
// }

// selectionSort(arrayUse);


//NOTES

//Time Complexity: Quadratic O(n^2)
//Space Complexity: in-place
//Stability: Unstable
//Internal/External: Internal
//Recursive?: No
//Comparison?: Yes


//FROM BASECS WITH EXPLANATION

// function selectionSort(numbers) {
//     var length = numbers.length;

//     // Traverse through all the elements in the number array.
//     for (var index = 0; index < length; index++) {
//         // Set the current item to be the smallest/minimum.
//         var smallestNumIndex = index;
//         // Find the minimum element in remaining unsorted array.
//         for (var nextNumIndex = index + 1; nextNumIndex < length; nextNumIndex++) {
//             console.log('comparing ' + numbers[smallestNumIndex] + ' and ' + numbers[nextNumIndex])
//             // If the next number is smaller than the current number, reassign our reference to the the index of the smallest number
//             if (numbers[nextNumIndex] < numbers[smallestNumIndex]) {
//                 smallestNumIndex = nextNumIndex;
//             }
//         }

//         if (smallestNumIndex != index) {
//             var currentNumber = numbers[index];
//             // If the number we're looking at is the smallest in size, swap it with the first element.
//             console.log('swapping the number ' + numbers[smallestNumIndex] + ' for the number ' + numbers[index]);

//             numbers[index] = numbers[smallestNumIndex];
//             numbers[smallestNumIndex] = currentNumber;
//         }

//         console.log('numbers currently looks like: ' + numbers);
//     }

//     return numbers;
// }



//=====================================================================================================================
//BUBBLESORT
//=====================================================================================================================

// function bubbleSort(array) {
//     var isSorted = false;

//     while (!isSorted) {
//         isSorted = true;
//         for (var index = 1; index < array.length; index++) {

//             if (array[index - 1] > array[index]) {
//                 isSorted = false;

//                 var temporaryReference = array[index - 1];
//                 array[index - 1] = array[index];
//                 array[index] = temporaryReference;
//             }
//         }
//     }
//     return array;
// }

// console.log(bubbleSort(arrayUse));

//NOTES

//Time Complexity: Quadratic O(n^2)
//Space Complexity: in-place
//Stability: Stable
//Internal/External: Internal
//Recursive?: No
//Comparison?: Yes


//WITH EXPLANATION FROM BASECS

// function bubbleSort(array) {
//     var isSorted = false;

//     while (!isSorted) {
//         isSorted = true;
//         // Iterate until we get to the last element
//         for (var index = 1; index < array.length; index++) {
//             console.log("comparing " + array[index] + " and " + array[index - 1]);

//             // If the element to the left is bigger, then swap the element
//             // that we're currently looking at with its left neighbor.
//             if (array[index - 1] > array[index]) {
//                 isSorted = false;
//                 console.log("SWAPPING " + array[index] + " and " + array[index - 1]);

//                 // Swap elements by creating a temporary reference.
//                 var temporaryReference = array[index - 1];
//                 array[index - 1] = array[index];
//                 array[index] = temporaryReference;
//             }
//             console.log('array is now ', array);
//         }
//         console.log("**one full pass through array**");
//         console.log("***is array sorted? ", isSorted);
//     }

//     return array;
// }

//=====================================================================================================================
//INSERTION SORT
//=====================================================================================================================


// function insertionSort(array) {

//     for (var i = 0; i < array.length; i++) {

//         var currentUnsortedItem = array[i];
//         console.log('currentUnsortedItem is currently ' + currentUnsortedItem);

//         for (var j = i; j > 0 && currentUnsortedItem < array[j - 1]; j--) {
//             console.log(currentUnsortedItem + ' < ' + array[j - 1] + ' is ' + (currentUnsortedItem < array[j - 1]));
//             array[j] = array[j - 1];
//             console.log('** inserting ' + array[j - 1] + ' at index ' + j);
//         }

//         array[j] = currentUnsortedItem;
//         console.log('** inserting ' + currentUnsortedItem + ' at index ' + j);

//         console.log('array is now: ' + array);
//     }
//     return array;
// }

// console.log(insertionSort(arrayUse));

//NOTES

//Time Complexity: Quadratic O(n^2)
//Space Complexity: in-place
//Stability: Stable
//Internal/External: Internal
//Recursive?: No
//Comparison?: Yes

//WITH EXPLANATION from BaseCS
// function insertionSort2(array) {
//     // Traverse through length of array, starting with the element at index 0.
//     for (var i = 0; i < array.length; i++) {
//         // Our current place in the unsorted portion of the array.
//         // currentUnsortedItem is the item we will be moving into the "sorted" subset of our array.
//         var currentUnsortedItem = array[i];
//         console.log('currentUnsortedItem is currently ' + currentUnsortedItem);

//         // Iterate through sorted items.
//         // If the current unsorted item is smaller than the item to its left,
//         // move the current item back one position in the array.
//         // This loop will never run for the very first unsorted item at index 0.
//         for (var j = i; j > 0 && currentUnsortedItem < array[j - 1]; j--) {
//             console.log(currentUnsortedItem + ' < ' + array[j - 1] + ' is ' + (currentUnsortedItem < array[j - 1]));

//             // Shift item left in the sorted subset of the array.
//             array[j] = array[j - 1];
//             console.log('** inserting ' + array[j - 1] + ' at index ' + j);
//         }

//         // Shift item to the right in the sorted subset fo the array.
//         array[j] = currentUnsortedItem;
//         console.log('** inserting ' + currentUnsortedItem + ' at index ' + j);

//         console.log('array is now: ' + array);
//     }

//     return array;
// }

//=====================================================================================================================
//MERGE SORT
//=====================================================================================================================


function mergeSort(array) {
    var arraySize = array.length;
   
    if (arraySize === 1) { 
      return; 
    }

    var midpoint = Math.floor(arraySize / 2);
    var leftArray = array.slice(0, midpoint);
    var rightArray = array.slice(midpoint);
   
    mergeSort(leftArray);
    mergeSort(rightArray);
    
    merge(leftArray, rightArray, array);
    
    return array;
  }
  
  function merge(leftArray, rightArray, array) {
    var index = 0;
   
    while (leftArray.length && rightArray.length) {
      console.log('array is: ', array);
      if (rightArray[0] < leftArray[0]) {
        array[index++] = rightArray.shift();
      } else {
        array[index++] = leftArray.shift();
      }
    }
    
    while (leftArray.length) {
      console.log('left array is: ', leftArray);
      array[index++] = leftArray.shift();
    }
    
    while (rightArray.length) {
      console.log('right array is: ', rightArray);
      array[index++] = rightArray.shift();
    }
    
    console.log('** end of merge function ** array is: ', array);
  }

  mergeSort(arrayUse);


//NOTES

//Time Complexity: O (n log n)
//Space Complexity: out of place
//Stability: stable
//Internal/External: External
//Recursive?: Y
//Comparison?: N

//WITH EXPLANATION

// function mergeSort(array) {
//     // Determine the size of the input array.
//     var arraySize = array.length;
   
//     // If the array being passed in has only one element
//     // within it, it is considered to be a sorted array.
//     if (arraySize === 1) { 
//       return; 
//     }
   
//     // If array contains more than one element,
//     // split it into two parts (left and right arrays).
//     var midpoint = Math.floor(arraySize / 2);
//     var leftArray = array.slice(0, midpoint);
//     var rightArray = array.slice(midpoint);
   
//     // Recursively call mergeSort() on
//     // leftArray and rightArray sublists.
//     mergeSort(leftArray);
//     mergeSort(rightArray);
    
//     // After the mergeSort functions above finish executing,
//     // merge the sorted leftArray and rightArray together.
//     merge(leftArray, rightArray, array);
    
//     // Return the fully sorted array.
//     return array;
//   }
  
//   function merge(leftArray, rightArray, array) {
//     var index = 0;
   
//     while (leftArray.length && rightArray.length) {
//       console.log('array is: ', array);
//       if (rightArray[0] < leftArray[0]) {
//         array[index++] = rightArray.shift();
//       } else {
//         array[index++] = leftArray.shift();
//       }
//     }
    
//     while (leftArray.length) {
//       console.log('left array is: ', leftArray);
//       array[index++] = leftArray.shift();
//     }
    
//     while (rightArray.length) {
//       console.log('right array is: ', rightArray);
//       array[index++] = rightArray.shift();
//     }
    
//     console.log('** end of merge function ** array is: ', array);
//   }