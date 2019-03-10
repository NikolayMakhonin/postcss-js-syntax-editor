const postcss = require('postcss')
const postcssJsSyntax = require('postcss-js-syntax').default
const postcssNested = require('postcss-nested')

if (typeof window !== 'undefined') {
	window.postcss = postcss
	postcss.syntaxes = {
		js: postcssJsSyntax
	}
	postcss.plugins = {
		nested: postcssNested
	}
}
