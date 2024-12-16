// HOC(higher order function) - they are the functions which can accept other functions as arguments, returns functions, or both
                            //  it generally takes a callback function, executes it and performs operation

const r = [2, 3, 4, 5, 6];

// normal function
// // area of circle
// const area = (r) => {
//     console.log("area");
    
//     const output = []

//     for(let i=0; i<r.length; i++) {
//         output.push(Math.PI * r[i] * r[i])
//     }

//     return output
// }
// console.log(area(r))

// //circumstance of circle
// const circumstance = () => {
//     console.log("circumstance");
//     const output = []

//     for (let i=0; i<r.length; i++) {
//         output.push(Math.PI * 2 * r[1])
//     }

//     return output
// }
// console.log(circumstance(r))

// //diameter of circle
// const diameter = () => {
//     console.log("diameter");
//     const output = []
//     for (let i=0; i<r.length; i++) {
//         output.push(r[i] * 2)
//     }
//     return output
// }
// console.log(diameter(r));


//higher order function

const area = (r) => {
    return (Math.PI * r * r)
}
const circumstance = (r) => {
    return (Math.PI * 2 * r)
}
const diameter = (r) => {
    return(2 * r)
}

// const higherOrderFunction = (logic, r) => {
//     const output = []
//     for (let i=0; i<r.length; i++) {
//         output.push(logic(r[i]))
//     }
//     return output
// }

// console.log(higherOrderFunction(area, r));
// console.log(higherOrderFunction(circumstance, r));
// console.log(higherOrderFunction(diameter, r));

// array prototype
Array.prototype.circumstance = (logic) => {
    const output = []
    for(let i=0; i<r.length; i++) {
        output.push(logic(r[i]))
    }
    return output
}
console.log(r.circumstance(area));
console.log(r.circumstance(diameter));
console.log(r.circumstance(circumstance));


