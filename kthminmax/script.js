const arr=[6,4,3,2,100,5]
function insertionSort(arr,k) {
    for (let i = 1; i < arr.length; i++) {
      
        // Start comparing current element with every element before it
        for (let j = i - 1; j > -1; j--) {
          
            // Swap elements as required
            if (arr[j + 1] < arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                
            }
        }
    }
   
    return arr[k-1]
}
console.log(insertionSort(arr,1))

