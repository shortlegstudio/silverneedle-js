
var assert = require('assert');
var Name = require('./name');
const expect = require('chai').expect;

describe('Name', function() {
  describe('#generate(race)', function() {
    it('should return some names', function() {
        var n = new Name();
        var g = n.generate('human');
        expect(g.firstname).to.be.a('string');
        expect(g.lastname).to.be.a('string');
    });

    it('should throw error if race is invalid', function() {
        var n = new Name();
        expect(n.generate('garbage-in')).to.throw();
    });
  });
});
