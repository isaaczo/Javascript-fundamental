
function convertMinit2Second(minutes) {
    return minutes * 60;
}
function incrementByOne(number) {
    return number + 1;
}
function triangleArea(base, height) {

    return (base * height) / 2;

}
function getAge(birthYear) {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var age = currentYear - birthYear;
    if (currentMonth < 0 || (currentMonth == 0)) {
        age--;
    }
    return ((age * 365) + (currentMonth * 30) + currentDate.getDate());
}
function firstArrayElment(myArray) {
    return myArray[0];
}
function convertHours2Second(hours) {
    return hours * 3600;
}
function trianglePerimeter(length, width) {
    return (length * 2) + (width * 2);
}
function twoNmberSumLess100(x, y) {
    return ((x + y < 100));
}
function convertHoursMinute2Seconds(hours, minutes) {
    return (hours * 3600) + (minutes * 60);
}
function twoNmberSumEquale210(x, y) {
    return ((x == 10 || y == 10) || (x + y == 10));
}
function argument2Array(arg1, arg2) {
    return [arg1, arg2];

};
function divisibleBy5(x) {
    return (x % 5 == 0);
}
function basicAritmetic(num1, num2, operator) {

    switch (operator) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "%":
            return num1 % num2;
            break;

        default:
            break;
    }

}
function cupsCoffeGet(cupsBought) {
    return cupsBought + Math.floor(cupsBought / 7);
}
function convertJPYtoUSD(JPY) {
    return (JPY * 0.0079);
}

//---------------------------------------------------------------------
console.log("convertHoursMinute2Seconds:"+ convertHoursMinute2Seconds(2,30));
console.log("incrementByOne:"+ incrementByOne(30));
console.log("triangleArea:"+ triangleArea(2,30));
console.log("getAge:"+ getAge(30));
console.log("firstArrayElment:"+ firstArrayElment([1, 2, 3]));
console.log("convertHours2Second:"+ convertHours2Second(2));
console.log("trianglePerimeter:"+ trianglePerimeter(2,30));
console.log("twoNmberSumLess100:"+ twoNmberSumLess100(2,30));
console.log("twoNmberSumEquale210:"+ twoNmberSumEquale210(2,30));
console.log("argument2Array:"+ argument2Array(2,30));
console.log("divisibleBy5:"+ divisibleBy5(30));
console.log("basicAritmetic:"+basicAritmetic(7, 3, "*"));
console.log("cupsCoffeGet:"+ cupsCoffeGet(15));
console.log("convertJPYtoUSD:"+ new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
}).format(convertJPYtoUSD(127.20)));








