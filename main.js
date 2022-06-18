// INFORMATION
const toggleInfoTag = document.querySelector("button.toggle-info")
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

// RESEARCH
const toggleResTag = document.querySelector("button.toggle-res")
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

// Research 1 (Testing Grounds Residency)
const toggleRes1Tag = document.querySelector("button.toggle-res-1")
const exitRes1Tag = document.querySelector("div.toggle-res-1")
const res1Tag = document.querySelector(".res-1")

toggleRes1Tag.addEventListener("click", () => {
  res1Tag.classList.toggle("open")
  res2Tag.classList.remove("open")
})

exitRes1Tag.addEventListener("click", () => {
  res1Tag.classList.remove("open")
})

// Research 2 (Hyper-personalised Bookshelves)
const toggleRes2Tag = document.querySelector("button.toggle-res-2")
const exitRes2Tag = document.querySelector("div.toggle-res-2")
const res2Tag = document.querySelector(".res-2")

toggleRes2Tag.addEventListener("click", () => {
  res2Tag.classList.toggle("open")
  res1Tag.classList.remove("open")
})

exitRes2Tag.addEventListener("click", () => {
  res2Tag.classList.remove("open")
})

// ARCHIVES
const toggleArchTag = document.querySelector("button.toggle-arch")
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

// Archive 1 (Distributed Goods)
const toggleArc1Tag = document.querySelector("button.toggle-arc-1")
const exitArc1Tag = document.querySelector("div.toggle-arc-1")
const arc1Tag = document.querySelector(".arc-1")

toggleArc1Tag.addEventListener("click", () => {
  arc1Tag.classList.toggle("open")
})

exitArc1Tag.addEventListener("click", () => {
  arc1Tag.classList.remove("open")
})

// PUBLICATIONS
const togglePubsTag = document.querySelector("button.toggle-pubs")
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

// 'Afa'afakasi 1 (online publication)
const toggleAak1Tag = document.querySelector("button.toggle-pub-aak-1")
const exitAak1Tag = document.querySelector("div.toggle-pub-aak-1")
const aak1Tag = document.querySelector(".pub-aak-1")

toggleAak1Tag.addEventListener("click", () => {
  aak1Tag.classList.toggle("open")
  aak2Tag.classList.remove("open")
})

exitAak1Tag.addEventListener("click", () => {
  aak1Tag.classList.remove("open")
})

// 'Afa'afakasi 2 (Twosixty install)
const toggleAak2Tag = document.querySelector("button.toggle-pub-aak-2")
const exitAak2Tag = document.querySelector("div.toggle-pub-aak-2")
const aak2Tag = document.querySelector(".pub-aak-2")

toggleAak2Tag.addEventListener("click", () => {
  aak2Tag.classList.toggle("open")
  aak1Tag.classList.remove("open")
})

exitAak2Tag.addEventListener("click", () => {
  aak2Tag.classList.remove("open")
})
