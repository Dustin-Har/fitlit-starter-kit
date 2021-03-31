class User {
    constructor(userData) {
        this.id = userData.id;
        this.name = userData.name;
        this.address = userData.address;
        this.email = userData.email;
        this.strideLength = userData.strideLength;
        this.dailyStepGoal = userData.dailyStepGoal;
        this.friends = userData.friends;
    }

    firstName() {
        return this.name.substr(0, this.name.indexOf(' '));
    }

    setWeek(startingDate) {
        let week = []
        let d = new Date(startingDate);
        week.unshift(d.toISOString());
        for(let i = 1; i < 7; i++) {
            d.setDate(d.getDate()-1);
            week.unshift(d.toISOString());
        }
        return week;
    }
}

if (typeof module !== 'undefined') {
    module.exports = User;
  }