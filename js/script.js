// Copyright (c) 2023 Sirine Cherkaoui. All rights reserved.
//
// Created by: Sirine Cherkaoui
// Created on May 2023
// This file contains the JS functions for index.html

"use strict";

// Function to remove placeholder text when the input field is focused
function removePlaceholder() {
  document.getElementById("integer-label").classList.add("is-dirty");
}

function CalculateSum() {
   // Initializing variables for sum and numbers
   let sum = 0;
   let numbers = "";
   let numberType = document.getElementById("number-type").value;
   let minValue = parseInt(document.getElementById("min-value").value);
   let maxValue = parseInt(document.getElementById("max-value").value);

   // Check if no option is selected
   if (numberType === "unselected" || isNaN(minValue) || isNaN(maxValue)) {
      document.getElementById("results").innerHTML = "Please enter all of your responses.";
      return; 
   }

   // If the user does not enter valid integers, display error messages
   if (minValue > maxValue) {
      document.getElementById("results").innerHTML = "Please enter a valid range with the minimum value being less than or equal to the maximum value.";
      return;
   }

   // Loop through numbers from the minimum to the maximum value
   if (numberType === "even") {
      for (let counter = minValue; counter <= maxValue; counter++) {
         if (counter % 2 === 0) {
            // Add the current number to the sum
            sum += counter;

            // Adding the current number to the string of numbers
            if (numbers !== "") {
               numbers += " + ";
            }
            numbers += counter;
         }
      }
   } else if (numberType === "odd") {
      let counter = minValue;
      while (counter <= maxValue) {
         if (counter % 2 !== 0)  {
            // Add the current number to the sum
            sum += counter;

            // Adding the current number to the string of numbers
            if (numbers !== "") {
               numbers += " + ";
            }
            numbers += counter;
         }
         counter++;
      }
   }

   // Display the result with the sum and the numbers used
   document.getElementById("results").innerHTML = "The sum of all " + numberType + " numbers from " + minValue + " to " + maxValue + " (" + numbers + ") is " + sum + ".";
}
