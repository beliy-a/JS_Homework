
var button = document.getElementsByTagName('button')[0];
var ul = document.getElementsByTagName('ul')[0];
var divWrap = document.querySelector('.wrap');
var divBlock = document.querySelector('.tabs_block');


button.addEventListener('click', sendRequest);

function sendRequest(e) {
    e.preventDefault();
    var url = 'https://reqres.in/api/users?page=2';
    var usersList;

    if (localStorage.getItem('listUsers')) {
        usersList = JSON.parse(localStorage.getItem('listUsers'));
        showUsers(usersList, url);

    } else {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.onload = function () {
            var statusType = +String(this.status)[0];

            if (statusType === 2) {
                usersList = JSON.parse(this.response).data;
                localStorage.setItem('listUsers', JSON.stringify(usersList));
                showUsers(usersList, url);

            } else {
                showErr(this.status);
            }
        };


        xhr.onerror = function () {
            showErr(this.status);
        };
    }
}

function showUsers(user, url) {
    if (user.length == 0) {
        localStorage.clear();
        console.log('Проверте url -' + url);
        return;
    };



    ul.innerHTML = '';
    divBlock.innerHTML = '';


    for (var i = 0; i < user.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = 'User ' + (i + 1);
        li.setAttribute('data-tabs', user[i].id);
        ul.appendChild(li);

        var divUser = document.createElement('div');
        divUser.classList.add('tabs_user');
        divUser.innerHTML = '<p>First Name: ' + user[i].first_name + '</p>' +
            '<p>Last Name: ' + user[i].last_name + '</p>' +
            '<p>email: ' + user[i].email + '</p>';


        var divContent = document.createElement('div');
        divContent.classList.add('tabs_content');
        divContent.setAttribute('data-tabs', user[i].id);
        divContent.innerHTML = '<img src=' + user[i].avatar + ' alt="photo" >';
        divContent.appendChild(divUser);


        divBlock.appendChild(divContent);
    }

    if (divContent.children[0].getAttribute('alt')) {
        divContent.children[0].onerror = function () {
            localStorage.clear();
            showErr('=(');
        };
    }

    ul.children[0].classList.add('active');
    var div = divWrap.getElementsByClassName('tabs_content');
    div[0].style.display = 'flex';

    ul.addEventListener('click', function (e) {
        var target = e.target;

        if (target.tagName === 'LI') {
            for (var i = 0; i < div.length; i++) {
                if (target.getAttribute('data-tabs') === div[i].getAttribute('data-tabs')) {
                    div[i].style.display = 'flex';
                    ul.children[i].classList.add('active');
                } else {
                    div[i].style.display = 'none';
                    ul.children[i].classList.remove('active');
                }
            }

        }
    });

}


function showErr(err) {
    divBlock.style.display = 'none';
    ul.innerHTML = '';
    divWrap.innerHTML += '<div class="err">🅻🅾🅰🅳🅸🅽🅶 🅴🆁🆁🅾🆁 ... ' + err + ' </div>';
    button.addEventListener('click', sendRequest);
}





