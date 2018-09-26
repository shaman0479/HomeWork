var a;
var b;
var c;
var x;
var D;
var x1;
var x2;
if(confirm){
    a = prompt('Введите число a =');
    b = prompt('Введите число b =');
    c = prompt('Введите число c =');
    D = b*b - 4*a*c;
    alert('Дискриминант D =' + D);
    if(D > 0){
        x1 = (-b + Math.sqrt(D)) / 2*a;
        x2 = (-b - Math.sqrt(D)) / 2*a;
        alert('x1', 'x2');
    }
    else if(D < 0){
        alert('x не имеет корней');
    }
else{
        x = -b / 2*a;
        alert(' x = ' + x);
    }
        alert('Спасибо!');
    
}
