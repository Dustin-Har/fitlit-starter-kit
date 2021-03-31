const dayjs = require("dayjs");

class Hydration {
    constructor(data) {
        this.data = data;
    }

    averageOunces(id) {
        let days = 0;
        let sum = this.data.reduce((acc, data) => {
            if(data.userID === id) {
                days += 1
                return acc + data.numOunces;
            }
            return acc;
        }, 0);
        return Math.floor(sum/days) ;
    }

    waterDayConsumed(id, date) {
        let waterDrank = 0;
        this.data.forEach(data => {
            if(data.userID === id && data.date === date){
                waterDrank =  data.numOunces;
            } 
        });
        return waterDrank;
    }

    weekConsumption(id, startingDate) {
        let d = new Date(startingDate);
        let weekArray = [d];
        //d.setDate(d.getDate()-1);
        let weekFluids = [];
        this.data.forEach((data) => {
                const dayFormat = new Date(data.date);
                if(data.userID === id && weekArray.some((day => day.getTime() === dayFormat.getTime()))) {
                    weekFluids.unshift(data.numOunces);
                }
            });
        return weekFluids;
    }
}

module.exports = Hydration;