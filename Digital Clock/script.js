function digitalclock () {
    const hour = document.getElementById("hour")
    const minute = document.getElementById("minute")
    const sec = document.getElementById("sec")
    const ampm = document.getElementById("ampm")

    const day = document.getElementById("day")
    const month = document.getElementById("month")
    const year = document.getElementById("year")

    const dayofWeek = document.getElementById("dayofweek")
    const clock = new Date()

    // am and pm
    const currenthour = clock.getHours()
    ampm.innerHTML = ampms(currenthour)
    
    console.log(clock)

    //hour.minute.sec
    hour.innerHTML = zeroinc(clock.getHours())
    minute.innerHTML = zeroinc(clock.getMinutes())
    sec.innerHTML = zeroinc(clock.getSeconds())

    //day/month/year
    day.innerHTML = clock.getDate()
    month.innerHTML = clock.getMonth()
    year.innerHTML = clock.getFullYear()

    //weekdays
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    dayofWeek.innerHTML = days[clock.getDay()]

}

// to add 0 in am i.e 01,02,03
function zeroinc (num) {
    return (num<10 ? "0" + num : num)
}

function ampms (hour) {
    if (hour >= 12)
    {
        return  "PM"
    }
    
    else
    {
        return "AM"
    }
}

setInterval (digitalclock, 1000)