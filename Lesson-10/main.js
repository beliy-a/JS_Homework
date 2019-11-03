// 1 

var arr = [-1, 0, 2, 34, -2];

function filterNumbersArr(array) {
    var newArr = array.filter(function (number) {
        return number > 0;
    });

    return newArr;
}

console.log(filterNumbersArr(arr));



// 2

function getFirstPositiveNumber(array) {
    var positiveNum = array.find(function (number) {
        return number > 0;
    });

    return positiveNum;
}

console.log(getFirstPositiveNumber(arr));



// 3

function isPalindrome(str) {
    return str.toLowerCase() === str.split('').reverse().join('').toLowerCase();
}

console.log(isPalindrome('шалаШ'));



// 4:

function areAnagrams(str1, str2) {
    return str1.split('').sort().join('').toLowerCase() === str2.split('').sort().join('').toLowerCase();
}

console.log(areAnagrams('кот', 'отк'));
console.log(areAnagrams('кот', 'атк'));
console.log(areAnagrams('кот', 'отко'));


//5 

var arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

function divideArr(array, amount) {
    var newArr = [];

    for (var i = 0; i < array.length; i += amount) {
        newArr.push(array.slice(i, i + amount));
    }

    return newArr;
}

console.log(divideArr(arr2, 3));