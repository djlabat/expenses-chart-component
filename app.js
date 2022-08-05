// JSON data - Source
import data from './data.json' assert {type: 'json'}; // This line works only in Chrome

// HTML Colection of days - Target
let chart = document.querySelector(".chart").children

// Source→ Target
for (let i=0; i<7; i++) {
    chart[i].style.marginTop = 149 - data[i].amount + "px"
    chart[i].innerText = data[i].amount
}

let today = new Date()

//   [  today's bar↓       ]
chart[(today.getDate()-1)%6].style.backgroundColor = "hsl(186, 34%, 60%)"
chart[(today.getDate()-1)%6].classList.add("today")

