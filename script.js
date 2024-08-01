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
setInterval(() => {
  koney();
}, 1);


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
          audio.play();
          played = true;
      }
  });
});
function roma() {
  var videoPath = "roma.mp4"; 
  var newTab = window.open();
    var newTab = window.open();
    newTab.document.write(`
      <style>
          body {
              margin: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              background-color: black; /* Задний фон для контраста */
          }
          video {
              max-width: 100%;
              max-height: 100%;
          }
      </style>
      <video autoplay controls>
          <source src="${videoPath}" type="video/mp4">
          Ваш браузер не поддерживает воспроизведение видео.
      </video>
  `);
  newTab.document.close();
    newTab.document.close();
}