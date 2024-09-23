function sumFor(list) {
    var sum = 0;
    for (var i = 0; i < list.length; i++) {
        sum += list[i];
    }
    return sum;
}
function sumWhile(list) {
    var i = 0;
    var sum = 0;
    while (i < list.length) {
        sum += list[i];
        i += 1;
    }
    return sum;
}
function sumRecursion(list) {
    if (list.length === 0) {
        return 0;
    }
    return list[0] + sumRecursion(list.slice(1));
}
function sumTheFunctionalWay(list) {
    return list.reduce(function (acc, num) { return acc + num; }, 0);
}
console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4]));
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
