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
    });
    it('should return all days a user has exceeded their step goal', function() {
        expect(activity.stepGoalsAllTime(user)).to.eql(["2019/06/17","2019/06/19","2019/06/20", "2019/06/21"])
    });
    it('should find the all-time stair climbing record for a user', function() {
        expect(activity.allTimeStairs(user.id)).to.equal(44);
    });
    it('should return the average number of steps take for all user on a specific date', function() {
        expect(activity.averageDay('numSteps', "2019/06/21")).to.equal(9073);
    });
    it('should return the average number of stairs climbed for all user on a specific date', function() {
        expect(activity.averageDay('flightsOfStairs', "2019/06/21")).to.equal(23);
    });
    it('should return the average number of Active minutes for all user on a specific date', function() {
        expect(activity.averageDay('minutesActive', "2019/06/21")).to.equal(163);
    });
    it('should return how many steps a user took everyday over the course of a week', function() {
        expect(activity.weekActivity(user, '2019/06/21', 'numSteps')).to.eql([4294, 4112, 13750, 4662, 9858, 8153, 10225]);
    });
});