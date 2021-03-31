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
}

module.exports = Hydration;