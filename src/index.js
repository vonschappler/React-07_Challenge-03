//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDom from "react-dom";

const hour = new Date().getHours();
console.log(hour)
const greeting = {
  morning: "Good Morning",
  afternoon: "Good Afternoon",
  evening: "Good Evening"
};

const customStyle = {
  color: ''
}

ReactDom.render(
  <h1 id="h1" className="heading" style={customStyle}>
    {greeting.morning}
  </h1>,
  document.getElementById("root")
);
const heading = document.getElementById("h1");

if (hour < 12) {
  heading.innerText = greeting.morning;
  customStyle.color = 'red';
} else if (hour < 18) {
  heading.innerText = greeting.afternoon;
  customStyle.color = 'green'
} else {
  heading.innerText = greeting.evening;
  customStyle.color = 'blue'
}