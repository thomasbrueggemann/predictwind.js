var request = require("request");

module.exports = {

	get: function(username, callback) {

		var options = {
			"url": "http://forecast.predictwind.com/vodafone/" + username + ".json",
			"headers": {
				"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.109 Safari/537.36"
			}
		};

		// trigger the request
		request(options, function(error, response, body) {

			// check the response code
			if (!error && response.statusCode == 200) {

				console.log(body);

				// all is clear!
				return callback(response.statusCode, body);
			}

			return callback(response.statusCode || 500, null);
		});
	}
};