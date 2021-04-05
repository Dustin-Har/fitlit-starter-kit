class Activity {
    constructor(data) {
        this.data = data;
    }

    dayInformation(id, date, activityType) {
        let userDay = this.data.find(data => {
            if(data.userID === id && data.date === date) {
                return data;
            }
        });
        if(userDay !== undefined){
            userDay = userDay[activityType];
        }
        return userDay;
    }

    milesWalked(user, date) {
        let stepsTaken = this.dayInformation(user.id, date, 'numSteps');
        let milesWalked = (stepsTaken * user.strideLength) / 5280;
        return Math.round(milesWalked * 10)/ 10;
    }

    averageWeekActive(user, startingDate) {
        let weekActive = this.findWeekOneUser(user, startingDate, user.id);
        weekActive = weekActive.map(data => data.minutesActive);
        let avgMin = weekActive.reduce((acc, data) => acc + data);
        return Math.round((avgMin / 7) * 10) / 10;
    }

    weekActivity(user, startingDate, activityType) {
        let weekActive = this.findWeekOneUser(user, startingDate, user.id);
        return weekActive.map(data => data[activityType]);
    } 

    findWeekOneUser(user, startingDate, id) {
        let weekArray = user.setWeek(startingDate);
        let week = this.data.filter((data) => {
            const dayFormat = new Date(data.date);
            const dateMatch = weekArray.some((day => day === dayFormat.toISOString()));
            if(data.userID === id && dateMatch) {
                return true;
            }
        });
        return week;
    }

    passStepGoal(user, date) {
        let stepsTaken = this.dayInformation(user.id, date, 'numSteps');
        return stepsTaken >= user.dailyStepGoal;
    }

    stepGoalsAllTime(user) {
        let daysExceeded = this.data.filter(data => {
            if(data.userID === user.id && data.numSteps >= user.dailyStepGoal){
                return true;
            }
        });
        return daysExceeded.map(data => data.date);  
    }

    allTimeStairs(id) {
        let allTimeStairs = 0;
        this.data.forEach(data => {
            if(data.userID === id && data.flightsOfStairs > allTimeStairs){
                allTimeStairs = data.flightsOfStairs;
            }
        });
        return allTimeStairs;
    }

    averageDay(activityType, date) {
        let day = this.data.filter(data => data.date === date);
        day = day.map(data => data[activityType]);
        const numPeople = day.length;
        let sum = day.reduce((acc ,currentvalue) => acc + currentvalue);
        return Math.round(sum / numPeople);
    }
}

if (typeof module !== 'undefined') {
    module.exports = Activity;
}