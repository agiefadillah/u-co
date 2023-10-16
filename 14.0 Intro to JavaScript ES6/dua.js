var text = prompt('Type your text');
var textCount = text.length;

alert('You have written ' + textCount + 'characters you have ' + (140 - textCount) + ' characters remaining.');

//or

var text = prompt('Type your text');
alert('You have written ' + textCount + 'characters you have ' + (140 - textCount.length) + ' characters remaining.');
