import _ from 'lodash'
import $ from 'jquery'
import dummy from 'lib/dummy'

export default function hello () {
  $ === dummy // for suppress warnings
  return _.escape('hello')
}
