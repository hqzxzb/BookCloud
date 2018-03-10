var explore = function() {};

explore.init = function() {
	explore.queryExploreBookCount();

	$("#perPage").on("change", function() {
		localStorage.setItem("perCountPage", $(this).val());
		explore.queryExploreBookCount();
	});

	var perCountPage = parseInt(localStorage.getItem("perCountPage"));
	perCountPage = ((isNaN(perCountPage) || typeof perCountPage == 'undefined' || perCountPage == 0) ? 20 : perCountPage);
	$("#perPage option[value=" + perCountPage + "]").attr("selected", "true");
};

/**
 * Init Page bar
 * @param {Object} count
 */
explore.initPageBar = function(count) {
	var pages = parseInt(count / $("#perPage").val());
	pages = (count % $("#perPage").val() == 0 ? pages : pages + 1);
	$("#pageNum").html(1);
	$("#pageCount").html(pages);
	if(pages > 1) {
		$(".pre-page").hasClass("disabled") ? null : $(".pre-page").addClass("disabled");
		$(".next-page").hasClass("disabled") ? $(".next-page").removeClass("disabled") : null;
	}

	$(".pre-page").on("click", function() {
		var pageNow = parseInt($("#pageNum").html());
		if(!$(this).hasClass("disabled")) {
			if(pageNow > 1) {
				explore.goPage(pageNow - 1);
				if(pageNow - 1 < parseInt($("#pageCount").html())) {
					$(".next-page").removeClass("disabled");
				}
				if(pageNow - 1 <= 1) {
					$(this).addClass("disabled");
				}
			} else {
				$(this).addClass("disabled");
			}
		}
	});

	$(".next-page").on("click", function() {
		var pageNow = parseInt($("#pageNum").html());
		if(!$(this).hasClass("disabled")) {
			var pageCount = parseInt($("#pageCount").html());
			if(pageNow < pageCount) {
				explore.goPage(pageNow + 1);
				if(pageNow + 1 > 1) {
					$(".pre-page").removeClass("disabled");
				}
				if(pageNow + 1 >= pageCount) {
					$(this).addClass("disabled");
				}
			} else {
				$(this).addClass("disabled");
			}
		}
	});

	this.goPage(1);
};

/**
 * Open X page
 * @param {Object} page
 */
explore.goPage = function(page) {
	this.queryExploreBookList(page, parseInt($("#perPage").val()), function() {
		$("#pageNum").html(page);
	});
};

/**
 * Query Book Count
 */
explore.queryExploreBookCount = function() {
	common.loading.start();
	var _this = this;
	$.ajax({
		type: "get",
		url: "/query/book/count",
		async: true,
		dataType: "JSON",
		success: function(data) {
			_this.initPageBar(data.count);
		},
		error: function() {

		},
		complete: function() {
			common.loading.end();
		}
	});
}

/**
 * Query Book List for Explore page.
 * @param {Object} page
 * @param {Object} pageSize
 */
explore.queryExploreBookList = function(page, pageSize, callback) {
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
			callback();
		},
		error: function() {

		},
		complete: function() {
			common.loading.end();
		}
	});
};

explore.init();