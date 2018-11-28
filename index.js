'use strict'

const $ = window.$ = require('jquery')

function rand (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

$('#pushForPopcorn').click(() => {
  const id = 'a' + rand(1, 10000000000000)
  const neuesElement = $('<img id="' + id + '" src="./popcorn.d8fd4492.png" height="100"/>')
  $('body').append(neuesElement)
  neuesElement.css('left', rand(1, 100) + '%')

  const windowHeight = $(window).height()
  const lineHeight = $('#' + id).height()
  const desiredBottom = 0

  const newPosition = windowHeight - (lineHeight + desiredBottom)

  $('#' + id).animate({top: newPosition, duration: rand(250, 2500)}, 1000, function () {
    $('#' + id).css({
      bottom: desiredBottom,
      top: 'auto'
    })
  })
})
