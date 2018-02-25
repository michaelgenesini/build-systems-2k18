const production = !process.env.ROLLUP_WATCH

export default {
    input: './src/index.js',
    output: {
		file: './dist/bundle.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	}
}