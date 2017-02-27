var expect = require('chai').expect;
var polyglot = require('..');

describe('Translate multiple MESH terms (PubMed -> *)', function() {

	it('translate PM `"term1 term2"[Mesh]` -> PM `"term1 term2"[Mesh]`', function() {
		expect(polyglot.translate('"term1 term2"[Mesh]', 'pubmed')).to.equal('"term1 term2"[Mesh]');
		expect(polyglot.translate('"term1 and term2"[Mesh]', 'pubmed')).to.equal('"term1 and term2"[Mesh]');
	});

	it('translate PM `"term1 term2"[Mesh]` -> OV `exp term1 term2/`', function() {
		expect(polyglot.translate('"term1 term2"[Mesh]', 'ovid')).to.equal('exp term1 term2/');
		expect(polyglot.translate('"term1 and term2"[Mesh]', 'ovid')).to.equal('exp term1 and term2/');
	});

	it('translate PM `"term1 term2"[Mesh]` -> CO `[mh "term1 term2"]`', function() {
		expect(polyglot.translate('"term1 term2"[Mesh]', 'cochrane')).to.equal('[mh "term1 term2"]');
		expect(polyglot.translate('"term1 and term2"[Mesh]', 'cochrane')).to.equal('[mh "term1 and term2"]');
	});

	it('translate PM `"term1 term2"[Mesh]` -> EM `"term1 term2"/exp`', function() {
		expect(polyglot.translate('"term1 term2"[Mesh]', 'embase')).to.equal("'term1 term2'/exp");
		expect(polyglot.translate('"term1 and term2"[Mesh]', 'embase')).to.equal("'term1 and term2'/exp");
	});

	it('translate PM `"term1 term2"[Mesh]` -> CI `(MH "term1 term2+")`', function() {
		expect(polyglot.translate('"term1 term2"[Mesh]', 'cinahl')).to.equal('(MH "term1 term2+")');
		expect(polyglot.translate('"term1 and term2"[Mesh]', 'cinahl')).to.equal('(MH "term1 and term2+")');
	});

	it('translate PM `"term1 term2"[Mesh]` -> PY `"term1 term2"`', function() {
		expect(polyglot.translate('"term1 term2"[Mesh]', 'psycinfo')).to.equal('"term1 term2"');
		expect(polyglot.translate('"term1 and term2"[Mesh]', 'psycinfo')).to.equal('"term1 and term2"');
	});

	it('translate PM `"term1 term2"[Mesh]` -> SC `INDEXTERMS(term1 term2)`', function() {
		expect(polyglot.translate('"term1 term2"[Mesh]', 'scopus')).to.equal('INDEXTERMS(term1 term2)');
		expect(polyglot.translate('"term1 and term2"[Mesh]', 'scopus')).to.equal('INDEXTERMS(term1 and term2)');
	});

	it('translate PM `"term1 term2"[Mesh]` -> WS `"term1 term2"`', function() {
		expect(polyglot.translate('"term1 term2"[Mesh]', 'wos')).to.equal('"term1 term2"');
		expect(polyglot.translate('"term1 and term2"[Mesh]', 'wos')).to.equal('"term1 and term2"');
	});

});

describe('Translate multiple MESH terms (Ovid -> *)', function() {

	it('translate OV `exp term1 term2/` -> PM `"term1 term2"[Mesh]`', function() {
		expect(polyglot.translate('exp term1 term2/', 'pubmed')).to.equal('"term1 term2"[Mesh]');
		expect(polyglot.translate('exp term1 and term2/', 'pubmed')).to.equal('"term1 and term2"[Mesh]');
		expect(polyglot.translate('exp "term1 and term2"/', 'pubmed')).to.equal('"term1 and term2"[Mesh]');
	});

	it('translate OV `exp term1 term2/` -> OV `exp term1 term2/`', function() {
		expect(polyglot.translate('exp term1 term2/', 'ovid')).to.equal('exp term1 term2/');
		expect(polyglot.translate('exp term1 and term2/', 'ovid')).to.equal('exp term1 and term2/');
		expect(polyglot.translate('exp "term1 and term2"/', 'ovid')).to.equal('exp term1 and term2/');
	});

	it('translate OV `exp term1 term2/` -> CO `[mh "term1 term2"]`', function() {
		expect(polyglot.translate('exp term1 term2/', 'cochrane')).to.equal('[mh "term1 term2"]');
		expect(polyglot.translate('exp term1 and term2/', 'cochrane')).to.equal('[mh "term1 and term2"]');
		expect(polyglot.translate('exp "term1 and term2"/', 'cochrane')).to.equal('[mh "term1 and term2"]');
	});

	it('translate OV `exp term1 term2/` -> EM `"term1 term2"/exp`', function() {
		expect(polyglot.translate('exp term1 term2/', 'embase')).to.equal("'term1 term2'/exp");
		expect(polyglot.translate('exp term1 and term2/', 'embase')).to.equal("'term1 and term2'/exp");
		expect(polyglot.translate('exp "term1 and term2"/', 'embase')).to.equal("'term1 and term2'/exp");
	});

	it('translate OV `exp term1 term2/` -> CI `(MH "term1 term2+")`', function() {
		expect(polyglot.translate('exp term1 term2/', 'cinahl')).to.equal('(MH "term1 term2+")');
		expect(polyglot.translate('exp term1 and term2/', 'cinahl')).to.equal('(MH "term1 and term2+")');
		expect(polyglot.translate('exp "term1 and term2"/', 'cinahl')).to.equal('(MH "term1 and term2+")');
	});

	it('translate PM `exp term1 term2/` -> PY `"term1 term2"`', function() {
		expect(polyglot.translate('exp term1 term2/', 'psycinfo')).to.equal('"term1 term2"');
		expect(polyglot.translate('exp term1 and term2/', 'psycinfo')).to.equal('"term1 and term2"');
		expect(polyglot.translate('exp "term1 and term2"/', 'psycinfo')).to.equal('"term1 and term2"');
	});

	it('translate PM `exp term1 term2/` -> SC `INDEXTERMS(term1 term2)`', function() {
		expect(polyglot.translate('exp term1 term2/', 'scopus')).to.equal('INDEXTERMS(term1 term2)');
		expect(polyglot.translate('exp term1 and term2/', 'scopus')).to.equal('INDEXTERMS(term1 and term2)');
		expect(polyglot.translate('exp "term1 and term2"/', 'scopus')).to.equal('INDEXTERMS(term1 and term2)');
	});

	it('translate OV `exp term1 term2/` -> WS `"term1 term2"`', function() {
		expect(polyglot.translate('exp term1 term2/', 'wos')).to.equal('"term1 term2"');
		expect(polyglot.translate('exp term1 and term2/', 'wos')).to.equal('"term1 and term2"');
		expect(polyglot.translate('exp "term1 and term2"/', 'wos')).to.equal('"term1 and term2"');
	});

});
