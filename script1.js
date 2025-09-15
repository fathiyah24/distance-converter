// Prompt the user to enter a distance in miles
let milesInput = prompt("Enter distance in miles:");

// Convert the input to a number
let miles = parseFloat(milesInput);

// Check if the input is a valid number
if (isNaN(miles)) {
  alert("Invalid input. Please enter a numeric value.");
} else {
  // Use a constant for the conversion factor
  const conversionFactor = 1.60934;

  // Calculate kilometers
  let kilometers = miles * conversionFactor;

  // Display the result
  alert(`${miles} miles is equal to ${kilometers.toFixed(2)} kilometers.`);
}  