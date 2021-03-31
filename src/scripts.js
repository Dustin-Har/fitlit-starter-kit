const userDisplayName = document.getElementById('userDisplayName');
const userName = document.getElementById('userName');
const userAddress = document.getElementById('userAddress');
const userEmail = document.getElementById('userEmail');
const userStride = document.getElementById('userStride');
const stairsDonut = document.getElementById('stairsDonut').getContext('2d');
const stepsDonut = document.getElementById('stepsDonut').getContext('2d');
const stepsBar = document.getElementById('stepsBar').getContext('2d');
const waterDailyBar = document.getElementById('waterBarDaily').getContext('2d');
const weeklyWaterBar = document.getElementById('waterBarWeekly').getContext('2d');
const sleepDonut = document.getElementById('sleepDonut').getContext('2d');
const sleepBar = document.getElementById('sleepBar').getContext('2d');

let todaysDate = '2019/09/22';
let userRepository = new UserRepository(userData);
let user = new User(userRepository.returnUser(4));
let hydration = new Hydration(hydrationData);

let stairsChart = new Chart(stairsDonut, {
    type: 'doughnut',

    data: {
        datasets: [{
            label: 'Stair CLimbed',
            backgroundColor: 'purple',
            borderColor: 'rgb(255, 99, 132)',
            data: [25]
        }]
    },
    options: {
    }
});

let stepsChart = new Chart(stepsDonut, {
    type: 'doughnut',

    data: {
        datasets: [{
            label: 'Stair CLimbed',
            backgroundColor: 'red',
            borderColor: 'rgb(255, 99, 132)',
            data: [8000]
        }]
    },
    options: {
    }
});
let stepsWeeklyChart = new Chart(stepsBar, {
    type: 'bar',

    data: {
        labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7'],
        datasets: [{
            label: 'Weekly Daily Steps',
            backgroundColor: 'lightblue',
            borderColor: 'rgb(255, 99, 132)',
            data: [6000, 5500, 4000, 8000, 7000, 3333, 10000]
        }]
    },

    options: {}
});
let waterDailyChart = new Chart(waterDailyBar, {
    type: 'bar',

    data: {
        datasets: [{
            label: 'Daily Water Consumption',
            backgroundColor: 'lightblue',
            borderColor: 'rgb(255, 99, 132)',
            data: [hydration.waterDayConsumed(user.id, todaysDate), 0 , 130]
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
            data: hydration.weekConsumption(user, todaysDate)
        }]
    },

    options: {}
});

let sleepDailyChart = new Chart(sleepDonut, {
    type: 'doughnut',

    data: {
        datasets: [{
            label: 'Hours Slept',
            backgroundColor: 'white',
            borderColor: 'rgb(255, 99, 132)',
            data: [7.5]
        }]
    },
    options: {
    }
});

let sleepWeeklyChart = new Chart(sleepBar, {
    type: 'bar',

    data: {
        labels: ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7'],
        datasets: [{
            label: 'Weekkly Sleep In Hours',
            backgroundColor: 'lightblue',
            borderColor: 'rgb(255, 99, 132)',
            data: [6.5, 7.2, 8.6, 8, 7, 8, 7.8]
        }]
    },

    options: {}
});

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
    waterDailyChart.data.datasets[0].data[0] = hydration.waterDayConsumed(user.id, todaysDate);
    waterDailyChart.update();
    waterWeeklyChart.data.datasets[0].data = hydration.weekConsumption(user, todaysDate);
    waterWeeklyChart.update();
}

function changeUserInformation() {
    userDisplayName.innerText = user.firstName();
    userName.innerText = user.name;
    userAddress.innerText = user.address;
    userEmail.innerText = user.email;
    userStride.innerText = user.strideLength;
}
