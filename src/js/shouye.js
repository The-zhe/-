//banner
var banner = document.querySelector('.banner');
var btns = document.querySelectorAll('.banner>ol>li');
var pics = document.querySelectorAll('.banner>ul>li');
var leftBtn = document.querySelector(".left");
var rightBtn = document.querySelector(".right");
var num = 0; //存放当前的索引。
var timer = null;

for (var i = 0; i < btns.length; i++) {
    btns[i].index = i;
    btns[i].onmouseover = function() {
        num = this.index;
        tab();
    }
}

rightBtn.onclick = function() {
    num++;
    if (num > btns.length - 1) {
        num = 0;
    }
    tab();
}

leftBtn.onclick = function() {
    num--;
    if (num < 0) {
        num = btns.length - 1;
    }
    tab();
}

function tab() {
    for (var i = 0; i < btns.length; i++) {
        btns[i].className = '';
        pics[i].className = '';
    }
    btns[num].className = 'active';
    pics[num].className = 'show';
}

timer = setInterval(() => {
    rightBtn.onclick();
}, 2000);

banner.onmouseover = () => {
    clearInterval(timer);
}
banner.onmouseout = () => {
    timer = setInterval(() => {
        rightBtn.onclick();
    }, 3000);
}

//local地区选择
var localplace = document.querySelector('.h-local>.h-localplace');
var scity = document.querySelector('.h-local>.hr-city>.now-city>.select-city');
var lcitys = document.querySelectorAll('.h-local>.hr-city>.hot-city>.list-other>.name-city');
var olcitys = document.querySelectorAll('.h-local>.hr-city>.other-city>.list-other>.name-city');

// console.log(localplace);
// console.log(scity);
// console.log(lcitys);
// console.log(olcitys);

for (var i = 0; i < lcitys.length; i++) {
    lcitys[i].onclick = function() {
        localplace.innerHTML = this.innerHTML;
        scity.innerHTML = this.innerHTML;
    }
}

for (var j = 0; j < olcitys.length; j++) {
    olcitys[j].onclick = function() {
        localplace.innerHTML = this.innerHTML;
        scity.innerHTML = this.innerHTML;
    }
}