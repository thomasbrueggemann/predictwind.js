'use strict';

var predictwind = require("../predictwind");

describe("predictwind.js", function() {

	it("should download the json with HTTP 200", function(done) {

		predictwind.get("Varuna", function(status, body) {

			status.should.equal(200);
			console.log(body);
			return done();
		});
	});
});