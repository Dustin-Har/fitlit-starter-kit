class UserRepository {
    constructor(data) {
        this.data = data;
    }

    returnUser(userId) {
        const user = this.data.find(user => user.id === userId);
        return user;
    }
}

module.exports = UserRepository;