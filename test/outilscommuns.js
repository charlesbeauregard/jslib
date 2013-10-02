var outilscommuns = require("../lib/outilscommuns");
var should = require('should');

describe("arrayHasOwnIndex", function() {
    describe("with empty array", function() {
	describe("with index 0", function() {
	    it("returns false", function() {
		var result = outilscommuns.arrayHasOwnIndex([], "0");
		result.should.eql(false);
	    });
	});
    });
    describe("with null", function() {
        describe("null (array) with index 0", function() {
           it("returns false", function() {
	       var result = outilscommuns.arrayHasOwnIndex(null, "0");
	       result.should.eql(false);
	   });
        });
	describe("not null and defined array with null index", function() {
	    it("returns false", function() {
		var result = outilscommuns.arrayHasOwnIndex([1, 2, 3], null);
		result.should.eql(false);
	    });
	});
	describe("not null and defined array with undefined index", function() {
	    it("returns false", function() {
		var result = outilscommuns.arrayHasOwnIndex([1, 2, 3], undefined);
		result.should.eql(false);
	    });
	});
    });
    describe("with undefined", function() {
	describe("with index 0", function() {
	    it("returns false", function() {
		var a;
		var result = outilscommuns.arrayHasOwnIndex(a, "0");
		result.should.eql(false);
	    });
	});
    });
    describe("with array extending another array", function() {
        describe("inherited index not own", function() {
	   it("returns false", function() {
	       var a = [1, 3, 5];
	       var b = Object.create(a);
	       var result = outilscommuns.arrayHasOwnIndex(a, "0");
	       result.should.eql(true);
	       result = outilscommuns.arrayHasOwnIndex(b, "0");
	       result.should.eql(false);
	       result = b[0];
	       result.should.eql(1);
	   });
	});
    });
    describe("with sparse array", function() {
        it("returns false when index undefined", function() {
	    var a = [];
	    a[0] = 10;
	    a[2] = 30;
	    var result = outilscommuns.arrayHasOwnIndex(a, "0");
	    result.should.eql(true);
	    result = outilscommuns.arrayHasOwnIndex(a, "1");
	    result.should.eql(false);
	    result = outilscommuns.arrayHasOwnIndex(a, "2");
	    result.should.eql(true);
        });
        it("returns false when index is not 0 or a positive integer", function() {
	    var a = [];
	    a[-1] = -20;
	    a["0"] = 10;
	    a[1] = 20
	    a["a"] = 20;
	    a["02"] = 30;
	    var result = outilscommuns.arrayHasOwnIndex(a, "0");
	    result.should.eql(true);
	    result = outilscommuns.arrayHasOwnIndex(a, "a");
	    result.should.eql(false);
	    result = outilscommuns.arrayHasOwnIndex(a, "1");
	    result.should.eql(true);
	    result = outilscommuns.arrayHasOwnIndex(a, "-1");
	    result.should.eql(false);
	    result = outilscommuns.arrayHasOwnIndex(a, "02");
	    result.should.eql(false);
	});
	it("returns false when the index is bigger than 2^32 - 2", function() {
	    var a = [0, 1];
	    var biggest = "4294967294";
	    var toobig = "4294967295";
	    a[biggest] = "Biggest allowed";
	    a[toobig] = "Too big";
	    var result = outilscommuns.arrayHasOwnIndex(a, biggest);
	    result.should.eql(true);
	    result = outilscommuns.arrayHasOwnIndex(a, toobig);
	    result.should.eql(false);
	});
    });
});
