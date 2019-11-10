//1
var arrOfNames = ['Vasya', 'Alex', 'Val9I'];

function getArrOfNames(arrOfNames) {
    var newArr = arrOfNames.map(function (names) {
        var newObj = {};
        newObj.name = names

        return newObj;
    });

    return newArr;

}

console.log(getArrOfNames(arrOfNames));


//2 
var arr = ['00', '13', '24'];

function getTime(array) {
    var newTime = array.reduce(function (result,
        temporary) {
        return result + ' : ' + temporary;
    }, 'Текущее время');

    return newTime;
}

console.log(getTime(arr));




//3
var text = 'Я пришел сюда один';


function showNumberOfVowels(str) {
    var strLower = str.toLowerCase().split('');
    var vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];

    var result = strLower.reduce(function (sum, val) {
        if (vowels.indexOf(val) !== -1) {
            sum++;
        }

        return sum;

    }, 0);


    return result;
}


console.log('Количество гласных: ' + showNumberOfVowels(text));


//4
var newText = 'Мама гордится своими ногами! Папа гордится своими рогами? Значит, рога вырастают в итоге. Если у мамы красивые ноги';


function breakText(str) {
    var newStr = str.split(/[?.!]\s/);

    for (var i = 0; i < newStr.length; i++) {
        console.log(newStr[i] + ': кол-во букв в предложении (' + newStr[i].split(/[\s.?!,]/).join('').length + ')');
    }

}

console.log(breakText(newText));

//5

var newVal = 'Я пришел сюда один, один и уйду!!';


function showReps(str) {
    var newStr = str.toLowerCase().split(/[?!.\s=,]/).filter(Boolean);
    var result = {};

    var arrRep = newStr.filter(function (elem, index, arr) {
        return arr.indexOf(elem) !== index || arr.lastIndexOf(elem) !== index;
    });

    var numOfRep = arrRep.forEach(function (el) {
        result[el] = result[el] + 1 || 1;
    });

    for (var key in result) {
        console.log('Максимальное число повторений у слова ' + '"' + key + '"' + ' - ' + result[key]);
    }


}

console.log(showReps(newVal));