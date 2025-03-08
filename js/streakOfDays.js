// Function to get the day streak
const getDayStreak = (activity, startDate) => {
  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diffInTime = today.getTime() - start.getTime();
  const streak = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
  
  return streak;
};

// Function to update streak in localStorage
const updateStreak = (activity) => {
  const lastActiveDate = localStorage.getItem(`${activity}_lastActive`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (!lastActiveDate || new Date(lastActiveDate).getTime() !== today.getTime()) {
      let streak = parseInt(localStorage.getItem(`${activity}_streak`)) || 0;
      
      if (lastActiveDate) {
          const prevDate = new Date(lastActiveDate);
          prevDate.setDate(prevDate.getDate() + 1);
          if (prevDate.getTime() === today.getTime()) {
              streak += 1;
          } else {
              streak = 1;
          }
      } else {
          streak = 1;
      }
      
      localStorage.setItem(`${activity}_streak`, streak);
      localStorage.setItem(`${activity}_lastActive`, today.toISOString());
  }
};

// Example usage
const activity = "dailyNatureWalk"; // Spring-themed activity
updateStreak(activity);
console.log(`${activity} streak:`, localStorage.getItem(`${activity}_streak`));