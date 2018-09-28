module.exports = function solveEquation(equation) {
let massiv = equation.split(' ');
let a = massiv[0];
let m1 = massiv.slice(3,5);
let m2 = massiv.slice(7, massiv.length);
let b = m1.join('');
let c = m2.join('');
let result = [];
let d = b*b - 4*a*c;
let x;
x = (-b + (Math.sqrt(d)))/(2*a);
result.push(Math.round(x));
x = (-b - (Math.sqrt(d)))/(2*a);
result.push(Math.round(x));
return result.sort((a,b)=>{return a-b});
}