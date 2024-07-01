// Write a JavaScript function to get the week start date.

function getWeekStartDate(date) {
    const currentDate = new Date(date);
    const dayOfWeek = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)
    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - dayOfWeek);
    return startDate;
}

// Example usage:
const today = new Date(); // or any other date
const weekStartDate = getWeekStartDate(today);
console.log(weekStartDate.toLocaleString());
