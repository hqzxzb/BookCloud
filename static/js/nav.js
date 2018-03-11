var nav = function() {};

nav.list = {
	"explore": "/views/explore.html",
	"login": "/views/login.html",
	"register": "/views/register.html",
	"usercenter": "/views/usercenter/usercenter.html",
	"bookInfo": "/views/book/bookInfo.html"
};

nav.loadNav = function() {
	$(".main").load(nav.list[window.location.hash.substring(1)]);
};

nav.goNav = function(navPage) {
	if(window.location.hash.substring(1) == navPage) {
		this.loadNav();
	} else {
		window.location.hash = navPage;
	}
}

nav.goNavWithQueryString = function(navPage, queryString) {
	
};

$(window).on("hashchange", function() {
	nav.loadNav();
});