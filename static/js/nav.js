var nav = function() {};

nav.list = {
	"explore": "/explore.html",
	"login": "/login.html",
	"register": "/register.html",
	"user": "/user.html"
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

$(window).on("hashchange", function() {
	nav.loadNav();
});