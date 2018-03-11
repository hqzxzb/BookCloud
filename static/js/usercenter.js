//@ sourceURL=usercenter.js
var usercenter = function() {};

usercenter.init = function() {
	$("#userBooks").on("click", function() {
		usercenter.menusChange("#userBooks");
		$(".user-main").load("views/usercenter/userbooks.html", function() {
			usercenter.loadUserBooks();
		});
	});

	$("#userBooks").trigger("click");
};

usercenter.menusChange = function(selector) {
	$(".user-menus .active").removeClass("active");
	$(selector).addClass("active");
}

usercenter.loadUserBooks = function() {
	common.loading.start();
	var _this = this;
	$.ajax({
		type: "get",
		url: "/query/user/book/list",
		async: true,
		dataType: "JSON",
		success: function(data) {
			var userBookModel = $(".user-book-model .user-book");
			var userBookList = $(".user-book-list");
			for(var i = 0; i < data.length; i++) {
				var userBook = $(userBookModel).clone();
				$(userBook).find("#title").html(data[0].title);
				$(userBook).find("#starredSum span").html(data[0].star);
				$(userBook).find(".user-book-desc p").html(data[i].introduction);
				$(userBookList).append(userBook);
			}
		},
		error: function() {

		},
		complete: function() {
			common.loading.end();
		}
	});
};

usercenter.init();