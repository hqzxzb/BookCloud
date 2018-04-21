//@ sourceURL=bookInfo.js
var bookInfo = function() {};

bookInfo.init = function() {
	var bookID = common.getQueryString("bookID");
	if(bookID != null) {
		this.loadBook(bookID);
	}
};

bookInfo.loadBook = function(bookID) {
	common.loading.start();
	$.ajax({
		type: "get",
		url: "/book/query/info",
		async: true,
		data: {
			"bookID": bookID
		},
		dataType: "JSON",
		success: function(data) {
			bookInfo.initBookInfo(data.data);
		},
		error: function() {

		},
		complete: function() {
			common.loading.end();
		}
	});
};

bookInfo.initBookInfo = function(data) {
	$(".book-info-meta").attr("data-bookID", data.bookID);
	$(".book-title").html(data.title);
	$(".book-author span").html(data.author);
	$(".book-desc").html(data.introduction);
	$(".book-create-time span").html(data.createTime);
	$(".book-last-update-time span").html(data.lastUpdateTime);
	$(".book-starred span").html(data.star);
	$(".book-readme").attr("data-readme-path", data.readmePath);

	$("#updateBook").on("click", function() {
		nav.goNavWithQueryString("bookUpdate", "bookID=" + $(".book-info-meta").attr("data-bookID"));
	});
	$("#deleteBook").on("click", function() {
		bookInfo.deleteBook($(".book-info-meta").attr("data-bookID"));
	});
	$("#readBook").on("click", function() {
		return null;
	});
};

bookInfo.deleteBook = function(bookID) {

};

bookInfo.init();