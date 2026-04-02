// This script displays the current date and time in UTC formatted as YYYY-MM-DD HH:MM:SS
function displayCurrentDateTime() {
    const now = new Date();
    const utcDate = now.toISOString().slice(0, 19).replace('T', ' ');
    console.log(utcDate);
}

displayCurrentDateTime();