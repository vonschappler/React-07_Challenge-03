//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from 'react'
import ReactDom from 'react-dom'

const hour = new Date().getHours()
const heading = document.querySelector('h1')

if (hour > 0 && hour <=12) {
  heading.innerHTML = 'Good Morning'
  heading.className = 'heading morning'
} else if (hour > 12 && hour <= 18) {
  heading.innerHTML = 'Good Afternoon'
  heading.className = 'heading afternoon'
} else if (hour > 18 && hour <= 0) {
  heading.innerHTML = "Good Evening"
  heading.className = 'heading night'
}

ReactDom.render(
  <h1 className='heading morning'>Good Morning</h1>,
  document.getElementById('root')
)