var arrayUse = [-33, 900, 5, 22, 20, -5, 17, 55, 52, 5];

//=====================================================================================================================
//SELECTION SORT
//=====================================================================================================================







//=====================================================================================================================
//BUBBLESORT
//=====================================================================================================================

// function bubbleSort(array) {
//     var isSorted = false;
    
//     while (!isSorted) {
//       isSorted = true;
//       for (var index = 1; index < array.length; index++) {
        
//         if (array[index - 1] > array[index]) {
//           isSorted = false;
          
//           var temporaryReference = array[index - 1];
//           array[index - 1] = array[index];
//           array[index] = temporaryReference;
//         }
//       }
//     }
//     return array;
//   }

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
//       isSorted = true;
//       // Iterate until we get to the last element
//       for (var index = 1; index < array.length; index++) {
//         console.log("comparing " + array[index] + " and " + array[index - 1]);
        
//         // If the element to the left is bigger, then swap the element
//         // that we're currently looking at with its left neighbor.
//         if (array[index - 1] > array[index]) {
//           isSorted = false;
//           console.log("SWAPPING " + array[index] + " and " + array[index - 1]);
          
//           // Swap elements by creating a temporary reference.
//           var temporaryReference = array[index - 1];
//           array[index - 1] = array[index];
//           array[index] = temporaryReference;
//         }
//         console.log('array is now ', array);
//       }
//       console.log("**one full pass through array**");
//       console.log("***is array sorted? ", isSorted);
//     }
    
//     return array;
//   }

//=====================================================================================================================
//INSERTION SORT
//=====================================================================================================================


// function insertionSort (array) {

//         for (var i = 0; i < array.length; i++) {
            
//             var currentUnsortedItem = array[i];
//             console.log('currentUnsortedItem is currently ' + currentUnsortedItem);

//             for (var j = i; j > 0 && currentUnsortedItem < array[j - 1]; j--) {
//                 console.log(currentUnsortedItem + ' < ' + array[j-1] + ' is ' + (currentUnsortedItem < array[j - 1]));
//                 array[j] = array[j - 1];
//                 console.log('** inserting ' + array[j - 1] + ' at index ' + j);
//               }

//             array[j] = currentUnsortedItem;
//             console.log('** inserting ' + currentUnsortedItem + ' at index ' + j);

//             console.log('array is now: ' + array);
//         }
//         return array;
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
//           console.log(currentUnsortedItem + ' < ' + array[j-1] + ' is ' + (currentUnsortedItem < array[j - 1]));

//           // Shift item left in the sorted subset of the array.
//           array[j] = array[j - 1];
//           console.log('** inserting ' + array[j - 1] + ' at index ' + j);
//         }

//         // Shift item to the right in the sorted subset fo the array.
//         array[j] = currentUnsortedItem;
//         console.log('** inserting ' + currentUnsortedItem + ' at index ' + j);
        
//         console.log('array is now: ' + array);
//     }
    
//     return array;
// }
