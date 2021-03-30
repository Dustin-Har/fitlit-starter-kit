class UserRepository {
    constructor(data) {
        this.data = data;
    }

    returnUser(userId) {
        const user = this.data.find(user => user.id === userId);
        return user;
    }

    averageStepGoal() {
        let sum = this.data.reduce((acc, user) => {
            return acc + user.dailyStepGoal;
        }, 0);
        return sum / this.data.length;
    }
}

//module.exports = UserRepository;