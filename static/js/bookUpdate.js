//@ sourceURL=bookUpdate.js
var bookUpdate = function() {};

bookUpdate.init = function() {
	var bookID = common.getQueryString("bookID");
	if(bookID != null) {
		this.getBookInfoForUpdate(bookID);
	}
};

bookUpdate.getBookInfoForUpdate = function(bookID) {
	common.loading.start();
	$.ajax({
		type: "get",
		url: "/query/book/update/info",
		async: true,
		data: {
			"bookID": bookID
		},
		dataType: "JSON",
		success: function(data) {
			bookUpdate.initBookUpdateInfo(data);
		},
		error: function() {

		},
		complete: function() {
			common.loading.end();
		}
	});
};

bookUpdate.initBookUpdateInfo = function(data) {
	$("#bookTitle").val(data.title);
	$("#bookDesc").val(data.introduction);
	$("#bookGit").val(data.git);
	$("#bookGitUsername").val(data.gitUsername);
};

bookUpdate.init();