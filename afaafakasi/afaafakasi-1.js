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

// when we scroll the page, at a certain point (80px)
// toggle a class to the header
document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset

  if (pixels > 160) {
  	headerTag.classList.add("scrolled")
  } else {
    headerTag.classList.remove("scrolled")
  }
})
