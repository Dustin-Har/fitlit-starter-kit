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
const stairsInfo = document.getElementById('stairsInfo');
const stepInfo = document.getElementById('stepInfo');
const headerName = document.getElementById('headerName');
const userInfo = document.getElementById('userInfo');


let todaysDate = '2019/09/22';
let userRepository = new UserRepository(userData);
let user = new User(userRepository.returnUser(4));
let hydration = new Hydration(hydrationData);
let activity = new Activity(activityData);
let sleep = new Sleep(sleepData);
headerName.addEventListener('click', toggleInfo);

let stairsChart = new Chart(stairsDonut, {
    type: 'doughnut',
    
    data: {
        datasets: [{
            label: ['Stair CLimbed', 'Stairs tell goal'],
            data: [activity.dayInformation(user.id,todaysDate, 'flightsOfStairs'), (100 - activity.dayInformation(user.id,todaysDate, 'flightsOfStairs'))],
            backgroundColor: ['#FD9346', '#16181d'],
            borderColor: '#8b93a7'
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
            backgroundColor: ['#FDA766', '#16181d'],
            borderColor: '#8b93a7',
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
            backgroundColor: '#FDA766',
            borderColor: '#FDA766',
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
            yAxes: [{ticks:{display:false}}],
            xAxes: [{barPercentage: 0.7}]
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
            borderColor: 'lightblue',
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
            backgroundColor: ['#FFDD3C', `#16181d`],
            borderColor: '#8b93a7',
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
            backgroundColor: '#FFDD3C',
            borderColor: '#FFDD3C',
            data: sleep.weekSleepHours(user, todaysDate)
        }]
    },
    
    options: {}
});

setInterval(flip, 6000);
setInterval(changeUser, 24000);
displayUserInformation();

function displayUserInformation() {
    changeUserInformation();
    displayActivity();
    displayHydration();
    displaySleep();
}

function displayActivity() {
    stepGoals.innerText = `Step goal: ${user.dailyStepGoal} steps`
    numberOfFlights.innerText = activity.dayInformation(user.id, todaysDate, 'flightsOfStairs') + " stairs";
    activeMinutes.innerText = activity.dayInformation(user.id, todaysDate, 'minutesActive') + " minutes";
    numOfSteps.innerText = activity.dayInformation(user.id, todaysDate, 'numSteps') + " steps";
    miles.innerText = activity.milesWalked(user, todaysDate) + " miles";
    updateStairsChart();
    updateStepsChart();
    updateWeekStepsChart();
}

function updateStairsChart() {
    stairsChart.data.datasets[0].data = [activity.dayInformation(user.id,todaysDate, 'flightsOfStairs'), (100 - activity.dayInformation(user.id,todaysDate, 'flightsOfStairs'))];
    stairsChart.update();
}

function updateStepsChart() {
    stepsChart.data.datasets[0].data = [activity.dayInformation(user.id,todaysDate, "numSteps"), user.dailyStepGoal - activity.dayInformation(user.id,todaysDate, "numSteps")];
    stepsChart.update();
}

function updateWeekStepsChart() {
    stepsWeeklyChart.data.datasets[0].data = activity.weekActivity(user, todaysDate, 'numSteps');
    stepsWeeklyChart.update();
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
    sleepDailyChart.data.datasets[0].data = [sleep.hourSleptDay(user.id, todaysDate), 8 - sleep.hourSleptDay(user.id, todaysDate)];
    sleepDailyChart.update();
    sleepWeeklyChart.data.datasets[0].data = sleep.weekSleepHours(user, todaysDate);
    sleepWeeklyChart.update();
}


function changeUserInformation() {
    userDisplayName.innerText = user.firstName();
    userName.innerText = ` Name: ${user.name}`;
    userAddress.innerText = `Address: ${user.address}`;
    userEmail.innerText = `Email: ${user.email}`;
    userStride.innerText = `Stride Length: ${user.strideLength}`;
}

function flip() {
    stairsInfo.classList.toggle('flip180');
    stepInfo.classList.toggle('flip180');
}

function toggleInfo () {
    userInfo.classList.toggle('hidden');
}

function changeUser() {
    const userId = user.id + 1;
    if(userId === 50) {
        userId = 1;
    }
    user.newUser(userRepository.returnUser(userId));
    displayUserInformation();
}