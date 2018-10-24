require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"detail": "detail",
	},
	shim: {
		//保证，先加载JQuery，再加载
		"jquery-cookie": ["jquery"]
	}
})
require(['detail'], function(detail){
	detail.detail();
})