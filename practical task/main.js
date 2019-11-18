var div = document.getElementById('block');
var btn = document.getElementsByTagName('button')[0];

var createChild1 = document.createElement('p');
var createChild2 = document.createElement('p');

div.appendChild(createChild1);
div.appendChild(createChild2);

createChild1.innerHTML = 'текст <a href="#">Нажми</a> <a href="#">Нажми2</a>';
createChild2.innerHTML = 'текст <a href="//google.com">Нажми</a> <a href="//ya.ru">Нажми2</a>';

var childP = createChild1.getElementsByTagName('a');

btn.addEventListener('click', addClassLinks);

createChild2.onclick = function (e) {
    e.preventDefault();
    if (e.target.tagName != 'A') return;

    var href = e.target.getAttribute('href');
    alert(href);

}


function addClassLinks() {
    for (var i = 0; i < childP.length; i++) {
        childP[i].classList.add('link');
    }
}
