const userDisplayName = document.getElementById('userDisplayName');
const userName = document.getElementById('userName');
const userAddress = document.getElementById('userAddress');
const userEmail = document.getElementById('userEmail');
const userStride = document.getElementById('userStride');
const numberOfFlights = document.getElementById('numberOfFlights');
const activeMinutes = document.getElementById('activeMinutes');
const numberOfStairs = document.getElementById('numOfSteps');
const miles = document.getElementById('miles');
const stepGoal = document.getElementById("stepGoal");
const hoursSlept = document.getElementById('hoursSlept');
const rankNight = document.getElementById('rankNight');
const rankAverageSleep = document.getElementById('rankAverage');
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
let activity = new Activity(activityData);
let sleep = new Sleep(sleepData);

let stairsChart = new Chart(stairsDonut, {
    type: 'doughnut',

    data: {
        datasets: [{
            label: 'Stair CLimbed',
            data: [activity.dayInformation(user.id,todaysDate, 'flightsOfStairs'), (100 - activity.dayInformation(user.id,todaysDate, 'flightsOfStairs'))],
            backgroundColor: ['purple', 'grey'],
            borderColor: 'rgb(255, 99, 132)'
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
            data: [activity.dayInformation(user.id,todaysDate, "numSteps"), user.dailyStepGoal - activity.dayInformation(user.id,todaysDate, "numSteps")],
            backgroundColor: ['red', 'grey'],
            borderColor: 'rgb(255, 99, 132)',
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
            data: activity.weekActivity(user, todaysDate, 'numSteps')
        }]
    },

    options: {
        scales: {
            y: {
                suggestedMin: 500,
                suggestedMax: 15000
                
            }
        }
    }
});
let waterDailyChart = new Chart(waterDailyBar, {
    type: 'bar',

    data: {
        datasets: [{
            label: 'Daily Water Consumption',
            backgroundColor: 'lightblue',
            borderColor: 'rgb(255, 99, 132)',
            data: [hydration.waterDayConsumed(user.id, todaysDate), 0 , 130],
            
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
            data: [sleep.hourSleptDay(user.id, todaysDate), 8 - sleep.hourSleptDay(user.id, todaysDate)],
            backgroundColor: ['white', 'grey'],
            borderColor: 'rgb(255, 99, 132)',
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
            data: sleep.weekSleepHours(user, todaysDate)
        }]
    },

    options: {}
});

changeUserInformation();
displayUserInformation();

function displayUserInformation() {
    displayActivity();
    displayHydration();
    displaySleep();
}

function displayActivity() {
    stepGoals.innerText = `Step goal: ${user.dailyStepGoal} steps`
    numberOfFlights.innerText = "# of flights " + activity.dayInformation(user.id, todaysDate, 'flightsOfStairs');
    activeMinutes.innerText = "# of active Minutes " + activity.dayInformation(user.id, todaysDate, 'minutesActive');
    numOfSteps.innerText = "# of steps " + activity.dayInformation(user.id, todaysDate, 'numSteps');
    miles.innerText = "# of miles " + activity.milesWalked(user, todaysDate);
}

function displayHydration() {
    waterDailyChart.data.datasets[0].data[0] = hydration.waterDayConsumed(user.id, todaysDate);
    waterDailyChart.update();
    waterWeeklyChart.data.datasets[0].data = hydration.weekConsumption(user, todaysDate);
    waterWeeklyChart.update();
}

function displaySleep() {
    hoursSlept.innerText = sleep.hourSleptDay(user.id, todaysDate) + " hours";
    rankNight.innerText = sleep.sleepQualityDay(user.id, todaysDate);
    rankAverageSleep.innerText = sleep.averageQuality(user.id);
}


function changeUserInformation() {
    userDisplayName.innerText = user.firstName();
    userName.innerText = user.name;
    userAddress.innerText = user.address;
    userEmail.innerText = user.email;
    userStride.innerText = user.strideLength;
}
