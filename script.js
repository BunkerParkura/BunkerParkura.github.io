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
  var videoPath = "Roma.mp4"; 
  document.body.innerHTML = `
        <style>
            body {
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: black;
            }
            video {
                max-width: 100%;
                max-height: 100%;
            }
        </style>
        <video autoplay controls>
            <source src="${videoPath}" type="video/mp4">
        </video>
    `;
}
function playSound(filePath) {
  const audio = new Audio(filePath);
  audio.play();
}
function imgfly(src) {
  const img = document.createElement('img');
  img.src = src;
  img.className = 'roma-img';
  img.style.top = Math.random() * window.innerHeight + 'px';
  img.style.left = Math.random() * window.innerWidth + 'px';
  img.style.transform = `translate(${Math.random() * 1000 - 500}px, ${Math.random() * 1000 - 500}px)`;
  document.body.appendChild(img);

  setTimeout(() => {
      img.style.transform = `translate(${Math.random() * 1000 - 500}px, ${Math.random() * 1000 - 500}px)`;
  }, 0);
}
function showModal(message) {
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modalContent');
  modalContent.textContent = message;
  modal.style.display = 'flex';
}
document.getElementById('XDBUTTON').addEventListener('click', async () => {


  

  setInterval(() => {
      imgfly('https://cdn.discordapp.com/attachments/1267978765850382447/1268017310027874375/Vechny_zhidJegor.gif?ex=66aed925&is=66ad87a5&hm=5597039309f92163b34eda610009cd22ed2e5eaad66e20c9bdf849df524c85f3&');
      imgfly('https://media2.giphy.com/media/DxLwpcdRL6aZO25gN7/giphy.gif');
      imgfly('https://cdn.discordapp.com/attachments/874694279409307718/1253112848867921920/pCUmVcplDDjzMdQWrfq6iFB3BIizOiMTRHLiXDQxcocmomnA3WqgfrZowAAAAAAAAAAAAAAAAAAAAAAA.gif?ex=66aeadc8&is=66ad5c48&hm=013c59bf668876264ee617233bd9e49cf4ac9135e87746752585821ea26dc10f&');
      imgfly('https://media.discordapp.net/attachments/872799367638171652/1034492469481578516/attachment.gif?ex=66ae5030&is=66acfeb0&hm=b1c6a63e26a2575623e9314b37e75bfbc3e1dd101f00fad29534570f4f0b96d6&');
      imgfly('https://cdn.discordapp.com/attachments/233231551192760320/1113828223055302748/ezgif.com-crop_2.gif?ex=66aedf9e&is=66ad8e1e&hm=a1b043b90ec415f8dd125dac5cbab4cf834428633352b1415753990258eb8477&');
      imgfly('https://media.discordapp.net/attachments/874694279409307718/1175154820240388117/attachment-3-3.gif?ex=66ae8436&is=66ad32b6&hm=aa54e4bcb58ec2bf0528884eac8eaf4ee7a9507bc63a1432629256f77a6a58a6&');
      imgfly('https://media.discordapp.net/attachments/1044084883485630464/1167534458811994223/6C8B2791-ADA7-4356-8B36-6F23BCFD7C92.gif?ex=66ae7ab2&is=66ad2932&hm=d60b5037917723980941b00846d12ae67a558e954011a4bea2c467692d8cdc9b&');

      playSound('sounds/goofy-ahh-backrooms.mp3');
      playSound('sounds/goofy-ahh-car-horn-sound-effect.mp3');
      playSound('sounds/goofy-ahh-laugh-meme.mp3');
      playSound('sounds/goofy-ahh-laugh.mp3');
      playSound('sounds/goofy-ahh-ringtone.mp3');
      playSound('sounds/goofy-ahh-sounds.mp3');
      playSound('sounds/goofy-ahh-spongebob-sound.mp3');
      playSound('sounds/goofy-ahh.mp3');
      playSound('sounds/goofy-ahhh.mp3');
      playSound('sounds/goofy-yell_LvAybRd.mp3');
      playSound('sounds/gugugugu.mp3');
      playSound('sounds/hold-up-tiktok.mp3');
      playSound('sounds/ohio-goofy-ahh.mp3');
      playSound('sounds/quandale-goofy-ahh-laugh.mp3');
      playSound('sounds/raaaah.mp3');
      playSound('sounds/scooby-doo-laugh-sped-up.mp3');
      playSound('sounds/what-the-hell-goofy-ahh-slv-sounds.mp3');

  }, 0);
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    showModal(`Your IP is: ${data.ip}`);
} catch (error) {
}
});
