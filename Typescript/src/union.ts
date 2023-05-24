// ------------- Union ---------------

function getFirstThree (x: string | number[] | string[]){
    return x.slice(0,3);
}

console.log(getFirstThree("hello"));
console.log(getFirstThree([1,2,3,4,5,6,7,8,9,0]));
console.log(getFirstThree(['a','b','c','d','e']));

