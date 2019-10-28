function Animal(name) {
    this.name = name;
    var foodAmount = 50;

    var self = this; // <--------

    function formatFoodAmount() {
        return foodAmount + 'гр';
    }

    this.feed = function () {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.'); //<------------
    };

    this.dailyNorm = function (amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма!!!';
        }

        foodAmount = amount;
    };
}

function Cat(name) {
    Animal.apply(this, arguments);

    var animalFood = this.feed; // <----------

    this.feed = function () {
        animalFood(); // <----------------
        console.log('Кот доволен');
        return this;
    }

    this.stroke = function () {
        console.log('Гладим кота');
        return this;
    }
}

var cat = new Cat('Валя');

console.log(cat.name);

cat.feed().stroke().feed();
cat.dailyNorm(100);
cat.feed();