var defaultCode = {
	success: "0000",
	failure: "9999"
};

exports.success = function(content, data) {
	return {
		data: typeof data == "undefined" ? null : data,
		code: defaultCode.success,
		msg: content
	};
};

exports.failure = function(content, code) {
	return {
		data: null,
		code: typeof code == "undefined" ? defaultCode.failure : code,
		msg: content
	};
};