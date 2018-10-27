<script> 

function MyString() { 

this._string = ""; 

this.setString = (string) => {this._string = string;}; 

this.reverse = () => { 

let str = []; 

for (let j = this._string.length; j > 0; j--) { 

str.push(this._string[j]); 

} 

let str_tr = ""; 

str_tr = str.join(""); 

return str_tr; 

}; 

this.ucFirst = () => { 

let substr = this._string.slice(0, 1); 

let subStrHuge = substr.toUpperCase(); 

let tr_str = this._string.slice(1); 

let gotStr = subStrHuge + tr_str; 

return gotStr; 

}; 

} 

var createStr = new MyString(); 

createStr.setString("abcde"); 

alert(createStr.reverse()); 

alert(createStr.ucFirst()); 

</script>

=========================================================================================

<script type="text/javascript"> 
function MyString() { 

this.reverse = function(string) { 
return string.split('').reverse().join(''); 
} 

this.ucFirst = function(string) { 
return string.substr(0, 1).toUpperCase() + string.substr(1); 
} 

this.ucWords = function(string) { 
var arr = string.split(' '); 
for (key in arr) { 
arr[key] = arr[key].substr(0, 1).toUpperCase() + arr[key].substr(1); 
} 
return string = arr.join(' '); 
} 
} 

var str = new MyString(); 
document.write(str.reverse('abcde') + '<br>'); //выведет 'edcba' 
document.write(str.ucFirst('abcde') + '<br>'); //выведет 'Abcde' 
document.write(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde' 

</script>