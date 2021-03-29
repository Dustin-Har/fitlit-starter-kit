const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const data = require('../data/users');

describe('User Repository', function() {
    let userRepository;
    beforeEach(function() {
        userRepository = new UserRepository(data);
    });
    it('Should be a function', function() {
        expect(UserRepository).to.be.a('function');
    });
    it('Should holds onto all of the User objects', function() {
        expect(userRepository.data).to.eql(data);
    });
    it('Should be able to take a user Id and return their information', function() {
        expect(userRepository.returnUser(1)).to.eql(data[0]);
        expect(userRepository.returnUser(27)).to.eql(data[26]);
    });
    it('Should return The average step goal amongst all users', function() {
        expect(userRepository.averageStepGoal()).to.equal(6700);
    });
});
