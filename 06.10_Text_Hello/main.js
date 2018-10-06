var str = 'var_text_hello';
             var arr = str.split('_');
             for (var i = 0; i < arr.length; i++) {
                 if (arr[0] != arr[i]) {
                     arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
                 }
             }
             str = arr.join('');
         console.log(str);
