const userDisplayName = document.getElementById('userDisplayName');
const userName = document.getElementById('userName');
const userAddress = document.getElementById('userAddress');
const userEmail = document.getElementById('userEmail');
const userStride = document.getElementById('userStride');
const waterDailyBar = document.getElementById('waterBarDaily').getContext('2d');
const weeklyWaterBar = document.getElementById('waterBarWeekly').getContext('2d');


let userRepository = new UserRepository(userData);
let user = new User(userRepository.returnUser(4));
let hydration = new Hydration(hydrationData);
let waterDailyChart = new Chart(waterDailyBar, {
    type: 'bar',

    data: {
        datasets: [{
            label: 'Daily Water Consumption',
            backgroundColor: 'lightblue',
            borderColor: 'rgb(255, 99, 132)',
            data: [hydration.waterDayConsumed(user.id, '2019/09/22'), 0 , 130]
        }]
    },
    options: {
        legend: {
            display: false
        }, 

        scales: {
            yAxes: [{ticks:{display:false}}]
        }
    }
});
let waterWeeklyChart = new Chart(weeklyWaterBar, {
    type: 'bar',

    data: {
        labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7'],
        datasets: [{
            label: 'Weekkly Water Consumption in Ounces',
            backgroundColor: 'lightblue',
            borderColor: 'rgb(255, 99, 132)',
            data: hydration.weekConsumption(user, '2019/09/22')
        }]
    },

    options: {}
});
// let waterWeeklyChart = new Chart(weeklyWaterBar, {
//     type: 'bar',

//     labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7'],

//     data: {
//         datasets: [{
//             label: 'Weekly Water Consumption',
//             backgroundColor: 'lightblue',
//             borderColor: 'rgb(255, 99, 132)',
//             data: [37,54,22,10,60,100,76]
//         }]
//     },

// });



changeUserInformation();
displayUserInformation();




function displayUserInformation() {
    displayStep();
    displayHydration();
}

function displayStep() {
    console.log(`${userRepository.averageStepGoal()} average step goal amongst user Your Goal ${user.dailyStepGoal}`);
}

function displayHydration() {
    waterDailyChart.data.datasets[0].data[0] = hydration.waterDayConsumed(user.id, '2019/09/22');
    waterDailyChart.update();
}

function changeUserInformation() {
    userDisplayName.innerText = user.firstName();
    userName.innerText = user.name;
    userAddress.innerText = user.address;
    userEmail.innerText = user.email;
    userStride.innerText = user.strideLength;
}
