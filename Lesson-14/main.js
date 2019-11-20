var inpX = document.getElementById('inpX');
var inpY = document.getElementById('inpY');
var btn = document.getElementById('btn');
var chessBoard = document.getElementById('chessBoard');



btn.setAttribute('disabled', 'disabled');
inpX.addEventListener('keyup', checkInputs);
inpY.addEventListener('keyup', checkInputs);


btn.addEventListener('click', function (e) {
    e.preventDefault();
    var inpNumX = +inpX.value;
    var inpNumY = +inpY.value;


    if (inpNumX < 1 || inpNumX > 10 || isNaN(inpNumX)) {
        alert('Введите корректное число X: 1-10');
        inpX.value = '';
        btn.setAttribute('disabled', 'disabled');
    } else {
        var inpResX = inpNumX;
    }

    if (inpNumY < 1 || inpNumY > 10 || isNaN(inpNumY)) {
        alert('Введите корректное число Y: 1-10');
        inpY.value = '';
        btn.setAttribute('disabled', 'disabled');
    } else {
        var inpResY = inpNumY;
    }

    showChessBoard(inpResX, inpResY);
});



chessBoard.addEventListener('click', function (event) {
    var target = event.target;
    var spans = chessBoard.getElementsByTagName('span');

    if (target.tagName != 'SPAN') return;

    for (var i = 0; i < spans.length; i++) {
        spans[i].classList.toggle('chess_black');
    }
});



function checkInputs() {
    var inpXVal = inpX.value;
    var inpYVal = inpY.value;


    if (inpXVal.trim().length != 0 && inpYVal.trim().length != 0) {
        btn.removeAttribute('disabled');
    } else {
        btn.setAttribute('disabled', 'disabled');
    }

    if (inpXVal.trim().length == 0 || inpYVal.trim().length == 0) {
        chessBoard.innerHTML = '';
    }

}

function showChessBoard(val1, val2) {
    var x = val1;
    var y = val2;

    for (var i = 0; i < y; i++) {
        var row = chessBoard.appendChild(document.createElement('div'));

        for (var k = 0; k < x; k++) {
            var rowEl = document.createElement('span');
            if (i % 2 == k % 2) {
                rowEl.className = 'chess_black';
            }

            row.appendChild(rowEl);
        }
    }

    btn.setAttribute('disabled', 'disabled');
}









