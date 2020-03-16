module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'http://api.avatardata.cn/',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
				  '^/api': ''
				},
			}
		},
	}
}
