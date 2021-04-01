const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const Sleep = require('../src/Sleep');

describe('Sleep', function() {
    let user, sleep;
    const sleepData = [
        {
          "userID": 1,
          "date": "2019/06/15",
          "hoursSlept": 6.1,
          "sleepQuality": 2.2
        },
        {
          "userID": 2,
          "date": "2019/06/08",
          "hoursSlept": 7,
          "sleepQuality": 4.7
        },
        {
          "userID": 3,
          "date": "2019/06/15",
          "hoursSlept": 10.8,
          "sleepQuality": 4.7
        },
        {
          "userID": 4,
          "date": "2019/06/15",
          "hoursSlept": 5.4,
          "sleepQuality": 3
        },
        {
            "userID": 1,
            "date": "2019/06/16",
            "hoursSlept": 4.1,
            "sleepQuality": 3.8
          },
          {
            "userID": 2,
            "date": "2019/06/09",
            "hoursSlept": 7.5,
            "sleepQuality": 3.8
          },
          {
            "userID": 3,
            "date": "2019/06/16",
            "hoursSlept": 10.7,
            "sleepQuality": 3.4
          },
          {
            "userID": 4,
            "date": "2019/06/16",
            "hoursSlept": 8.3,
            "sleepQuality": 4.5
          },
          {
            "userID": 2,
            "date": "2019/06/10",
            "hoursSlept": 7.3,
            "sleepQuality": 4.3
          },
          {
            "userID": 2,
            "date": "2019/06/11",
            "hoursSlept": 9.9,
            "sleepQuality": 3
          },
          {
            "userID": 2,
            "date": "2019/06/12",
            "hoursSlept": 10.6,
            "sleepQuality": 1.4
          },
          {
            "userID": 2,
            "date": "2019/06/13",
            "hoursSlept": 4.7,
            "sleepQuality": 4.5
          },
          {
            "userID": 2,
            "date": "2019/06/14",
            "hoursSlept": 4.5,
            "sleepQuality": 1.2
          }];
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
        expect(sleep.averageSleep(user.id)).to.equal(7.4);
    });
    it('should return the averge sleep quality for a specified user over all time', function() {
        expect(sleep.averageQuality(user.id)).to.equal(3.3);
    });
    it('should return the hours slept for a user on a data specified', function() {
        expect(sleep.hourSleptDay(user.id, "2019/06/13")).to.equal(4.7);
        expect(sleep.hourSleptDay(1, "2019/06/15")).to.equal(6.1);
    });
});