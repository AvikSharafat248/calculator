const numbers = [1,2,3,4,5,6];

const squares = numbers.map( (element) => Math.pow(element,2))
console.log(squares)

const even = numbers.filter((even)=>even %2===0)
console.log(even)
const cubes = numbers.map((avik) => Math.pow(avik,3))
console.log(cubes)

const odd = numbers.filter((odd)=> odd % 2 !=0)
console.log(odd)

const total = numbers.reduce((accumulator,element)=> accumulator + element)
console.log(total)