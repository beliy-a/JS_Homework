//1
var arrOfNames = ['Vasya', 'Alex', 'Val9I'];

function getArrOfNames(arrOfNames) {
    return arrOfNames.map(function (names) {
        return { name: names };
    });
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

var newVal = 'Я пришел, пришел, пришел сюда один, один и уйду!!';


function showReps(str) {
    var newStr = str.toLowerCase().split(/[?!.\s=,]/).filter(Boolean);
    var result = {};

    var arrRep = newStr.filter(function (elem, index, arr) {
        return arr.indexOf(elem) !== index || arr.lastIndexOf(elem) !== index;
    });

    var numOfRep = arrRep.forEach(function (el) {
        result[el] = result[el] + 1 || 1;
    });

    var maxNumOfRep = Object.keys(result).reduce(function (el, ind) {
        return result[el] > result[ind] ? el : ind;
    });

    console.log('Максимальное число повторений у слова ' + "'" + maxNumOfRep + "'" + ' - ' + result[maxNumOfRep]);

}

console.log(showReps(newVal));