
// 1. Variables-------------------------------------------------------------
const num:number = 10;
let fruits: string[] = ["Apple","Banana","Cherry"];
let marks: number[] = [100,99,98,97,96,95];


// 2. Function--------------------------------------------------------------

// (a) return type
const calculateTotalMarks = ():number => {
    let totalMarks: number = 0;
    for (let i = 0; i < marks.length; i++) {
        totalMarks+=marks[i]
    }

    return totalMarks; // return type is number
}

// console.log(calculateTotalMarks())

// (b) parameter type
function arrSum(arr: number[]):number{
   
    return arr.reduce((prev,curr) => {
        return prev+curr;
    },0)
}

// console.log(arrSum([1,2,3,4]))

// (b) generic
function sum(arr: Array<number>):number{
   
    return arr.reduce((prev,curr) => {
        return prev+curr;
    },0)
}

console.log(sum([1,2,3,4,5]))
