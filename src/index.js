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

ReactDom.render(
  <h1 id="h1" className="heading morning">
    {greeting.morning}
  </h1>,
  document.getElementById("root")
);
const heading = document.getElementById("h1");

if (hour >= 0 && hour < 12) {
  heading.innerText = greeting.morning;
  heading.className = "heading morning";
} else if (hour >= 12 && hour < 18) {
  heading.innerText = greeting.afternoon;
  heading.className = "heading afternoon";
} else if (hour >= 18 && hour <= 23) {
  heading.innerText = greeting.evening;
  heading.className = "heading evening";
}
