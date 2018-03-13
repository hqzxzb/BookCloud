var nav = function() {};

nav.list = {
	"explore": "/views/explore.html",
	"login": "/views/login.html",
	"register": "/views/register.html",
	"usercenter": "/views/usercenter/usercenter.html",
	"bookInfo": "/views/book/bookInfo.html",
	"bookUpdate": "/views/book/bookUpdate.html",
	"bookCreate": "/views/book/bookCreate.html"
};

nav.loadNav = function() {
	var navKey = window.location.hash.substring(1);
	if(navKey.indexOf("?") > -1) {
		navKey = navKey.substring(0, navKey.indexOf("?"));
	}
	$(".main").load(nav.list[navKey]);
};

nav.goNav = function(navPage) {
	if(window.location.hash.substring(1) == navPage) {
		this.loadNav();
	} else {
		window.location.hash = navPage;
	}
}

nav.goNavWithQueryString = function(navPage, queryString) {
	if(window.location.hash.substring(1, window.location.hash.indexOf("?") - 1) == navPage) {
		this.loadNav();
	} else {
		window.location.hash = navPage + "?" + queryString;
	}
};

$(window).on("hashchange", function() {
	nav.loadNav();
});