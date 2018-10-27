class User { 
constructor(name, surname) { 
this.name = name; 
this.surname = surname; 
} 

getFullName() { 
return this.name + ' ' + this.surname; 
} 
}function User(name, surname) { 
this.name = name; 
this.surname = surname; 

this.getFullName = function() { 
return this.name + ' ' + this.surname; 
} 
} 

function Student(name, surname, year) { 
User.apply(this, arguments); 
this.year = year; 

this.getCourse = function() { 
var date = new Date(); 
return date.getFullYear() - this.year; 
} 
} 

var student = new Student('Иван', 'Иванов', 2015); 
document.write(student.name + '<br>'); //выведет 'Иван' 
document.write(student.surname + '<br>'); //выведет 'Иванов' 
document.write(student.getFullName() + '<br>'); //выведет 'Иван Иванов' 
document.write(student.year + '<br>'); //выведет 2015 
document.write(student.getCourse() + '<br>'); //выведет 3 - третий курс, так как текущий год 2018

=============================================================================

<script> 

function User(name, surname) { 

this._name = name; 

this._surname = surname; 

this.getName = () => {return this._name;}; 

this.getSurname = () => {return this._surname;}; 

this.getFullName = () => {return this._name + " " + this._surname;}; 


} 

function Student(year) { 

this._year = year; 

User.call(this); 

this.setName = (name) => {this._name = name;}; 

this.setSurname = (surname) => {this._surname = surname;}; 

this.getYear = () => {return this._year;}; 

this.printFullName = () => {return this._name + " " + this._surname + 
" " + this._year;}; 

this.getCourse = () => {return 2017 - this._year;}; 

} 

var student = new Student(2013); 

student.setName("Alex"); 

alert(student.getName());//1 

student.setSurname("Krushovec"); 

alert(student.getSurname());//2 

alert(student.getFullName());//3 

alert(student.getYear());//4 

alert(student.printFullName());//5 

alert(student.getCourse());//6 

</script>