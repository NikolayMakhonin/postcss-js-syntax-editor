<table class="editor">
	<thead>
	<tr>
		<th>JS</th>
		<th>
			<span>CSS&nbsp;&nbsp;&nbsp;</span>
			<span><label><input type="checkbox" bind:checked="plugins.nested">un nested</label></span>
			<span><label><input type="checkbox" bind:checked="plugins.nano">optimized</label></span>
			<span><label><input type="checkbox" bind:checked="plugins.beautify">beautify</label></span>
		</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td class="js">
			<CodeMirror bind:code="js"/>
		</td>
		<td class="css">
			<CodeMirror bind:code="css"/>
		</td>
	</tr>
	</tbody>
</table>

<script>
	import JSON5 from 'json5'
	import {WebWorkerRunner} from '../main/browser/helpers/web-worker-runner'

	function createConverter() {
		// eslint-disable-next-line no-undef
		if (typeof window === 'undefined') {
			// Mock for server side
			return {
				cssToJs: o => o,
				jsToCss: o => o,
			}
		}

		// eslint-disable-next-line no-undef
		const {postcss} = window

		const webWorkerRunner = new WebWorkerRunner()

		const postcssPlugins = {
			nested: postcss.plugins.nested(),
			nano  : postcss.plugins.nano({
				preset: [
					'default', {
						discardComments: {
							removeAll: true,
						},
					}
				],
			}),
			beautify: postcss.plugins.beautify(),
		}

		return {
			cssToJs,
			jsToCss
		}

		function cssToJs(css) {
			try {
				let js = postcss().process(css, {
					stringifier: postcss.syntaxes.js.stringify
				}).css

				js = JSON5.stringify(JSON.parse(js), null, 4)

				return `;(${js})`
			} catch (ex) {
				return ex.toString()
			}
		}

		async function jsToCss(js, plugins) {
			let jsObject
			try {
				jsObject = await webWorkerRunner.run(js)
				const result = await postcss(Object.keys(plugins)
					.filter(o => plugins[o])
					.map(o => postcssPlugins[o])
					.filter(o => o))
					.process(js, {
						parser           : postcss.syntaxes.js.parse,
						requireFromString: () => jsObject
					})

				return result.css
			} catch (ex) {
				return `js = ${jsObject}\r\n\r\n============================\r\nPostcss Error:\r\n${ex.toString()}`
			}
		}
	}

	const converter = createConverter()

	export default {
		data() {
			let data
			// eslint-disable-next-line no-undef
			if (typeof window !== 'undefined') {
				// eslint-disable-next-line no-undef
				data = JSON.parse(localStorage.getItem('JsCssConverter'))
			}

			if (!data) {
				data = {
					js: `[
    '@at-rule-wiwhout-params',
    '@at-rule with params',
    '@at-rule (with params)',
    '// comment',
    {
        '.selector1': {
            color: '#0f0',
        },
        '.selector2': {
            color: '#0f0',
        },
    },
    '// another comment',
    {
        '@at-rule (with params)': {
            'and-content': 'value',
        },
        '.selector3': {
            color: '#0f0',
            '.sub-selector': {
                content: '"quotes is required for this CSS property"',
            },
        },
    },
]`,
					css: `
@at-rule-wiwhout-params;
@at-rule with params;
@at-rule (with params);
/* comment */
.selector1 {
	color: #0f0
}
.selector2 {
	color: #0f0
}
/* another comment */
@at-rule (with params) {
	and-content: value
}
.selector3 {
	color: #0f0;
	.sub-selector {
		content: "quotes is required for this CSS property"
	}
}
`,
				}
			}

			if (!data.plugins) {
				data.plugins = {
					nested  : false,
					nano    : true,
					beautify: true
				}
			}

			return data
		},
		async onstate({changed, current, previous}) {
			if (!this.converting) {
				this.converting = true
				try {
					if (changed.js || changed.plugins) {
						this.set({css: await converter.jsToCss(this.get().js, this.get().plugins)})
					} else if (changed.css) {
						this.set({js: converter.cssToJs(this.get().css)})
					}
					if (typeof window !== 'undefined') {
						// eslint-disable-next-line no-undef
						localStorage.setItem('JsCssConverter', JSON.stringify(this.get()))
					}
				} finally {
					this.converting = false
				}
			}
		},
		oncreate() {

		},

		components: {
			CodeMirror: './CodeMirror.svelte'
		}
	}
</script>

<style>
	.editor {
		width: 100%;
		height: 100%;
		table-layout: fixed;
		border-spacing: 0.3em;
		padding: 0;
	}

	.editor td {
		position: relative;
		padding: 0;
		overflow: hidden;
		border: solid black 1px;
	}

	:global(.CodeMirror)
	{
		/*font-family: "Segoe UI Symbol", "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";*/
		font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
		height: auto !important;
	}

	/*:global(.CodeMirror-scroll) {*/
		/*max-height: 400px;*/
	/*}*/
</style>