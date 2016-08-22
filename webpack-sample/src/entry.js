import hello from 'hello'
import $ from 'jquery'
import 'style.scss'

let func = () => {
  document.write('<p>' + hello() + '</p>')
}

func()

document.write('<p>jQuery: ' + $.fn.jquery + '</p>')
