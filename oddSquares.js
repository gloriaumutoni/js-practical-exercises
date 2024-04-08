function oddSquares(arr){
    let removed=arr.filter(even=>!(even%2===0)).map(num=>num**2)
    return removed
    }
    console.log(oddSquares([1, 2, 3, 4, 5, 6])); // should return [1, 9, 25]
    console.log(oddSquares([10, 15, 20, 25, 30])); // should return [225, 625]
    