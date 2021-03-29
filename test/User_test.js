const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const UserRepository = require('../src/UserRepository');


describe('User', function() {
    let userRepository;
    let user;
    const data = [
        {
            "id": 1,
            "name": "Luisa Hane",
            "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
            "email": "Diana.Hayes1@hotmail.com",
            "strideLength": 4.3,
            "dailyStepGoal": 10000,
            "friends": [
            16,
            4,
            8
            ]
        },
        {
            "id": 2,
            "name": "Jarvis Considine",
            "address": "30086 Kathryn Port, Ciceroland NE 07273",
            "email": "Dimitri.Bechtelar11@gmail.com",
            "strideLength": 4.5,
            "dailyStepGoal": 5000,
            "friends": [
            9,
            18,
            24,
            19
            ]
        },
        {
            "id": 3,
            "name": "Herminia Witting",
            "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
            "email": "Elwin.Tromp@yahoo.com",
            "strideLength": 4.4,
            "dailyStepGoal": 5000,
            "friends": [
            19,
            11,
            42,
            33
            ]
        },
        {
            "id": 4,
            "name": "Mae Connelly",
            "address": "28926 Schinner Islands, Turnermouth NE 23720-3230",
            "email": "Marcos_Pollich@hotmail.com",
            "strideLength": 3.1,
            "dailyStepGoal": 4000,
            "friends": [
            48,
            7,
            44,
            8
            ]
        }
        ];
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