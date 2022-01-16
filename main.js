const toggleInfoTag = document.querySelector("a.toggle-info")
const exitTag = document.querySelector("div.toggle-info")
const infoTag = document.querySelector(".information")

toggleInfoTag.addEventListener("click", () => {
  infoTag.classList.toggle("open")
})

exitTag.addEventListener("click", () => {
  infoTag.classList.remove("open")
})
