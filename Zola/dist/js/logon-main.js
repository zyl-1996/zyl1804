require.config({
	paths: {
		"jquery": "jquery-1.11.3",
		"jquery-cookie": "jquery.cookie",
		"logon": "logon",
	},
	shim: {
		"jquery-cookie": ["jquery"],
	}
})
require(["logon"],function(logon){
	logon.logon();
})