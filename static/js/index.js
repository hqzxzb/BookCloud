var index = function() {};

/**
 * Query Book List for Explore page.
 */
index.queryExploreBookList = function(page, pageSize) {
	common.loading.start();
	$.ajax({
		type: "get",
		url: "/query/book/list",
		async: true,
		data: {
			"page": page,
			"pageSize": pageSize
		},
		dataType: "JSON",
		success: function(data) {
			$(".book-list").children().remove();
			var bookCardModel = $(".book-card-model .book-card");
			for(var i = 0; i < data.length; i++) {
				var bookCard = $(bookCardModel).clone();
				$(bookCard).find(".book-title").html(data[i].title);
				$(bookCard).find(".book-author").html(data[i].author);
				$(bookCard).find(".book-introduction").html(data[i].introduction);
				$(".book-list").append(bookCard);
			}
		},
		error: function() {

		},
		complete: function() {
			common.loading.end();
		}
	});
};

index.queryExploreBookList(1, 1);