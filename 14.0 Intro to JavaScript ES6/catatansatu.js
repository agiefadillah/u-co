var message = 'Hello';
var myName = 'Shan';

alert(message + myName);

// ----------------------------------------------------------------
// Count Length //
var text = prompt('Type your text');
var textCount = text.length;

alert('You have written ' + textCount + 'characters you have ' + (140 - textCount) + ' characters remaining.');

//or

var text = prompt('Type your text');
alert('You have written ' + text.length + ' characters you have ' + (140 - text.length) + ' characters remaining.');

// ----------------------------------------------------------------
// Slice //
var myName = 'Angela';
myName.slice(0, 3);

var text = prompt('Type your text');
var textUnder140 = text.slice(0, 140);
alert(textUnder140);

var text = prompt('Type your text');
alert(prompt('Compose your text: ').slice(0, 140));

// ----------------------------------------------------------------
// UpperCase LowerCase
var myName = 'Angela';
myName.toUpperCase();
myName.toLowerCase();

// ----------------------------------------------------------------

var nameee = prompt('What is your Name?');
var firstChar = nameee.slice(0, 1);
var upperCaseFirstChar = firstChar.toUpperCase;
var restOfName = nameee.slice(1, nameee.length);
restOfName = restOfName.toLowerCase;
var capitalisedName = upperCaseFirstChar + restOfName;
alert('Hello ' + capitalisedName);

// ----------------------------------------------------------------

var dogAge = prompt('Dog Age:');
var humanAge = (dogAge - 2) * 4 + 21;
alert('Your Dog is ' + humanAge + ' Years Old in Human Years.');

var x = 5;
x = x + 1; // 6 | Equal to:
x++;
x = x - 1; // 4 | Equal to:
x--;
x += 2; // 7

var x = 5;
var y = 3;
x += y; // 8
x -= y; // 2
x *= y; // 15
x /= y; // 1.66

var a = 16 % 4; /* 0
Operasi "16 % 4" adalah operasi modulo,
yang menghasilkan sisa dari pembagian bilangan pertama (16) dengan bilangan kedua (4). 
Dalam kasus ini, ketika 16 dibagi dengan 4, tidak ada sisa yang tersisa karena 16 adalah kelipatan dari 4. Dengan demikian, hasilnya adalah 0.
Dalam matematika, jika Anda membagi 16 dengan 4, Anda akan mendapatkan hasil yang bulat, yaitu 4, tanpa ada sisa. Dengan demikian, dalam operasi modulo, ketika tidak ada sisa yang tersisa, hasilnya adalah 0. Jadi, variabel `a` akan menyimpan nilai 0 setelah operasi tersebut dievaluasi.
*/

//What does y equal?
var x = 3;
var y = x++;
y += 1; // 4 (Bukan 5 karena += 1 jadi hasilnya 4)
