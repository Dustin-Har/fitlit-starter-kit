const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');

describe('User Repository', function() {
    let userRepository;
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
        expect(userRepository.averageStepGoal()).to.equal(6000);
    });
});
