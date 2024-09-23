function sumFor(list:number[]) {
  let sum:number = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}
function sumWhile(list:number[]) {
  let i = 0;
  let sum:number = 0;
  while (i < list.length) {
    sum += list[i];
    i += 1;
  }
  return sum;
}
function sumRecursion(list:number[]):number {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1));
}
function sumTheFunctionalWay(list:number[]) {
  return list.reduce((acc, num) => acc + num, 0);
}

console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4]));
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
