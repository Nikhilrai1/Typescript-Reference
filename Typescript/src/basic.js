"use strict";
// 1. Variables-------------------------------------------------------------
const num = 10;
let fruits = ["Apple", "Banana", "Cherry"];
let marks = [100, 99, 98, 97, 96, 95];
// 2. Function--------------------------------------------------------------
// (a) return type
const calculateTotalMarks = () => {
    let totalMarks = 0;
    for (let i = 0; i < marks.length; i++) {
        totalMarks += marks[i];
    }
    return totalMarks; // return type is number
};
// console.log(calculateTotalMarks())
// (b) parameter type
function arrSum(arr) {
    return arr.reduce((prev, curr) => {
        return prev + curr;
    }, 0);
}
// console.log(arrSum([1,2,3,4]))
// (b) generic
function sum(arr) {
    return arr.reduce((prev, curr) => {
        return prev + curr;
    }, 0);
}
console.log(sum([1, 2, 3, 4, 5]));
