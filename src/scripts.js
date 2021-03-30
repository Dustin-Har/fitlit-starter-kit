const userDisplayName = document.getElementById('userDisplayName');
const userName = document.getElementById('userName');
const userAddress = document.getElementById('userAddress');
const userEmail = document.getElementById('userEmail');
const userStride = document.getElementById('userStride');

let userRepository = new UserRepository(userData);
let user = new User(userRepository.returnUser(4));

userDisplayName.innerText = user.firstName();
userName.innerText = user.name;
userAddress.innerText = user.address;
userEmail.innerText = user.email;
userStride.innerText = user.strideLength;