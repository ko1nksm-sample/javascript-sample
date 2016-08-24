import hello from 'lib/hello'
import { init } from 'lib/forms'

import $ from 'jquery'
import _ from 'lodash'
import moment from 'moment'
import './style.scss'

let func = () => {
  document.write('<p>' + hello() + '</p>')
}

func()

document.write('<p>jQuery: ' + $.fn.jquery + '</p>')
document.write('<p>lodash: ' + _.VERSION + '</p>')
document.write('<p>momen:' + moment.version + '</p>')

init()
