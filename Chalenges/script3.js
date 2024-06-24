//arr = [1,2,3,4,5] to arr = [6,5,4,3,2,1,0]
const arr = [1, 2, 3, 4, 5];
arr.push(6);
arr.unshift(0);
x = arr.reverse();
console.log(arr);

// make one array from arr1 and arr2 and take out number 5
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// solution 1
const arr3 = arr1.concat(arr2.slice(1));
console.log(arr3);

// solution 2
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);
console.log(arr4);

// solution 3
const arr5 = arr1.slice(0, 4).concat(arr2);
console.log(arr5);
