const arr=[4,5,2,6,8,1]
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      
        // Start comparing current element with every element before it
        for (let j = i - 1; j > -1; j--) {
          
            // Swap elements as required
            if (arr[j + 1] < arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                
            }
        }
    }
    return arr[0]+arr[arr.length-1];
}
console.log(insertionSort(arr))

