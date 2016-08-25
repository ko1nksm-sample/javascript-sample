import hello from 'lib/hello'
import { init } from 'lib/forms'
import world from 'lib/world.jsx'

import $ from 'jquery'
import _ from 'lodash'
import moment from 'moment'

let func = () => {
  document.write('<p>' + hello() + ' <span id="name"></span></p>')
}

func()

world()

document.write('<p>jQuery: ' + $.fn.jquery + '</p>')
document.write('<p>lodash: ' + _.VERSION + '</p>')
document.write('<p>momen:' + moment.version + '</p>')

init()
