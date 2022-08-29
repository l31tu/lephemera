let graphic
let graphic2

function setup() {
  createCanvas(1200, 400)

  graphic = createGraphics(1200, 1000)

  graphic.fill("white")
  graphic.textFont("cursive")
  graphic.textSize(107)
  graphic.textStyle(ITALIC)
  graphic.textAlign(CENTER, CENTER)
  graphic.text("(Issue Two: Over the Ocean)", width / 2, height / 2)

  graphic2 = createGraphics(1200, 1200)

  graphic2.fill("white")
  graphic2.textFont("sans-serif")
  graphic2.textSize(85)
  graphic2.textAlign(CENTER, BOTTOM)
  graphic2.text("Lomiga Lua: i Luga ‘o le Moana", width / 2, height / 2)
}

function draw () {
  background("blue")

  let val = sin(frameCount * 0.01) * 600

  image(graphic, 0, 0, 600 + val, 1200, 0, 0, 1200, 1200)
  copy(graphic2, 600 + val, 0, 600 - val, 1200, 0, 0, 1200, 1200)
}
