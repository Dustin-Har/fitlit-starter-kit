const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const UserRepository = require('../src/UserRepository');
const data = require('../data/users');

describe('User', function() {
    let userRepository;
    let user;
    beforeEach(function() {
        userRepository = new UserRepository(data);
        user = new User(userRepository.returnUser(1));
    });
    it('should take in a user and save it as a property', function() {
        const user2 = new User(userRepository.returnUser(4));
        expect(user.name).to.eql(data[0].name);
        expect(user.id).to.eql(data[0].id);
        expect(user.address).to.eql(data[0].address);
        expect(user.email).to.eql(data[0].email);
        expect(user.strideLength).to.eql(data[0].strideLength);
        expect(user.dailyStepGoal).to.eql(data[0].dailyStepGoal);
        expect(user.friends).to.eql(data[0].friends);
        expect(user2.name).to.eql(data[3].name);
        expect(user2.id).to.eql(data[3].id);
        expect(user2.address).to.eql(data[3].address);
        expect(user2.email).to.eql(data[3].email);
        expect(user2.strideLength).to.eql(data[3].strideLength);
        expect(user2.dailyStepGoal).to.eql(data[3].dailyStepGoal);
        expect(user2.friends).to.eql(data[3].friends);
    });
    it('should have a method to return the first name of the user', function() {
        expect(user.firstName()).to.eql("Luisa");
        const user2 = new User(userRepository.returnUser(4));
        expect(user2.firstName()).to.eql("Mae")
    });
});