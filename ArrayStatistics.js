function arrayStats(arr){
    let sum=arr.reduce((total,num)=>total+num);
    let avg=sum/arr.length;
    let maxVal=Math.max(...arr)
    let minVal=Math.min(...arr)
   console.log(obj={
     sum:sum,
        average:Number(avg.toFixed(2)),
        min:minVal,
        max:maxVal  
   })
 }
 arrayStats([ 2,2,3, 4, 5])// { sum: 15, average: 3.00, min: 1, max: 5 }