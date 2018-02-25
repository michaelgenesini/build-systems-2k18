// RollUp plugins
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import image from 'rollup-plugin-image'
import url from 'rollup-plugin-url'

const production = !process.env.ROLLUP_WATCH

export default {
    input: './src/index.js',
    output: {
		file: './dist/bundle.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		postcss({
			plugins: []
		}),
		babel({
			exclude: 'node_modules/**',
			presets: ['es2015-rollup']
		})
	]
}