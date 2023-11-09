//buat random angka
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// Math.random buat random dari 0 sampai 0.99999 (16 digit 9)
// * 6 biar 0 sampai 5.99999
// Math.floor buat pembulatan angkanya
// +1 biar dapat sampai 6

//buat random imagenya
var randomDiceImage = 'dice' + randomNumber1 + '.png';
// jadi bisa nampilin random dari dice1-6.png

//manfaatin tag img sama src
var imageRandomImageSoure = 'images/' + randomDiceImage;
// buat munculin di html randomnya
// jadi bisa nampilin random dari images/dice1-6.png

//ganti si tag htmlnya
//kode ini buat image pertama
var image1 = document.querySelectorAll('img')[0];
//select kode mana (img) | select gambar yg mana [0]

//atribut mana yg pengen dirubah
image1.setAttribute('src', imageRandomImageSoure);
// image1.setAttribute | nentuin variabelnya
// ('src', | nentuin tagnya
// imageRandomImageSoure); | masukin variablenya yang udah disetting

//Image Number 2
// ini versi lebih simplenya atau rapinya
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageRandomImageSoure2 = 'images/dice' + randomNumber2 + '.png';
document.querySelectorAll('img')[1].setAttribute('src', imageRandomImageSoure2);

//Nampilin Pemenang di Headingnya
if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player 1 Wins!';
} else if (randomNumber2 > randomNumber1) {
  document.querySelector('h1').innerHTML = 'Player 2 Wins!';
} else {
  document.querySelector('h1').innerHTML = 'Draw :(';
}
