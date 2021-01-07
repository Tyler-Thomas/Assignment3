//Task 1
console.log(document.getElementById('container'));

//Task 2
console.log(document.querySelector('container'));

//Task 3
console.log(document.getElementsByClassName('second'));

//Task 4
console.log(document.getElementsByClassName('third')[1]);

//Task 5
//document.getElementById('container').innerText="Hello.";

//Task 6
document.getElementsByClassName('footer')[0].innerHTML="<div class='main'></div>";

//Task 7
document.getElementsByClassName('footer')[0].innerHTML='';

//Task 8&9
document.getElementsByClassName('footer')[0].innerHTML="<li class='fourth'>four</li>";

//Task 10(You need to comment out Task 5 for this to work)
document.getElementsByTagName('ul')[0].innerHTML+=document.getElementsByClassName('footer')[0].innerHTML

//Task 12
let e= document.getElementsByTagName('ol')[0];
e.style.color="green";

//Task 13
e=document.getElementsByClassName('footer')[0];
e.parentNode.removeChild(e);