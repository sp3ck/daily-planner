//Data Array: Schedule data array
let daySchedule = [
    // {
    //     time: '6.00am',
    //     activity: 'Woke up',
    //     type: 'misc',
    //     state: false
    // }
]

//Data Display: UI display schedule
function displaySchedule(time, activity){
    let dailySchedule = document.querySelector('#daily-schedule');
    let list = document.createElement('li');
    list.innerHTML = `
        <strong>${time}</strong> - ${activity}
    `;
    dailySchedule.append(list);
}

//Data Display Compiler: compile display schedule
function displayScheduleCompiler(){
    for (let i in daySchedule){
        displaySchedule(daySchedule[i].time,daySchedule[i].activity);
    }
    daySchedule = [];
}

//Data Input: form input schedule
function inputSchedule(){
    let inputTime = document.querySelector('#time-desc').value;
    let inputActivity = document.querySelector('#activity-desc').value;
    let inputType = document.querySelector('#type-desc').value;

    daySchedule.push({
        time: inputTime,
        activity: inputActivity,
        type: inputType
    })
}

//Event Handling: add single schedule
document.querySelector('#button').addEventListener('click', function(event){
    inputSchedule();
    displayScheduleCompiler();
    alert('schedule updated');
},
)