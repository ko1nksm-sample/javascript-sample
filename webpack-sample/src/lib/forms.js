import $ from 'jquery'

export function init () {
  $(function () {
    $('button').on('click', function () {
      alert('clicked')
    })
  })
}

export function version () {
  return 1
}
