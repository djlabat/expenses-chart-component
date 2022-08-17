// JSON data for chart
import data from './data.json' assert {type: 'json'}; // This line works only in Chrome

// Vars
let bars = [...document.getElementsByClassName("bar")] // HTML Colection - bars
let popups = [...document.getElementsByClassName("popup")] // HTML Colection - Popups

let dataVals = data.map( e=> e.amount) // [ 17 35 52 31 23 43 25 ]
let dataMax = Math.max(...dataVals); // 52

// JSON data → .bar height
for (let i=0; i<7; i++) {
    bars[i].style.marginTop = 149 - (dataVals[i] * 150 / dataMax) + "px"
    popups[i].innerText = "$" + dataVals[i]
}

// Cyan color today's bar
let today = new Date()
bars[(today.getDay()+6)%7].classList.add("today")

// Mouse over bar - popup
function hover(element, className){
    element.addEventListener('mouseenter', e => element.classList.add(className))
    element.addEventListener('mouseleave', e => element.classList.remove(className))
}

bars.forEach(e => e.addEventListener("mouseover", hover(e, "hover")));

