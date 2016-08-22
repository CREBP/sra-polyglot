var expect = require('chai').expect;
var polyglot = require('..');

describe('Translate search phrases (PubMed -> *)', function() {

	it('translate PM `"term1 term2"` -> PM `"term1 term2"`', function() {
		expect(polyglot.translate('"term1 term2"', 'pubmed')).to.equal('("term1 term2")');
	});

	it('translate PM `"term1 term2"` -> OV `term1 term2`', function() {
		expect(polyglot.translate('"term1 term2"', 'ovid')).to.equal('(term1 term2)');
	});

	it('translate PM `"term1 term2"` -> CO `"term1 term2"`', function() {
		expect(polyglot.translate('"term1 term2"', 'cochrane')).to.equal('("term1 term2")');
	});

	it('translate PM `"term1 term2"` -> EM `"term1 term2"`', function() {
		expect(polyglot.translate('"term1 term2"', 'embase')).to.equal('("term1 term2")');
	});

	it('translate PM `"term1 term2"` -> CI `"term1 term2"`', function() {
		expect(polyglot.translate('"term1 term2"', 'cinahl')).to.equal('("term1 term2")');
	});

	it('translate PM `"term1 term2"` -> WS `"term1 term2"`', function() {
		expect(polyglot.translate('"term1 term2"', 'webofscience')).to.equal('("term1 term2")');
	});

});

describe('Translate search phrases (Ovid -> *)', function() {

	it('translate OV `exp term1 term2/` -> PM `"term1 term2"`', function() {
		expect(polyglot.translate('"term1 term2"', 'pubmed')).to.equal('("term1 term2")');
	});

	it('translate OV `exp term1 term2/` -> OV `term1 term2`', function() {
		expect(polyglot.translate('"term1 term2"', 'ovid')).to.equal('(term1 term2)');
	});

	it('translate OV `exp term1 term2/` -> CO `"term1 term2"`', function() {
		expect(polyglot.translate('"term1 term2"', 'cochrane')).to.equal('("term1 term2")');
	});

	it('translate OV `exp term1 term2/` -> EM `"term1 term2"`', function() {
		expect(polyglot.translate('"term1 term2"', 'embase')).to.equal('("term1 term2")');
	});

	it('translate OV `exp term1 term2/` -> CI `"term1 term2"`', function() {
		expect(polyglot.translate('"term1 term2"', 'cinahl')).to.equal('("term1 term2")');
	});

	it('translate OV `exp term1 term2/` -> WS `"term1 term2"`', function() {
		expect(polyglot.translate('"term1 term2"', 'webofscience')).to.equal('("term1 term2")');
	});

});