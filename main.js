// Popups
const toggleVTag = document.querySelector(".toggle-v");
const vTag = document.querySelector(".v-popup");

toggleVTag.addEventListener("click", () => {
  vTag.classList.toggle("show");
  fTag.classList.remove("show");
  wTag.classList.remove("show");
});

const toggleFTag = document.querySelector(".toggle-f");
const fTag = document.querySelector(".f-popup");

toggleFTag.addEventListener("click", () => {
  fTag.classList.toggle("show");
  vTag.classList.remove("show");
  wTag.classList.remove("show");
});

const toggleWTag = document.querySelector(".toggle-w");
const wTag = document.querySelector(".w-popup");

toggleWTag.addEventListener("click", () => {
  wTag.classList.toggle("show");
  vTag.classList.remove("show");
  fTag.classList.remove("show");
});

// Change Background
document.addEventListener("click", changeBground);
var colors = {
  taupe: "#483C32",
  mocha: "#967969",
  lightBrown: "#C4A484",
  darkBrown: "#5C4033",
  copper: "#B87333",
  chocolate: "#7B3F00",
  camel: "#C19A6B",
  burntUmber: "#6E260E",
};

const colorKeys = Object.keys(colors);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function changeBground() {
  const randKey = getRandomInt(0, colorKeys.length);
  console.log(randKey, colorKeys[randKey]);
  const color = colors[colorKeys[randKey]];
  document.body.style.backgroundColor = color;
}

// ANALYTICS

// Main
$("#information").on("click", function (e) {
  window.goatcounter.count({
    path: "click-information",
    title: "Click Information",
    event: true,
  });
});

$("#research").on("click", function (e) {
  window.goatcounter.count({
    path: "click-research",
    title: "Click Research",
    event: true,
  });
});

$("#archiving").on("click", function (e) {
  window.goatcounter.count({
    path: "click-archiving",
    title: "Click Archiving",
    event: true,
  });
});

$("#publishing").on("click", function (e) {
  window.goatcounter.count({
    path: "click-publishing",
    title: "Click Publishing",
    event: true,
  });
});

$("#instagram").on("click", function (e) {
  window.goatcounter.count({
    path: "click-instagram",
    title: "Click Instagram",
    event: true,
  });
});

// Research Tab

// Archiving Tab

// Publishing Tab

// Return Count
window.goatcounter.count({
  path: function (p) {
    return "click-information-" + p;
    return "click-research-" + p;
    return "click-archiving-" + p;
    return "click-publishing-" + p;
    return "click-instagram-" + p;
  },
  event: true,
});
