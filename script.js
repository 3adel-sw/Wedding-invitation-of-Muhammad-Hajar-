// The End Of The Year Date To Countdown To
// 1000 Milliseconds = 1 Second

let countDownDate = new Date("aug 28 , 2024 00:00:00").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = dateDiff / 1000 / 60 / 60 / 24;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = (dateDiff % (1000 * 60 * 60)) / (1000 * 60);
  let seconds = (dateDiff % (1000 * 60)) / 1000;

  document.querySelector(".days").innerHTML =
    Math.floor(days) < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML =
    Math.floor(hours) < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = Math.floor(minutes); // < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = Math.floor(seconds); //< 10 ? `0${seconds}` : seconds;
}, 1000);

// Select Landing Page Element
let eventsPage = document.querySelector(".events");

// Get Array of imgs
let imgsArray = ["01.JPG"]; // 5 images

// landingPage.style.backgroundImage = `url(./imgs/${
//   imgsArray[Math.floor(Math.random() * imgsArray.length)]
// })`;

setInterval(() => {
  // Get Random Number
  let randomNum = Math.floor(Math.random() * imgsArray.length);

  // Change Background Image Url
  eventsPage.style.backgroundImage =
    'url("Images/' + imgsArray[randomNum] + '")';
}, 86400000);
//86400000
function playAudio() {
  document.getElementById("myAudio").play();
}

window.onload = function () {
  var audio = document.getElementById("myAudio");
  var playButton = document.getElementById("playButton");
  audio.play().catch(function (error) {
    console.log("Auto-play was prevented:", error);
    playButton.style.display = "block"; // عرض الزر لتشغيل الصوت يدوياً
  });
};

function playAudio() {
  var audio = document.getElementById("myAudio");
  audio.play();
}
document.addEventListener("click", function () {
  var audio = document.getElementById("myAudio");
  audio.play();
});
