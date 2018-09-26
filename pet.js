var name = prompt('Как тебя зовут?', '');
alert('Отлично ' + name + ' , поехали дальше');

var age = prompt('Сколько тебе лет?');
alert('Неплохо, тогда ещё вопрос');

var pets = confirm('У тебя есть животные?');
 if (pets){
     var pets = prompt('Как его зовут?');
     var final = alert('Хорошо ' + name + ', что у тебя есть животные. Как дела у ' + pets + ' ?');
 }
else{
    alert('Как по мне, грустно жить без питомца')
}