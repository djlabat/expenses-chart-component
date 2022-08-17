// JSON data for chart
import data from './data.json' assert {type: 'json'}; // This line works only in Chrome

// HTML Colection of days in chart - Target
let bars = [...document.getElementsByClassName("bar")]
let popups = [...document.getElementsByClassName("popup")]

// JSON data → .bar height
for (let i=0; i<7; i++) {
    bars[i].style.marginTop = 149 - data[i].amount + "px"
    popups[i].innerText = "$" + data[i].amount
}

// Cyan color dotay's bar
let today = new Date()
bars[(today.getDay()+6)%7].classList.add("today")

// Mouse over bar - popup
function hover(element, className){
    element.addEventListener('mouseenter', e => element.classList.add(className))
    element.addEventListener('mouseleave', e => element.classList.remove(className))
}

bars.forEach(e => e.addEventListener("mouseover", hover(e, "hover")));

