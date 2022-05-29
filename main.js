// Information
const toggleInfoTag = document.querySelector("a.toggle-info")
const exitTag = document.querySelector("div.toggle-info")
const infoTag = document.querySelector(".information")

toggleInfoTag.addEventListener("click", () => {
  infoTag.classList.toggle("open")
  pubsTag.classList.remove("open")
  archTag.classList.remove("open")
  resTag.classList.remove("open")
})

exitTag.addEventListener("click", () => {
  infoTag.classList.remove("open")
})

// Publications
const togglePubsTag = document.querySelector("a.toggle-pubs")
const exitPubsTag = document.querySelector("div.toggle-pubs")
const pubsTag = document.querySelector(".publications")

togglePubsTag.addEventListener("click", () => {
  pubsTag.classList.toggle("open")
  infoTag.classList.remove("open")
  archTag.classList.remove("open")
  resTag.classList.remove("open")
})

exitPubsTag.addEventListener("click", () => {
  pubsTag.classList.remove("open")
})

// Archives
const toggleArchTag = document.querySelector("a.toggle-arch")
const exitArchTag = document.querySelector("div.toggle-arch")
const archTag = document.querySelector(".archives")

toggleArchTag.addEventListener("click", () => {
  archTag.classList.toggle("open")
  infoTag.classList.remove("open")
  pubsTag.classList.remove("open")
  resTag.classList.remove("open")
})

exitArchTag.addEventListener("click", () => {
  archTag.classList.remove("open")
})

// Research
const toggleResTag = document.querySelector("a.toggle-res")
const exitResTag = document.querySelector("div.toggle-res")
const resTag = document.querySelector(".research")

toggleResTag.addEventListener("click", () => {
  resTag.classList.toggle("open")
  infoTag.classList.remove("open")
  pubsTag.classList.remove("open")
  archTag.classList.remove("open")
})

exitResTag.addEventListener("click", () => {
  resTag.classList.remove("open")
})
