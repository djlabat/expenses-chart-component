// JSON data - Source
import data from './data.json' assert {type: 'json'}; // Ne radi u FFox, nego u Chrome
// 0: {day: 'mon', amount: 17.45}
// 1: {day: 'tue', amount: 34.91}
// 2: {day: 'wed', amount: 52.36}
// 3: {day: 'thu', amount: 31.07}
// 4: {day: 'fri', amount: 23.39}
// 5: {day: 'sat', amount: 43.28}
// 6: {day: 'sun', amount: 25.48}

// HTML Colection of days - Target
let chart = document.querySelector(".chart").children
// [div#item-0.bar, div#item-1.bar, div#item-2.bar, div#item-3.bar, div#item-4.bar, div#item-5.bar, div#item-6.bar, div#item-7.day, div#item-8.day, div#item-9.day, div#item-10.day, div#item-11.day, div#item-12.day, div#item-13.day, item-0: div#item-0.bar, item-1: div#item-1.bar, item-2: div#item-2.bar, item-3: div#item-3.bar, item-4: div#item-4.bar, …]

// for (let i=0; i<6; i++) {

// }

console.log(chart)