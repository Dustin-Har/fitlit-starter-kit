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

    findWeek(user, startingDate) {
        let weekArray = user.setWeek(startingDate);
        let weekSleep = this.data.filter((data) => {
            const dayFormat = new Date(data.date);
            const dateMatch = weekArray.some((day => day === dayFormat.toISOString()));
            if(data.userID === user.id && dateMatch) {
                return true;
            }
        });
        return weekSleep;
    }

    weekSleepHours(user, startingDate) {
        let weekSleep = this.findWeek(user, startingDate);
        weekSleep = weekSleep.map(data => data.hoursSlept);
        return weekSleep;
    }
}

if (typeof module !== 'undefined') {
    module.exports = Sleep;
  }