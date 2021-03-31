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

    weekConsumption(user, startingDate) {
        let weekArray = user.setWeek(startingDate);
        let weekFluids = [];
        this.data.forEach((data) => {
            const dayFormat = new Date(data.date);
            const dateMatch = weekArray.some((day => day === dayFormat.toISOString()));
            if(data.userID === user.id && dateMatch) {
                weekFluids.push(data.numOunces);
            }
            });
        return weekFluids;
    }
}
if (typeof module !== 'undefined') {
    module.exports = Hydration;
}