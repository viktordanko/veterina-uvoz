module.exports = {
	plugins: {
		'postcss-preset-env': {
			autoprefixer: {
				grid: true,
				flexbox: 'no-2009',
			},
			stage: 3,
			features: {
				'custom-properties': false,
			},
		},
	},
}