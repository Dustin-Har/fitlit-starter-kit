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
        activity = new Activity(activityData);
    });
    it('should be a function', function() {
        expect(Activity).to.be.a('function');
    });
    it('should take in data and hold sleep data', function() {
        expect(activity.data).to.eql(activityData);
    });
    it('should return the steps walked by a user on specified day', function() {
        expect(activity.stepsDay(user.id, "2019/06/21"))
    });
});