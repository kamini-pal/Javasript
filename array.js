// array in function 
let arr=[10,20,30,40];
function getsum(arr){
    let sum=0;
    let len= arr.length;
    for(let i=0; i<len;i++)
    {
        sum=sum+arr[i]
    }
    return sum;
}
let sum=getsum(arr);