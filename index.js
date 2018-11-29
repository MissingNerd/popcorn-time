import popcornImg from './popcorn.png'

const $ = window.$ = require('jquery')

function rand (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let popcorn = []

$('#pushForPopcorn').click(() => {
  const newElement = $('<img src="./' + popcornImg + '" height="100"/>')
  $('body').append(newElement)
  newElement.css('left', rand(1, 100) + '%').css('transform', 'rotate(' + rand(0, 359) + 'deg)')

  popcorn.unshift(newElement)

  const windowHeight = $(window).height()
  const lineHeight = newElement.height()

  const newPosition = windowHeight - lineHeight

  newElement.animate({top: newPosition, duration: rand(250, 2500)}, 1000, function () {
    newElement.css({
      bottom: 0,
      top: 'auto'
    })
  })

  popcorn.splice(200).forEach(e => e.fadeOut('slow'))
})
