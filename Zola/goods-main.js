require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"goods": "goods",
	},
	shim: {
		//保证，先加载JQuery，再加载
		"jquery-cookie": ["jquery"],
	}
})
require(['goods'], function(goods){
	goods.goods();
})

