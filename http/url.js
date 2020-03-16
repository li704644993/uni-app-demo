const url = {
	// #ifdef H5
	baseUrl: '/api',
	// #endif
	// #ifndef H5
	baseUrl: "http://api.avatardata.cn",
	// #endif
	queryWeather: '/Weather/Query',

}

export default url
