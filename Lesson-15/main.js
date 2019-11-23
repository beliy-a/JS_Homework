var btnRow = document.getElementById('row');
var table = document.getElementsByTagName('table')[0];

btnRow.addEventListener('click', addRow);
table.addEventListener('click', addInput);

function addInput(e) {
    var target = e.target;

    if (target.tagName == 'TD' && !target.getAttribute('id')) {
        var input = document.createElement('input');
        input.value = target.innerHTML;
        target.innerHTML = '';
        target.appendChild(input);
        input.focus();

        input.addEventListener('keyup', function (e) {
            if (e.keyCode === 13) {
                input.blur();
            }
        });


        input.addEventListener('blur', function () {
            target.innerHTML = input.value;
            table.addEventListener('click', addInput);
        });

        table.removeEventListener('click', addInput);

    } else return;
}


function addRow() {
    var tr = document.createElement('tr');

    for (var i = 0; i < 3; i++) {
        var td = document.createElement('td');
        tr.appendChild(td);
    }

    table.insertAdjacentElement('afterbegin', tr);
}