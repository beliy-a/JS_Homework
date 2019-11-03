//1
function Animal(name) {
    this._name = name;
    this._foodAmount = 50;

    this._self = this;
}

Animal.prototype._formatFoodAmount = function () {
    return this._foodAmount + ' гр';
};

Animal.prototype.feed = function () {
    console.log('Насыпаем в миску ' + this._self.dailyNorm() + ' корма.');
}

Animal.prototype.dailyNorm = function (amount) {
    if (!arguments.length) return this._formatFoodAmount();

    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма!!!';
    }

    this._foodAmount = amount;
}


function Cat(name) {
    Animal.apply(this, arguments);

    this._animalFood = Animal.prototype.feed;

}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;


Cat.prototype.feed = function () {
    this._animalFood();
    console.log('Кот доволен');
    return this;
}

Cat.prototype.stroke = function () {
    console.log('Гладим кота');
    return this;
}

var cat = new Cat('Валя');



cat.feed().stroke();
cat.dailyNorm(150);
cat.stroke().feed();







//2
var intialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefiend: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};



function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    } else {
        var clone = obj.constructor();
    }


    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.apply(obj, arguments));
        clone[key] = deepClone(obj[key]);
    }

    return clone;

}

var clonedObj = deepClone(intialObj);


intialObj.array.push(5);

clonedObj.array.push(2);
clonedObj.array[0] = 20;
clonedObj.object.object2.array2[1].name = 'Vasya';

console.log(intialObj);
console.log(clonedObj);





// 3
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }

    if (obj1 == null || typeof obj1 != 'object' || obj2 == null || typeof obj2 != 'object') {
        return false;
    }


    for (var prop in obj1) {
        if (obj1.hasOwnProperty(prop) !== obj2.hasOwnProperty(prop)) {
            return false;
        }

    }


    for (var prop in obj2) {
        if (!deepEqual(obj1[prop], obj2[prop])) {
            return false;
        }

    }

    return true;
}

console.log(deepEqual(intialObj, clonedObj));
