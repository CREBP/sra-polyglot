var expect = require('chai').expect;
import polyglot from '../src';
// FIXME: Not currently supported
describe.skip('Line numbers', ()=> {

	it('should be preserved for all engines', ()=> {
		var input =
			'1 Foo AND\n' +
			'2 Bar AND\n' +
			'3 Baz OR\n' +
			'4 Quz';

		var output = inputLines; // Output is the same as input (i.e. no operation or mangling should happen)


		// All engines should act the same so don't bother to break them up into different tests
		expect(polyglot.translate(input, 'pubmed')).to.equal(output);
		expect(polyglot.translate(input, 'ovid')).to.equal(output);
		expect(polyglot.translate(input, 'cochrane')).to.equal(output);
		expect(polyglot.translate(input, 'embase')).to.equal(output);
		expect(polyglot.translate(input, 'cinahl')).to.equal(output);
		expect(polyglot.translate(input, 'psycinfo')).to.equal(output);
		expect(polyglot.translate(input, 'scopus')).to.equal(output);
		expect(polyglot.translate(input, 'wos')).to.equal(output);
	});

})

// FIXME: Not currently supported
describe.skip('Line expression expansion', ()=> {
	var input =
		'1 Foo AND\n' +
		'2 Bar AND\n' +
		'3 Baz OR\n' +
		'4 Quz\n' +
		'5 OR /1-4';

	it('translate line expansion format -> PM', ()=> {
		expect(polyglot.translate('term*', 'pubmed')).to.equal(
			'1 Foo AND\n' +
			'2 Bar AND\n' +
			'3 Baz OR\n' +
			'4 Quz\n' +
			'5 #1 OR #2 OR #3 OR #4'
		);
	});

	it('translate line expansion format -> OV', ()=> {
		expect(polyglot.translate('term*', 'ovid')).to.equal(
			'1 Foo AND\n' +
			'2 Bar AND\n' +
			'3 Baz OR\n' +
			'4 Quz\n' +
			'5 1 OR 2 OR 3 OR 4'
		);
	});

	it('translate line expansion format -> CO', ()=> {
		expect(polyglot.translate('term*', 'cochrane')).to.equal(
			'1 Foo AND\n' +
			'2 Bar AND\n' +
			'3 Baz OR\n' +
			'4 Quz\n' +
			'5 #1 OR #2 OR #3 OR #4'
		);
	});

	it('translate line expansion format -> EM', ()=> {
		expect(polyglot.translate('term*', 'embase')).to.equal(
			'1 Foo AND\n' +
			'2 Bar AND\n' +
			'3 Baz OR\n' +
			'4 Quz\n' +
			'5 #1 OR #2 OR #3 OR #4'
		);
	});

	it('translate line expansion format -> CI', ()=> {
		expect(polyglot.translate('term*', 'cinahl')).to.equal(
			'1 Foo AND\n' +
			'2 Bar AND\n' +
			'3 Baz OR\n' +
			'4 Quz\n' +
			'5 S1 OR S2 OR S3 OR S4'
		);
	});

	it('translate line expansion format -> PY', ()=> {
		expect(polyglot.translate('term*', 'psycinfo')).to.equal(
			'1 Foo AND\n' +
			'2 Bar AND\n' +
			'3 Baz OR\n' +
			'4 Quz\n' +
			'5 #1 OR #2 OR #3 OR #4'
		);
	});

	it('translate line expansion format -> SC', ()=> {
		expect(polyglot.translate('term*', 'scopus')).to.equal(
			'1 Foo AND\n' +
			'2 Bar AND\n' +
			'3 Baz OR\n' +
			'4 Quz\n' +
			'5 #1 OR #2 OR #3 OR #4'
		);
	});

	it('translate line expansion format -> WS', ()=> {
		expect(polyglot.translate('term*', 'wos')).to.equal(
			'1 Foo AND\n' +
			'2 Bar AND\n' +
			'3 Baz OR\n' +
			'4 Quz\n' +
			'5 #1 OR #2 OR #3 OR #4'
		);
	});

});