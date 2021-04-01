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
}

if (typeof module !== 'undefined') {
    module.exports = Sleep;
  }