class Sleep {
    constructor(data) {
        this.data = data;
    }

    averageSleep(id) {
        let days = 0;
        let sum = this.data.reduce((acc, data) => {
            if(data.userID === id) {
                days += 1
                return acc + data.hoursSlept;
            }
            return acc;
        }, 0);
        return Math.round((sum/days)* 10)/ 10;
    }

    averageQuality(id) {
        let days = 0;
        let sum = this.data.reduce((acc, data) => {
            if(data.userID === id) {
                days += 1
                return acc + data.sleepQuality;
            }
            return acc;
        }, 0);
        return Math.round((sum/days)* 10)/ 10;
    }

    hourSleptDay(id, date) {
        let hoursSlept = 0;
        this.data.forEach(data => {
            if(data.userID === id && data.date === date){
                hoursSlept =  data.hoursSlept;
            } 
        });
        return hoursSlept;
    }

    sleepQualityDay(id, date) {
        let sleepQuality = 0;
        this.data.forEach(data => {
            if(data.userID === id && data.date === date){
                sleepQuality =  data.sleepQuality;
            } 
        });
        return sleepQuality;
    }

    findWeekOneUser(user, startingDate, id) {
        let weekArray = user.setWeek(startingDate);
        let weekSleep = this.data.filter((data) => {
            const dayFormat = new Date(data.date);
            const dateMatch = weekArray.some((day => day === dayFormat.toISOString()));
            if(data.userID === id && dateMatch) {
                return true;
            }
        });
        return weekSleep;
    }

    weekSleepHours(user, startingDate) {
        let weekSleep = this.findWeekOneUser(user, startingDate, user.id);
        weekSleep = weekSleep.map(data => data.hoursSlept);
        return weekSleep;
    }

    weekSleepQuality(user, startingDate) {
        let weekSleep = this.findWeekOneUser(user, startingDate, user.id);
        weekSleep = weekSleep.map(data => data.sleepQuality);
        return weekSleep;
    }

    allUserSleep() {
        let days = 0;
        let sum = this.data.reduce((acc, data) => {
            days += 1
            return acc + data.sleepQuality;
        }, 0);
        return Math.round((sum/days)* 10)/ 10;
    }

    userMostSleep(date) {
        let specifiedDate = this.data.filter(data => data.date === date);
        let highestScore = 0;
        specifiedDate.forEach((data) => {
            if(data.hoursSlept > highestScore) {
                highestScore = data.hoursSlept;
            }
        });
        specifiedDate = specifiedDate.filter(data => highestScore === data.hoursSlept);
        return specifiedDate.map(data => data.userID);
    }

    usersGoodSleep(user, startingDate) {
        let usersIds = this.findUsers(); 
        let goodSleep = usersIds.filter(id => {
            let weeksSleep = this.findWeekOneUser(user, startingDate, id);
            weeksSleep = weeksSleep.map(data => data.sleepQuality);
            let average = weeksSleep.reduce((acc, data) => acc + data);
            average = average/7;
            if(average >= 3) return true;
        });
        return goodSleep;
    }

    findUsers() {
        let userIds = this.data.map(data => data.userID);
        let returnIds = [];
        userIds.forEach(id => {
            if(!returnIds.includes(id)){
                returnIds.push(id);
            }
        });
        return returnIds;
    }
}

if (typeof module !== 'undefined') {
    module.exports = Sleep;
  }