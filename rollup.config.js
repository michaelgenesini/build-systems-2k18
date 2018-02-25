// RollUp plugins
import babel from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'

export default {
    input: './src/index.js',
    output: {
		file: './dist/bundle.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		postcss(),
		babel({
			exclude: 'node_modules/**',
			presets: ['es2015-rollup']
		})
	]
}