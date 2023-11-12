/* Eps 157 */

// $('$h1').click(function () {
//   $('h1').css('color', 'purple');
// });

// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll('button')[i].addEventListener('click', function () {
//     document.querySelector('h1').style.color = 'purple';
//   });
// }

// -----------------------------

// $('button').click(function () {
//   $('h1').css('color', 'purple');
// });

// $('input').keypress(function (event) {
//   console.log(event.key);
// });

// $(document).keypress(function (event) {
//   console.log(event.key);
// });

// $(document).keypress(function (event) {
//   $('h1').text(event.key);
// });

// $('h1').on('mouseover', function () {
//   $('h1').css('color', 'purple');
// });

// $('h1').before('<button>New</button>'); //ini sebelum tag button
// $('h1').after('<button>New</button>'); //ini sesudah tag button
// $('h1').prepend('<button>New</button>'); //ini sebelum tag button tp didalamnua
// $('h1').append('<button>New</button>'); //ini sesudah tag button tp didalamnua

// $('button').on('click', function () {
//   $('h1').hide();
// });

// $('button').on('click', function () {
//   $('h1').show();
// });

// $('button').on('click', function () {
//   $('h1').toggle(); //buat disable enable
// });

// $('button').on('click', function () {
//   $('h1').fadeOut(); //transisi fadeout
// });

// $('button').on('click', function () {
//   $('h1').fadeIn(); //transisi fadein
// });

// $('button').on('click', function () {
//   $('h1').fadeToggle(); //transisi fadein-out
// });

// $('button').on('click', function () {
//   $('h1').slideUp(); //transisi slide up
// });

// $('button').on('click', function () {
//   $('h1').slideToggle(); //transisi slide down
// });

// $('button').on('click', function () {
//   $('h1').animate(); //buat animasi
// });

// $('button').on('click', function () {
//   $('h1').animate({ opacity: 0.5 }); //buat animasi CSS
// });

// $('button').on('click', function () {
//   $('h1').animate({ margin: '20%' }); //buat animasi CSS
// });

$('button').on('click', function () {
  $('h1').slideUp().slideDown().animate({ opacity: 0.5 }); //buat animasi CSS
});

//Reference:
// https://api.jquery.com/category/effects
// https://www.w3schools.com/jquery/query/jquery_ref_effects.asp
