const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const UserRepository = require('../src/UserRepository');
const Hydration = require('../src/Hydration');

describe('Hydration', function() {
    it('Should be a function', function() {
        expect(Hydration).to.be.a('function');
    });
});