// scroll
const scrollLinks = document.querySelectorAll(".js-scroll")

scrollLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    const href = link.getAttribute('href')
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    })
  })
})

// progress
const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")

document.addEventListener("scroll", () => {
  const pixels = window.pageYOffset
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollableDistance = pageHeight - window.innerHeight

  const percentage = pixels / totalScrollableDistance

  progressTag.style.width = `${100 * percentage}%`
})

// header
const headerTag = document.querySelector("header")

// when we scroll the page, at a certain point (160px)
// toggle a class to the header
document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset

  if (pixels > 160) {
  	headerTag.classList.add("scrolled")
  } else {
    headerTag.classList.remove("scrolled")
  }
})

// typed out text
const searching = ["Searching for Samoa..."];
let i = 0;
let timer;

function typingEffect() {
	let word = searching[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('typed').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 500);
	};
	loopTyping();
};

function deletingEffect() {
	let word = searching[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('typed').innerHTML = word.join("");
		} else {
			if (searching.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 200);
	};
	loopDeleting();
};

typingEffect();

// audio
function playAudio(file){
  var audio = document.createElement('audio');
  audio.src = file;
  document.body.appendChild(audio);
  audio.play();

  audio.onended = function () {
    this.parentNode.removeChild(this);
  }
}
