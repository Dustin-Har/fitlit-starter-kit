const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const Hydration = require('../src/Hydration');

describe('Hydration', function() {
    let user, hydration;
    const hydrationData = [
        {
          "userID": 1,
          "date": "2019/06/15",
          "numOunces": 37
        },
        {
          "userID": 2,
          "date": "2019/06/15",
          "numOunces": 75
        },
        {
          "userID": 3,
          "date": "2019/06/15",
          "numOunces": 47
        },
        {
          "userID": 4,
          "date": "2019/06/16",
          "numOunces": 85
        },
        {
            "userID": 1,
            "date": "2019/06/16",
            "numOunces": 69
          },
          {
            "userID": 2,
            "date": "2019/06/16",
            "numOunces": 91
          },
          {
            "userID": 4,
            "date": "2019/06/16",
            "numOunces": 95
          },
          {
            "userID": 1,
            "date": "2019/06/17",
            "numOunces": 45
          },
          {
            "userID": 1,
            "date": "2019/06/18",
            "numOunces": 90
          },
          {
            "userID": 1,
            "date": "2019/06/19",
            "numOunces": 66
          },
          {
            "userID": 1,
            "date": "2019/06/20",
            "numOunces": 100
          },
          {
            "userID": 1,
            "date": "2019/06/21",
            "numOunces": 45
          }];
          const userData = {
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
        }
    beforeEach(function() {
        user = new User(userData);
        hydration = new Hydration(hydrationData);
    });
    it('Should be a function', function() {
        expect(Hydration).to.be.a('function');
    });
    it('should take in a set of data about water consumption', function() { 
        expect(hydration.data).to.eql(hydrationData);
    });
    it('should for a user return the average fluid ounces consumed per day all time', function() {
        expect(hydration.averageOunces(user.id)).to.equal(64);
    });
    it('should return the amount of water consumed on a date specified', function() {
        expect(hydration.waterDayConsumed(user.id, "2019/06/16")).to.equal(69);
    });
    it('should return 0 if the date is not found', function() {
        expect(hydration.waterDayConsumed(user.id, "2020/06/16")).to.equal(0);
    });
    it('should return the an array of water drank over a 7 day period returning each day to the array', function() {
        expect(hydration.weekConsumption(user.id, '2019/06/21/')).to.eql([37, 69, 45, 90, 66, 100, 45]);
    });
});