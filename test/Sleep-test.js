const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const Sleep = require('../src/Sleep');
const DataSleep = require('./Sleep-Data-Test');

describe('Sleep', function() {
    let user, sleep;
    const sleepData = DataSleep;
    const userData = {
        "id": 2,
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
    }
    beforeEach(function() {
        user = new User(userData);
        sleep = new Sleep(sleepData);
    });
    it('Should be a function', function() {
        expect(Sleep).to.be.a('function');
    });
    it('should take in data about users sleep', function() {
        expect(sleep.data).to.eql(sleepData);
    });
    it('should return the average number of hours slept per day for a user', function() {
        expect(sleep.averageSleep(user.id)).to.equal(7.9);
    });
    it('should return the averge sleep quality for a specified user over all time', function() {
        expect(sleep.averageQuality(user.id)).to.equal(3.5);
    });
    it('should return the hours slept for a user on a data specified', function() {
        expect(sleep.hourSleptDay(user.id, "2019/06/21")).to.equal(4.3);
        expect(sleep.hourSleptDay(1, "2019/06/21")).to.equal(7.8);
    });
    it('should return the sleep quality for a user on a data specified', function() {
        expect(sleep.sleepQualityDay(user.id, "2019/06/21")).to.equal(4.8);
        expect(sleep.sleepQualityDay(1, "2019/06/21")).to.equal(4.2);
    });
    it('should return how much a user slept over each day of a given week', function() {
        expect(sleep.weekSleepHours(user, "2019/06/21")).to.eql([ 7, 7.5, 5.7, 10.8, 9.6, 10.1, 4.3 ]);
    });
    it('should return the quality of sleep for each day for a user over a week', function() {
        expect(sleep.weekSleepQuality(user, "2019/06/21")).to.eql([ 4.7, 3.8, 3, 3.2, 2.5, 2.4, 4.8 ]);
    });
    it('should return the average sleep quality for all users', function() {
        expect(sleep.allUserSleep()).to.equal(3);
    });
    it('should Find all users who average a sleep quality greater than 3 for a given week', function () {
        expect(sleep.usersGoodSleep(user, "2019/06/21")).to.eql([2 ,3]);
    });
    it('should For a given day identified by the date, find the users who slept the most number of hours one or more if they tied', function() {
        expect(sleep.userMostSleep("2019/06/21")).to.eql([3, 4]);
        expect(sleep.userMostSleep("2019/06/20")).to.eql([2]);
    });
});