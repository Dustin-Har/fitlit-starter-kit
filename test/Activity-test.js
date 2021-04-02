const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const Activity = require('../src/Activity');
const DataActivity = require('./Activity-test-data');

describe('Activity', function() {
    let user, activity;
    const activityData = DataActivity;
    const userData = {
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
        };
    beforeEach(function() {
        user = new User(userData);
        activity = new Activity(activityData);
    });
    it('should be a function', function() {
        expect(Activity).to.be.a('function');
    });
    it('should take in data and hold sleep data', function() {
        expect(activity.data).to.eql(activityData);
    });
    it('should return the steps walked by a user on specified day', function() {
        expect(activity.dayInformation(user.id, "2019/06/21", 'numSteps')).to.equal(10225);
    });
    it('should return the number of flights of stair a user has taken in a given day', function() {
        expect(activity.dayInformation(user.id, "2019/06/21", 'flightsOfStairs')).to.equal(26);
    });
    it('should return the number of minutes active for a user on a specific day', function() {
        expect(activity.dayInformation(user.id, "2019/06/21", "minutesActive")).to.equal(174);
    });
    it('should for a specific day return the number of miles a user has walked', function() {
        expect(activity.milesWalked(user, "2019/06/21")).to.equal(8.7);
    }); 
    it('should return the average number of minutes active a user was over a given week', function() {
        expect(activity.averageWeekActive(user, "2019/06/21")).to.equal(156.4);
    });
    it('should return if a user passed their step goal for a given day', function() {
        expect(activity.passStepGoal(user, "2019/06/21")).to.equal(true);
        expect(activity.passStepGoal(user, "2019/06/18")).to.equal(false);
    })
});