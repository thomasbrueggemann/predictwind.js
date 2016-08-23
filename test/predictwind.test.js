'use strict';

var predictwind = require("../predictwind");

describe("predictwind.js", function() {

	this.timeout(150000);

	it("should download the json with HTTP 200", function(done) {

		predictwind.download("Varuna", function(status, body) {

			status.should.equal(200);
			return done();
		});
	});

	it("should extract the position", function(done) {

		predictwind.get("Varuna", function(pos, more) {

			pos.length.should.equal(2);
			more.name.should.equal("Varuna");
			(more.time > 0).should.equal(true);

			return done();
		});
	});
});