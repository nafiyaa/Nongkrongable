function about(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById('about').textContent = this.responseText;
    };
    xhr.open('GET', url);
    xhr.send();
}

function article1(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById('robucca').textContent = this.responseText;
    };
    xhr.open('GET', url);
    xhr.send();
}

function article2(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById('nakoa').textContent = this.responseText;
    };
    xhr.open('GET', url);
    xhr.send();
}

function article3(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById('kara').textContent = this.responseText;
    };
    xhr.open('GET', url);
    xhr.send();
}

function article4(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById('wow').textContent = this.responseText;
    };
    xhr.open('GET', url);
    xhr.send();
}

about('/articlecontent/about.txt');
article1('/articlecontent/robucca.txt');
article2('/articlecontent/nakoa.txt');
article3('/articlecontent/kara.txt');
article4('/articlecontent/wow.txt');


