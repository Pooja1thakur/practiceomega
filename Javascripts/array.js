// var arr =[1,2,3,4,5,6,7];
// console.log(arr[3]);

// var arr=[
//     [1,2,3,4,5],
//     [5,6,7,8,9],
//     [8,9,3,4,6]
// ];
// console.log(arr[1][3]);

// let arr1=[1,2,3,4];
// let arr2=[5,6,7,8];

// let arr3=[...arr1,...arr2];
// console.log(arr3);



var arr=[3,4,5,6,7];
var newarr= arr.map(function(x,i){
console.log(i);
return x*x;
})
console.log(newarr);



