import 'json5/lib/register'
import config from './config-export.json5'
import {configure, runTests} from './mocha-helpers'

configure({
	...config
})
runTests()
