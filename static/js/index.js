var index = function() {};

index.init = function() {
	var navNow = window.location.hash.substring(1);
	nav.goNav(navNow == "" ? "explore" : navNow);
	
	$("#explore").on("click", function() {
		nav.goNav("explore");
	});

	$("#login").on("click", function() {
		nav.goNav("login");
	});
	
	$("#register").on("click", function() {
		nav.goNav("register");
	});
	
	$("#usercenter").on("click", function() {
		nav.goNav("usercenter");
	});
};

index.init();

//Test Code
$("#login").hide();
$("#register").hide();
$("#usercenter").show().find("b").html("hqzxzb");
