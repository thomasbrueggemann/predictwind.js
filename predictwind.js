var request = require("request");

module.exports = {

	// DOWNLOAD
	download: function(username, callback) {

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

				body = JSON.parse(body);

				// all is clear!
				return callback(response.statusCode, body);
			}

			return callback(response.statusCode || 500, null);
		});
	},

	// GET
	get: function(username, callback) {

		// download the positions
		module.exports.download(username, function(status, json) {

			json.route.sort(function(a, b) {
				return b.t - a.t;
			});

			var last = json.route[0];

			return callback([
				last.p.lat,
				last.p.lon
			], {
				"course": parseInt(last.bearing),
				"speed": parseFloat(last.bsp),
				"name": username,
				"time": last.t
			});
		});
	}
};