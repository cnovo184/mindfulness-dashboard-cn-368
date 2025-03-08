// Function to calculate the age of the Spokane Lilac Festival
const calculateFestivalAge = () => {
  const festivalStart = new Date("1938-05-21");
  const today = new Date();

  let age = today.getFullYear() - festivalStart.getFullYear();

  const monthDiff = today.getMonth() - festivalStart.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < festivalStart.getDate())) {
    age--;
  }

  return age;
};

// Ensure script runs after the DOM is loaded
window.onload = () => {
  // Get HTML element
  const ageOfEvent = document.querySelector('.ageOfEvent');

  // Ensure the element exists before setting textContent
  if (ageOfEvent) {
    ageOfEvent.textContent = `The Spokane Lilac Festival is ${calculateFestivalAge()} years old.`;
  }
};