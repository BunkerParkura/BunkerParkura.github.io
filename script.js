function pashalko() {
  window.location.href = "egor.html";
}

let r = 255,
  g = 0,
  b = 0;
let step = 5;

function Ucolor() {
  if (r === 255 && g < 255 && b === 0) {
    g += step;
  } else if (g === 255 && r > 0 && b === 0) {
    r -= step;
  } else if (g === 255 && b < 255 && r === 0) {
    b += step;
  } else if (b === 255 && g > 0 && r === 0) {
    g -= step;
  } else if (b === 255 && r < 255 && g === 0) {
    r += step;
  } else if (r === 255 && b > 0 && g === 0) {
    b -= step;
  }
}

function koney() {
  var str = "КОНЕЙ";
  var color = `rgb(${r},${g},${b})`;
  var style = [
    "padding: 10rem;",
    "background: white;",
    "font: 7.0rem/1 Georgia;",
    `color: ${color};`,
  ].join("");

  console.log("%c%s", style, str);
  Ucolor();
}
// setInterval(() => {
//   koney();
// }, 1);


document.addEventListener('DOMContentLoaded', function() {

  var audio = document.createElement('audio');

  var source = document.createElement('source');
  source.src = 'audio/bindi.mp3';
  source.type = 'audio/mpeg';
  audio.appendChild(source);

  document.body.appendChild(audio);

  var played = false;

  document.addEventListener('click', function() {
      if (!played) {
          audio.play().then(function() {
              console.log('Audio is playing');
          }).catch(function(error) {
              console.log('Error playing audio:', error);
          });
          played = true;
      }
  });
});