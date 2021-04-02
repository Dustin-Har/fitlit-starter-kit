class Activity {
    constructor(data) {
        this.data = data;
    }

    dayInformation(id, date, dataType) {
        let userDay = this.data.find(data => {
            if(data.userID === id && data.date === date) {
                return data;
            }
        });
        if(userDay !== undefined){
            userDay = userDay[dataType];
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
        weekActive = weekActive.map(data => data.minutesActive)
        let avgMin = weekActive.reduce((acc, data) => acc + data);
        return Math.round((avgMin / 7) * 10) / 10;
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
}

if (typeof module !== 'undefined') {
    module.exports = Activity;
}