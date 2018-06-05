//All algorithms come from Vaidehi Joshi's blog - BaseCS

var arrayUse = [-33, 900, 5, 22, 20, -5, 17, 55, 52, 5];
var testArray = [ 331, 454, 230, 34, 343, 45, 59, 453, 345, 231, 9 ];

//=====================================================================================================================
//SELECTION SORT
//=====================================================================================================================

function selectionSort(numbers) {
    var length = numbers.length;
    for (var index = 0; index < length; index++) {
        var smallestNumIndex = index;
        for (var nextNumIndex = index + 1; nextNumIndex < length; nextNumIndex++) {
            if (numbers[nextNumIndex] < numbers[smallestNumIndex]) {
                smallestNumIndex = nextNumIndex;
            }
        }
        if (smallestNumIndex != index) {
            var currentNumber = numbers[index];
            numbers[index] = numbers[smallestNumIndex];
            numbers[smallestNumIndex] = currentNumber;
        }
    }
    return numbers;
}
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

function bubbleSort(array) {
    var isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (var index = 1; index < array.length; index++) {
            if (array[index - 1] > array[index]) {
                isSorted = false;
                var temporaryReference = array[index - 1];
                array[index - 1] = array[index];
                array[index] = temporaryReference;
            }
        }
    }
    return array;
}

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


function insertionSort(array) {
    for (var i = 0; i < array.length; i++) {
        var currentUnsortedItem = array[i];
        for (var j = i; j > 0 && currentUnsortedItem < array[j - 1]; j--) {
            array[j] = array[j - 1];
        }
        array[j] = currentUnsortedItem;
    }
    return array;
}

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
    if (rightArray[0] < leftArray[0]) {
      array[index++] = rightArray.shift();
    } else {
      array[index++] = leftArray.shift();
    }
  }
  while (leftArray.length) {
    array[index++] = leftArray.shift();
  }
  while (rightArray.length) {
    array[index++] = rightArray.shift();
  }
}

// mergeSort(arrayUse);


//NOTES

//Time Complexity: O (n log n)
//Space Complexity: out of place
//Stability: stable
//Internal/External: External
//Recursive?: Y
//Comparison?: Y

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

//=====================================================================================================================
//QUICK SORT
//=====================================================================================================================

function quickSort(items, leftIndex, rightIndex) {
    var pivotIndex;
      if (items.length > 1) {
      pivotIndex = partition(items, leftIndex, rightIndex);  
      if (leftIndex < pivotIndex - 1) {
        quickSort(items, leftIndex, pivotIndex - 1);
      }
      if (pivotIndex < rightIndex) {
        quickSort(items, pivotIndex, rightIndex);
      }
    }
    return items;
}
function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)];
    var l = left;
    var r = right;
    while (l <= r) {
      while (items[l] < pivot) {
        l++;
      }
      while (items[r] > pivot) {
        r--;
      }
      if (l <= r) {  
        swap(items, l, r);
        l++;
        r--;
      }
}
    return l;
}
function swap(items, leftPointerIndex, rightPointerIndex){
    var tempReference = items[leftPointerIndex];
    items[leftPointerIndex] = items[rightPointerIndex];
    items[rightPointerIndex] = tempReference;
}

// console.log(arrayUse);
// quickSort(arrayUse, 0, arrayUse.length - 1);
// console.log(arrayUse);

//NOTES

//Time Complexity: O (n log n)
//Space Complexity: in place (though technically needs a little space for pointers)
//Stability: unstable
//Internal/External: internal
//Recursive?: Y
//Comparison?: Y

//WITH EXPLANATION

// function quickSort(items, leftIndex, rightIndex) {
//     // Declare an index that will be our pivot reference.
//     var pivotIndex;
  
//     // If the array has only one item, it's already sorted!
//     // If it has no items, we don't want to try to sort it!
//     if (items.length > 1) {
//       // As long as the array has two items, we can parition it.
//       pivotIndex = partition(items, leftIndex, rightIndex);
  
//       console.log('** pivot is: ', items[pivotIndex]);
  
//       // If the left reference hasn't been incremented to
//       // reach the pivot yet, we want to keep comparing it.
//       if (leftIndex < pivotIndex - 1) {
//         quickSort(items, leftIndex, pivotIndex - 1);
//       }
  
//       // If the right reference hasn't reached the 
//       // pivotIndex yet, we need to keep comparing it.
//       if (pivotIndex < rightIndex) {
//         quickSort(items, pivotIndex, rightIndex);
//       }
  
//     }
  
//     return items;
// }

//   // The partition() method takes a list of items, and a left
// // reference, as well as a right reference. Both left and right
// // are indexes to indicate where the pointers should start.
// function partition(items, left, right) {
//     // Find the pivot by adding the two indexes together
//     // and dividing by two (the middle element, effectively).
//     var pivot = items[Math.floor((right + left) / 2)];
//     var l = left;
//     var r = right;
  
//     console.log('** pivot is: ', pivot);
//     console.log('** left is: ', items[left]);
//     console.log('** right is: ', items[right]);
  
//     // Once the left reference is greater than the right reference,
//     // we have finished sorting this set of items, and we can return.
//     while (l <= r) {
//       // If the left pointer is less than the pivot, increment it.
//       // In other words, move the pointer to the right.
//       while (items[l] < pivot) {
//         l++;
//         console.log('l is now pointing to: ', items[l]);
//       }
  
//       // If the right pointer is greater than the pivot, decrement it.
//       // In other words, move the pointer to the left.
//       while (items[r] > pivot) {
//         r--;
//         console.log('r is now pointing to: ', items[r]);
//       }
  
//       // If the left pointer is larger than the pivot, and the right
//       // pointer is not bigger than the pivot, swap the two elements.
//       if (l <= r) {
//         console.log('** now swapping l and r pointers: ', items[l], items[r]);
  
//         swap(items, l, r);
  
//         // After swapping, increment/decrement the pointers respectively.
//         l++;
//         r--;
  
//         // console.log('l is now pointing to: ', items[l]);
//         // console.log('r is now pointing to: ', items[r]);
//       }
// }
  
//     // The left item becomes the new pivot element.
//     return l;
//   }

// function swap(items, leftPointerIndex, rightPointerIndex){
//     // Create a temporary reference for the left item.
//     var tempReference = items[leftPointerIndex];

//     // Move left item to the index that contains right item.
//     // Move right item to the temporary reference.
//     items[leftPointerIndex] = items[rightPointerIndex];
//     items[rightPointerIndex] = tempReference;
// }

//=====================================================================================================================
//HEAP SORT
//=====================================================================================================================


function heapSort(array) {
  // Build our max heap.
  buildMaxHeap(array);
  // Find last element.
  lastElement = array.length - 1;
  // Continue heap sorting until we have
  // just one element left in the array.
  while(lastElement > 0) {
    console.log(array);
    swap(array, 0, lastElement);
    heapify(array, 0, lastElement);
    lastElement -= 1
  }
}
function buildMaxHeap(array) {
  var i;
  i = array.length / 2 - 1;
  i = Math.floor(i);
  // Build a max heap out of
  // all array elements passed in.
  while (i >= 0) {
    heapify(array, i, array.length);
    i -= 1;
  }
}
function heapify(heap, i, max) {
  var index, leftChild, righChild;
  while(i < max) {
    index = i;
    leftChild = 2*i + 1;
    righChild = leftChild + 1;
    if (leftChild < max && heap[leftChild] > heap[index]) {
      index = leftChild;
    }
    if (righChild < max && heap[righChild] > heap[index]) {
      index = righChild;
    }
    if (index == i) {
      return;
    }
    swap(heap,i, index);
    i = index;
  }
}
function swap(array, firstItemIndex, lastItemInde) {
  var tmp = array[firstItemIndex];
  // Swap first and last items in the array.
  array[firstItemIndex] = array[lastItemInde];
  array[lastItemInde] = tmp;
}

// console.log(arrayUse);
// heapSort(arrayUse);
// console.log(arrayUse);

//NOTES
//Time Complexity: O (n log n)
//Space Complexity: in place
//Stability: unstable
//Internal/External: internal
//Recursive?: N
//Comparison?: Y

//=====================================================================================================================
//COUNTING SORT
//=====================================================================================================================


// Notice that we needed to know the max/min value in order to use counting sort at all!
function countingSort(array, minimumValue, maximumValue) {
    var i;
    var z = 0;
    var count = [];
    // Count the instances of each element.
    for (i = minimumValue; i <= maximumValue; i++) {
      count[i] = 0;
    }
    // We now have a placeholder array that we'll use to keep
    // track of which element will be sorted into each index.
    console.log(count);
    // Build up our index count array.
    for (i=0; i < array.length; i++) {
      count[array[i]]++;
    }
    console.log(count);
    // Modify array and move elements into their sorted location.
    for (i = minimumValue; i <= maximumValue; i++) {
      while (count[i]-- > 0) {
        console.log('item at index ' + z + ' is: ', array[z]);
        array[z++] = i;
        console.log('moving item ' + i + ' to correct location');
      }
    }
    console.log("Hooray! Array is now sorted!");
    return array;
  }

//NOTES

//Time Complexity: O (n + k) {if range of values to be sorted is larger than the actual amount of values to be sorted, doesn't make sense. k > n in that case}
//Space Complexity: out of place
//Stability: stable
//Internal/External: external
//Recursive?: N
//Comparison?: N

//=====================================================================================================================
//LINKED LIST
//=====================================================================================================================

class LinkedList{
  constructor(){
    this.head = null;
    this.last = null;
    this.length = 0;
  }
  
  add(data){
    var node = new Node(data);
    //if first node set head and tail
    if(!this.head){
      this.head = node;
      this.last = node;
    }
    else{
      this.last.next = node;
      this.last = node;
    }
    this.length++;
  }
  
  remove(index){
    var current = this.head;
    var prev;
    var count = 0;
    
    //iterate to the proper spot for removal, tracking previous and current node
    while(current.next && count != index){
      prev = count? current : null;
      current = current.next;
      count++;
    }
    
    //change previous to point to next and skip over current
    prev.next = current.next;
    this.length--;
    
    //if the last node was removed, update last reference
    if(index === this.length){
      this.last = prev;
    }   
  }
  
  search(index){
    var current = this.head;
    var count = 0;
    
    //iterate to the proper spot
    while (current.next && count != index){
      current = current.next;
      count++;
    }
    
    return current.data;
  }
  
  print(){
    var current = this.head;
    
    while(current != null){
      console.log(current.data);
      current = current.next;
    }
  }
}

class Node{
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

// var list = new LinkedList();
// console.log(list);
// list.add(2);
// list.add(4);
// list.add(6);
// list.add(3);
// list.add(5);
// list.add(7);
// list.print();
// console.log("-----");
// list.remove(5);
// list.print();
// console.log("-----");
// list.add(2);
// list.add(4);
// list.print()

//=====================================================================================================================
//RADIX SORT
//=====================================================================================================================


// One  function name so no global scope pollution.
// lower-case as this is a function rather than an object
// Pass the array of numbers rather than use a global.
// Returns a new array of numbers sorted.
function radixSort (numbers) {
    function emptyBuckets () {          // empties buckets and adds contents back to workArray
        workArray.length = 0;
        for (i = 0; i < 10; i += 1) {   // could have used buckets forEach but this is quicker on average
            if(buckets[i].length > 0){
                workArray.push(...buckets[i]);
                buckets[i].length = 0;
            }
        }
    }
    var i;                  // hoist declarations 
    const results = [];     // array that holds the finnal sorted numbers
    const buckets = [[], [], [], [], [], [], [], [], [], []];  // buckets
    const workArray = [...numbers]; // copy the numbers
    var power = 0;                  // current digit as a power of ten
    var tenPow = 1;                 // ten to the power of power
    if(numbers.length <= 1){        // if one or no items then dont sort
        return workArray;           // dont sort if there is no need.
    }
    // as numbers are sorted and moved to the result array the numbers 
    while (workArray.length > 0) {
        for (i = 0; i < workArray.length; i += 1) { // for all numbers still being sorted
            if (workArray[i] < tenPow) {            // is the number samller than the current digit
                results.push(workArray[i]);         //Yes it is sorted then remove a put o nthe result array
            } else {
                // add to bucket. Use Math.floor and save complexity doing it in one statement line
                buckets[Math.floor(workArray[i] / tenPow) % 10].push(workArray[i]);
            }
        }
        power += 1;
        tenPow = Math.pow(10, power);        
        emptyBuckets();
    }
    return results;
} 


// console.log(radixSort(arrayUse))

//Time Complexity: O (Kn) {where K is biggest number in radix}
//Space Complexity: out of place
//Stability: stable
//Internal/External: internal
//Recursive?: Can be if MSD, LSD is iterative
//Comparison?: N


//=====================================================================================================================
//TEST FUNCTION
//=====================================================================================================================


function test() {
    function log (data) {console.log(data); }
    function createRandomArray (maxItems, maxDigits, digitRange) {
        var numSize, num;
        var numbers = [];
        var count = Math.random() * maxItems;
        while (count-- > 0) {
            numSize = Math.random() * maxDigits;
            num = 0;
            while (numSize-- > 0) {
                num *= 10;
                num += Math.floor(Math.random() * digitRange);
            }
            numbers.push(num);
        }
        return numbers;
    }
    var items, digits, range, array;
    for (items = 0; items <= 20; items += 1) {
        for (digits = 1; digits <= 9; digits += 1) {
            for (range = 1; range <= 9; range += 1) {
                array = createRandomArray(items, digits, range);
                length = array.length;
                numbers = [...array];
                selectionSort(numbers);
                console.log(selectionSort(numbers));
                array.sort((a, b) => a - b);
                if (array.join(",") !== numbers.join(",")) {
                    log("==============================");
                    log("Test failed.");
                    log("Items = "+length)
                    log("Max digits = "+digits)
                    log("Digit range = "+range)
                    log("- Result --------------------")
                    numbers.forEach(n => log(n))
                    log("- Expected ------------------")
                    array.forEach(n => log(n) )
                    return
                }
            }
        }
    }
    log("All passed")
}
// test();

//=====================================================================================================================
//INTERVIEW PRACTICE
//=====================================================================================================================


//REVERSE A STRING

function stringReverser(str){
  let revStr = "";
  if (typeof str != "string" || str <=1){
    console.log(str)
  }
  for(let i = str.length - 1; i >= 0; i--){
    revStr += str[i]
  };
  console.log(revStr);
}

stringReverser("a")

let obj = {
  dude: "Yo",
  number: 123,
  pokemon: "Charizard"
}

obj.count = (function countFunc() {
  console.log("hi")
})();

function objLoop(obj) {
  for(let i in obj){
    console.log(obj[i]);
  };
}

objLoop(obj);