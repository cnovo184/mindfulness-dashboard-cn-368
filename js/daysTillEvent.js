// Function to get the next Easter date
const getNextEaster = () => {
  const currentYear = new Date().getFullYear();
  
  // Calculate the date of Easter for the current year
  const a = currentYear % 19;
  const b = Math.floor(currentYear / 100);
  const c = currentYear % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  
  const month = Math.floor((h + l - 7 * m + 114) / 31); // Month
  const day = ((h + l - 7 * m + 114) % 31) + 1; // Day of month
  
  const easterDate = new Date(currentYear, month - 1, day);
  return easterDate;
};

// Function to get days until event (Easter)
const getDaysUntilEvent = (eventDate) => {
  // Create Date objects for now and the event
  const now = new Date();
  const event = new Date(eventDate);

  // Clear time portion for accurate day calculation
  now.setHours(0, 0, 0, 0);
  event.setHours(0, 0, 0, 0);

  // Calculate difference in milliseconds
  const diffInTime = event.getTime() - now.getTime();

  // Convert to days
  const daysUntil = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));

  return daysUntil;
};

// Get the next Easter date
const nextEaster = getNextEaster();

// Get the number of days until the next Easter
const daysUntilEaster = getDaysUntilEvent(nextEaster);

// Get HTML element
const daysUntilEvent = document.querySelector('.daysUntilEvent');

// Set to HTML element
daysUntilEvent.textContent = daysUntilEaster;