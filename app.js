// Clock Assignment

let name = prompt("Could you tell me what's your good name plz");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let date = new Date();
let shift = "";
let ampm = ""

let day = days[date.getDay()].slice(0, 3);
let new_date = String(date.getDate()).padStart(2, 0);
let month = months[date.getMonth()].slice(0, 3);
let year = date.getFullYear();

let hour = String(date.getHours()).padStart(2, 0);
let mint = String(date.getMinutes()).padStart(2, 0);
let sec = String(date.getSeconds()).padStart(2, 0);

if (hour >= 5 && hour < 12) {
  shift = "Morning";
} else if (hour >= 12 && hour < 17) {
  shift = "Afternoon";
} else if (hour >= 17 && hour < 21) {
  shift = "Evening";
} else {
  shift = "Night";
}

if (hour === 0) {
  hour = 12;
  ampm = "AM";
} else if (hour < 12) {
  ampm = "AM";
} else {
  hour = hour - 12;
  ampm = "PM";
}

document.getElementById(`user-name`).innerHTML = name;
document.getElementById(`shif`).innerHTML = shift;

let final_date = `${day} ${new_date}-${month}-${year}`
let final_time = `${hour}:${mint}:${sec} ${ampm}`;

console.log(date);
console.log(shift);
console.log(final_date);
console.log(final_time);
