// JSON data for chart
import data from './data.json' assert {type: 'json'}; // This line works only in Chrome

// HTML Colection of days in chart - Target
let chart = document.querySelector(".chart").children

// JSON data → Target
for (let i=0; i<7; i++) {
    chart[i].style.marginTop = 149 - data[i].amount + "px"
    chart[i].innerText = data[i].amount
}

// Cyan color dotay's bar
let today = new Date()
chart[(today.getDay()+6)%7].classList.add("today")