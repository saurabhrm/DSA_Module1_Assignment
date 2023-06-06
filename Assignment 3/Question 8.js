// Question 8
// Given an array of meeting time intervals where intervals[i] = [starti, endi],
// determine if a person could attend all meetings.

// Example 1:
// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: false

function canAttendMeetings(intervals) {
  intervals.sort((a, b) => a[0] - b[0]); // Sort intervals based on start time
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      // Check if the start time of the current interval is earlier than the end time of the previous interval
      return false;
    }
  }
  return true;
}

let intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];
let result = canAttendMeetings(intervals);
console.log(result); // Output: false
