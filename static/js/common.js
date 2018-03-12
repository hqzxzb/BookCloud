var common = function() {};

/**
 * Loading Bar
 */
common.loading = {
	timer: null,
	barLocation: 0,
	start: function() {
		var loadingHeight = "5px";
		var loaddiv = document.createElement("div");
		loaddiv.style.position = "absolute";
		loaddiv.style.top = 0;
		loaddiv.style.left = 0;
		loaddiv.style.width = "100%";
		loaddiv.style.height = loadingHeight;
		loaddiv.id = "loading";
		this.barLocation = 0;
		var bar = document.createElement("div");
		bar.style.width = this.barLocation + "%";
		bar.style.height = loadingHeight;
		bar.style.background = "#02B875";
		bar.style.transition = "all 0.5s ease";
		bar.id = "loading-bar";
		loaddiv.appendChild(bar);
		document.body.appendChild(loaddiv);
		var _ = this;
		this.timer = setInterval(function() {
			_.barLocation += 5;
			if(_.barLocation > 70) {
				clearInterval(_.timer);
			} else {
				bar.style.width = _.barLocation + "%";
			}
		}, 600);
	},
	end: function() {
		clearInterval(this.timer);
		document.querySelector("#loading-bar").style.width = "100%";
		setTimeout(function() {
			document.querySelector("#loading").remove();
		}, 500);
	}
};

common.getQueryString = function(paramName) {
	var reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)", "i");
	var r = window.location.hash.substr(window.location.hash.indexOf("?") + 1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}