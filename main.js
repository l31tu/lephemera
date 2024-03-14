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

// Research 1 (Hyper-personalised Bookshelves)
const toggleRes1Tag = document.querySelector("button.toggle-res-1")
const exitRes1Tag = document.querySelector("div.toggle-res-1")
const res1Tag = document.querySelector(".res-1")

toggleRes1Tag.addEventListener("click", () => {
  res1Tag.classList.toggle("open")
  res2Tag.classList.remove("open")
  res3Tag.classList.remove("open")
  res4Tag.classList.remove("open")
  res5Tag.classList.remove("open")
  res6Tag.classList.remove("open")
  res7Tag.classList.remove("open")
})

exitRes1Tag.addEventListener("click", () => {
  res1Tag.classList.remove("open")
})

// Research 2 (Testing Grounds Residency)
const toggleRes2Tag = document.querySelector("button.toggle-res-2")
const exitRes2Tag = document.querySelector("div.toggle-res-2")
const res2Tag = document.querySelector(".res-2")

toggleRes2Tag.addEventListener("click", () => {
  res2Tag.classList.toggle("open")
  res1Tag.classList.remove("open")
  res3Tag.classList.remove("open")
  res4Tag.classList.remove("open")
  res5Tag.classList.remove("open")
  res6Tag.classList.remove("open")
  res7Tag.classList.remove("open")
})

exitRes2Tag.addEventListener("click", () => {
  res2Tag.classList.remove("open")
})

// Research 3 (48 Hours to Premier Residency)
const toggleRes3Tag = document.querySelector("button.toggle-res-3")
const exitRes3Tag = document.querySelector("div.toggle-res-3")
const res3Tag = document.querySelector(".res-3")

toggleRes3Tag.addEventListener("click", () => {
  res3Tag.classList.toggle("open")
  res1Tag.classList.remove("open")
  res2Tag.classList.remove("open")
  res4Tag.classList.remove("open")
  res5Tag.classList.remove("open")
  res6Tag.classList.remove("open")
  res7Tag.classList.remove("open")
})

exitRes3Tag.addEventListener("click", () => {
  res3Tag.classList.remove("open")
})

// Research 4 (Tree Paper Gallery Residency)
const toggleRes4Tag = document.querySelector("button.toggle-res-4")
const exitRes4Tag = document.querySelector("div.toggle-res-4")
const res4Tag = document.querySelector(".res-4")

toggleRes4Tag.addEventListener("click", () => {
  res4Tag.classList.toggle("open")
  res1Tag.classList.remove("open")
  res2Tag.classList.remove("open")
  res3Tag.classList.remove("open")
  res5Tag.classList.remove("open")
  res6Tag.classList.remove("open")
  res7Tag.classList.remove("open")
})

exitRes4Tag.addEventListener("click", () => {
  res4Tag.classList.remove("open")
})

// Research 5 (Centre for Projection Art Residency)
const toggleRes5Tag = document.querySelector("button.toggle-res-5")
const exitRes5Tag = document.querySelector("div.toggle-res-5")
const res5Tag = document.querySelector(".res-5")

toggleRes5Tag.addEventListener("click", () => {
  res5Tag.classList.toggle("open")
  res1Tag.classList.remove("open")
  res2Tag.classList.remove("open")
  res3Tag.classList.remove("open")
  res4Tag.classList.remove("open")
  res6Tag.classList.remove("open")
  res7Tag.classList.remove("open")
})

exitRes5Tag.addEventListener("click", () => {
  res5Tag.classList.remove("open")
})

// Research 6 (Quarry Pedagogies Camp)
const toggleRes6Tag = document.querySelector("button.toggle-res-6")
const exitRes6Tag = document.querySelector("div.toggle-res-6")
const res6Tag = document.querySelector(".res-6")

toggleRes6Tag.addEventListener("click", () => {
  res6Tag.classList.toggle("open")
  res1Tag.classList.remove("open")
  res2Tag.classList.remove("open")
  res3Tag.classList.remove("open")
  res4Tag.classList.remove("open")
  res5Tag.classList.remove("open")
  res7Tag.classList.remove("open")
})

exitRes6Tag.addEventListener("click", () => {
  res6Tag.classList.remove("open")
})

// Research 7 (Tautai Pacific Arts Trust Fale-ship Residency)
const toggleRes7Tag = document.querySelector("button.toggle-res-7")
const exitRes7Tag = document.querySelector("div.toggle-res-7")
const res7Tag = document.querySelector(".res-7")

toggleRes7Tag.addEventListener("click", () => {
  res7Tag.classList.toggle("open")
  res1Tag.classList.remove("open")
  res2Tag.classList.remove("open")
  res3Tag.classList.remove("open")
  res4Tag.classList.remove("open")
  res5Tag.classList.remove("open")
  res6Tag.classList.remove("open")
})

exitRes7Tag.addEventListener("click", () => {
  res7Tag.classList.remove("open")
})

// Research 8 (Werkplaats Typografie)
// const toggleRes8Tag = document.querySelector("button.toggle-res-8")
// const exitRes8Tag = document.querySelector("div.toggle-res-8")
// const res8Tag = document.querySelector(".res-8")

// toggleRes8Tag.addEventListener("click", () => {
//   res8Tag.classList.toggle("open")
//   res1Tag.classList.remove("open")
//   res2Tag.classList.remove("open")
//   res3Tag.classList.remove("open")
//   res4Tag.classList.remove("open")
//   res5Tag.classList.remove("open")
//   res6Tag.classList.remove("open")
//   res7Tag.classList.remove("open")
// })

// exitRes8Tag.addEventListener("click", () => {
//   res8Tag.classList.remove("open")
// })

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

// Archive 1 (Quarry Pedagogies Camp: B-roll)
const toggleArc1Tag = document.querySelector("button.toggle-arc-1")
const exitArc1Tag = document.querySelector("div.toggle-arc-1")
const arc1Tag = document.querySelector(".arc-1")

toggleArc1Tag.addEventListener("click", () => {
  arc1Tag.classList.toggle("open")
  arc2Tag.classList.remove("open")
})

exitArc1Tag.addEventListener("click", () => {
  arc1Tag.classList.remove("open")
})

// Archive 2 (Kefe o'e Siamani)
const toggleArc2Tag = document.querySelector("button.toggle-arc-2")
const exitArc2Tag = document.querySelector("div.toggle-arc-2")
const arc2Tag = document.querySelector(".arc-2")

toggleArc2Tag.addEventListener("click", () => {
  arc2Tag.classList.toggle("open")
  arc1Tag.classList.remove("open")
})

exitArc2Tag.addEventListener("click", () => {
  arc2Tag.classList.remove("open")
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

// 'Afa'afakasi 0 (overview)
const toggleAak0Tag = document.querySelector("button.toggle-pub-aak-0")
const exitAak0Tag = document.querySelector("div.toggle-pub-aak-0")
const aak0Tag = document.querySelector(".pub-aak-0")

toggleAak0Tag.addEventListener("click", () => {
  aak0Tag.classList.toggle("open")
  aak1Tag.classList.remove("open")
  aak2Tag.classList.remove("open")
  aak3Tag.classList.remove("open")
  aak4Tag.classList.remove("open")
  aak5Tag.classList.remove("open")
  aak6Tag.classList.remove("open")
  aak7Tag.classList.remove("open")
  aak8Tag.classList.remove("open")
  aak9Tag.classList.remove("open")
  aak10Tag.classList.remove("open")
  aak11Tag.classList.remove("open")
  aak12Tag.classList.remove("open")
  laP1Tag.classList.remove("open")
})

exitAak0Tag.addEventListener("click", () => {
  aak0Tag.classList.remove("open")
})

// 'Afa'afakasi 1 (online publication)
const toggleAak1Tag = document.querySelector("button.toggle-pub-aak-1")
const exitAak1Tag = document.querySelector("div.toggle-pub-aak-1")
const aak1Tag = document.querySelector(".pub-aak-1")

toggleAak1Tag.addEventListener("click", () => {
  aak1Tag.classList.toggle("open")
  aak0Tag.classList.remove("open")
  aak2Tag.classList.remove("open")
  aak3Tag.classList.remove("open")
  aak4Tag.classList.remove("open")
  aak5Tag.classList.remove("open")
  aak6Tag.classList.remove("open")
  aak7Tag.classList.remove("open")
  aak8Tag.classList.remove("open")
  aak9Tag.classList.remove("open")
  aak10Tag.classList.remove("open")
  aak11Tag.classList.remove("open")
  aak12Tag.classList.remove("open")
  laP1Tag.classList.remove("open")
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
  aak0Tag.classList.remove("open")
  aak1Tag.classList.remove("open")
  aak3Tag.classList.remove("open")
  aak4Tag.classList.remove("open")
  aak5Tag.classList.remove("open")
  aak6Tag.classList.remove("open")
  aak7Tag.classList.remove("open")
  aak8Tag.classList.remove("open")
  aak9Tag.classList.remove("open")
  aak10Tag.classList.remove("open")
  aak11Tag.classList.remove("open")
  aak12Tag.classList.remove("open")
  laP1Tag.classList.remove("open")
})

exitAak2Tag.addEventListener("click", () => {
  aak2Tag.classList.remove("open")
})

// 'Afa'afakasi 3 (Mission to Seafarers)
const toggleAak3Tag = document.querySelector("button.toggle-pub-aak-3")
const exitAak3Tag = document.querySelector("div.toggle-pub-aak-3")
const aak3Tag = document.querySelector(".pub-aak-3")

toggleAak3Tag.addEventListener("click", () => {
  aak3Tag.classList.toggle("open")
  aak0Tag.classList.remove("open")
  aak1Tag.classList.remove("open")
  aak2Tag.classList.remove("open")
  aak4Tag.classList.remove("open")
  aak5Tag.classList.remove("open")
  aak6Tag.classList.remove("open")
  aak7Tag.classList.remove("open")
  aak8Tag.classList.remove("open")
  aak9Tag.classList.remove("open")
  aak10Tag.classList.remove("open")
  aak11Tag.classList.remove("open")
  aak12Tag.classList.remove("open")
  laP1Tag.classList.remove("open")
})

exitAak3Tag.addEventListener("click", () => {
  aak3Tag.classList.remove("open")
})

// 'Afa'afakasi 4 (RM Gallery)
const toggleAak4Tag = document.querySelector("button.toggle-pub-aak-4")
const exitAak4Tag = document.querySelector("div.toggle-pub-aak-4")
const aak4Tag = document.querySelector(".pub-aak-4")

toggleAak4Tag.addEventListener("click", () => {
  aak4Tag.classList.toggle("open")
  aak0Tag.classList.remove("open")
  aak1Tag.classList.remove("open")
  aak2Tag.classList.remove("open")
  aak3Tag.classList.remove("open")
  aak5Tag.classList.remove("open")
  aak6Tag.classList.remove("open")
  aak7Tag.classList.remove("open")
  aak8Tag.classList.remove("open")
  aak9Tag.classList.remove("open")
  aak10Tag.classList.remove("open")
  aak11Tag.classList.remove("open")
  aak12Tag.classList.remove("open")
  laP1Tag.classList.remove("open")
})

exitAak4Tag.addEventListener("click", () => {
  aak4Tag.classList.remove("open")
})

// 'Afa'afakasi 5 (Lomiga Lua)
const toggleAak5Tag = document.querySelector("button.toggle-pub-aak-5")
const exitAak5Tag = document.querySelector("div.toggle-pub-aak-5")
const aak5Tag = document.querySelector(".pub-aak-5")

toggleAak5Tag.addEventListener("click", () => {
  aak5Tag.classList.toggle("open")
  aak0Tag.classList.remove("open")
  aak1Tag.classList.remove("open")
  aak2Tag.classList.remove("open")
  aak3Tag.classList.remove("open")
  aak4Tag.classList.remove("open")
  aak6Tag.classList.remove("open")
  aak7Tag.classList.remove("open")
  aak8Tag.classList.remove("open")
  aak9Tag.classList.remove("open")
  aak10Tag.classList.remove("open")
  aak11Tag.classList.remove("open")
  aak12Tag.classList.remove("open")
  laP1Tag.classList.remove("open")
})

exitAak5Tag.addEventListener("click", () => {
  aak5Tag.classList.remove("open")
})

// 'Afa'afakasi 6 (Testing Grounds / Melbourne Fringe)
const toggleAak6Tag = document.querySelector("button.toggle-pub-aak-6")
const exitAak6Tag = document.querySelector("div.toggle-pub-aak-6")
const aak6Tag = document.querySelector(".pub-aak-6")

toggleAak6Tag.addEventListener("click", () => {
  aak6Tag.classList.toggle("open")
  aak0Tag.classList.remove("open")
  aak1Tag.classList.remove("open")
  aak2Tag.classList.remove("open")
  aak3Tag.classList.remove("open")
  aak4Tag.classList.remove("open")
  aak5Tag.classList.remove("open")
  aak7Tag.classList.remove("open")
  aak8Tag.classList.remove("open")
  aak9Tag.classList.remove("open")
  aak10Tag.classList.remove("open")
  aak11Tag.classList.remove("open")
  aak12Tag.classList.remove("open")
  laP1Tag.classList.remove("open")
})

exitAak6Tag.addEventListener("click", () => {
  aak6Tag.classList.remove("open")
})

// ‘Afa‘afakasi 7 (West Space Window)
const toggleAak7Tag = document.querySelector("button.toggle-pub-aak-7")
const exitAak7Tag = document.querySelector("div.toggle-pub-aak-7")
const aak7Tag = document.querySelector(".pub-aak-7")

toggleAak7Tag.addEventListener("click", () => {
  aak7Tag.classList.toggle("open")
  aak0Tag.classList.remove("open")
  aak1Tag.classList.remove("open")
  aak2Tag.classList.remove("open")
  aak3Tag.classList.remove("open")
  aak4Tag.classList.remove("open")
  aak5Tag.classList.remove("open")
  aak6Tag.classList.remove("open")
  aak8Tag.classList.remove("open")
  aak9Tag.classList.remove("open")
  aak10Tag.classList.remove("open")
  aak11Tag.classList.remove("open")
  aak12Tag.classList.remove("open")
  laP1Tag.classList.remove("open")
})

exitAak7Tag.addEventListener("click", () => {
  aak7Tag.classList.remove("open")
})

// ‘Afa‘afakasi 8 (Sāmoan Language Week Event at Collingwood Yards)
const toggleAak8Tag = document.querySelector("button.toggle-pub-aak-8")
const exitAak8Tag = document.querySelector("div.toggle-pub-aak-8")
const aak8Tag = document.querySelector(".pub-aak-8")

toggleAak8Tag.addEventListener("click", () => {
  aak8Tag.classList.toggle("open")
  aak0Tag.classList.remove("open")
  aak1Tag.classList.remove("open")
  aak2Tag.classList.remove("open")
  aak3Tag.classList.remove("open")
  aak4Tag.classList.remove("open")
  aak5Tag.classList.remove("open")
  aak6Tag.classList.remove("open")
  aak7Tag.classList.remove("open")
  aak9Tag.classList.remove("open")
  aak10Tag.classList.remove("open")
  aak11Tag.classList.remove("open")
  aak12Tag.classList.remove("open")
  laP1Tag.classList.remove("open")
})

exitAak8Tag.addEventListener("click", () => {
  aak8Tag.classList.remove("open")
})

// ‘Afa‘afakasi 9 (Incinerator Gallery Boadle Hall)
const toggleAak9Tag = document.querySelector("button.toggle-pub-aak-9")
const exitAak9Tag = document.querySelector("div.toggle-pub-aak-9")
const aak9Tag = document.querySelector(".pub-aak-9")

toggleAak9Tag.addEventListener("click", () => {
  aak9Tag.classList.toggle("open")
  aak0Tag.classList.remove("open")
  aak1Tag.classList.remove("open")
  aak2Tag.classList.remove("open")
  aak3Tag.classList.remove("open")
  aak4Tag.classList.remove("open")
  aak5Tag.classList.remove("open")
  aak6Tag.classList.remove("open")
  aak7Tag.classList.remove("open")
  aak8Tag.classList.remove("open")
  aak10Tag.classList.remove("open")
  aak11Tag.classList.remove("open")
  aak12Tag.classList.remove("open")
  laP1Tag.classList.remove("open")
})

exitAak9Tag.addEventListener("click", () => {
  aak9Tag.classList.remove("open")
})

// ‘Afa‘afakasi 10 (Federation Square Big Screen)
const toggleAak10Tag = document.querySelector("button.toggle-pub-aak-10")
const exitAak10Tag = document.querySelector("div.toggle-pub-aak-10")
const aak10Tag = document.querySelector(".pub-aak-10")

toggleAak10Tag.addEventListener("click", () => {
  aak10Tag.classList.toggle("open")
  aak0Tag.classList.remove("open")
  aak1Tag.classList.remove("open")
  aak2Tag.classList.remove("open")
  aak3Tag.classList.remove("open")
  aak4Tag.classList.remove("open")
  aak5Tag.classList.remove("open")
  aak6Tag.classList.remove("open")
  aak7Tag.classList.remove("open")
  aak8Tag.classList.remove("open")
  aak9Tag.classList.remove("open")
  aak11Tag.classList.remove("open")
  aak12Tag.classList.remove("open")
  laP1Tag.classList.remove("open")
})

exitAak10Tag.addEventListener("click", () => {
  aak10Tag.classList.remove("open")
})

// ‘Afa‘afakasi 11 (Incinerator Gallery Public Program)
const toggleAak11Tag = document.querySelector("button.toggle-pub-aak-11")
const exitAak11Tag = document.querySelector("div.toggle-pub-aak-11")
const aak11Tag = document.querySelector(".pub-aak-11")

toggleAak11Tag.addEventListener("click", () => {
  aak11Tag.classList.toggle("open")
  aak0Tag.classList.remove("open")
  aak1Tag.classList.remove("open")
  aak2Tag.classList.remove("open")
  aak3Tag.classList.remove("open")
  aak4Tag.classList.remove("open")
  aak5Tag.classList.remove("open")
  aak6Tag.classList.remove("open")
  aak7Tag.classList.remove("open")
  aak8Tag.classList.remove("open")
  aak9Tag.classList.remove("open")
  aak10Tag.classList.remove("open")
  aak12Tag.classList.remove("open")
  laP1Tag.classList.remove("open")
})

exitAak11Tag.addEventListener("click", () => {
  aak11Tag.classList.remove("open")
})

// ‘Afa‘afakasi 12 (Lomiga Tolu)
const toggleAak12Tag = document.querySelector("button.toggle-pub-aak-12")
const exitAak12Tag = document.querySelector("div.toggle-pub-aak-12")
const aak12Tag = document.querySelector(".pub-aak-12")

toggleAak12Tag.addEventListener("click", () => {
  aak12Tag.classList.toggle("open")
  aak0Tag.classList.remove("open")
  aak1Tag.classList.remove("open")
  aak2Tag.classList.remove("open")
  aak3Tag.classList.remove("open")
  aak4Tag.classList.remove("open")
  aak5Tag.classList.remove("open")
  aak6Tag.classList.remove("open")
  aak7Tag.classList.remove("open")
  aak8Tag.classList.remove("open")
  aak9Tag.classList.remove("open")
  aak10Tag.classList.remove("open")
  aak11Tag.classList.remove("open")
  laP1Tag.classList.remove("open")
})

exitAak12Tag.addEventListener("click", () => {
  aak12Tag.classList.remove("open")
})

// Letters at Play (Gertrude Street Projection Festival)
const toggleLaP1Tag = document.querySelector("button.toggle-pub-lap-1")
const exitLaP1Tag = document.querySelector("div.toggle-pub-lap-1")
const laP1Tag = document.querySelector(".pub-lap-1")

toggleLaP1Tag.addEventListener("click", () => {
  laP1Tag.classList.toggle("open")
  aak0Tag.classList.remove("open")
  aak1Tag.classList.remove("open")
  aak2Tag.classList.remove("open")
  aak3Tag.classList.remove("open")
  aak4Tag.classList.remove("open")
  aak5Tag.classList.remove("open")
  aak6Tag.classList.remove("open")
  aak7Tag.classList.remove("open")
  aak8Tag.classList.remove("open")
  aak9Tag.classList.remove("open")
  aak10Tag.classList.remove("open")
  aak11Tag.classList.remove("open")
})

exitLaP1Tag.addEventListener("click", () => {
  laP1Tag.classList.remove("open")
})
