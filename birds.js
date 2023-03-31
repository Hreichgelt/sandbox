// Let us start analyzing the data by getting a high-level view. Find out how many birds you counted in total since you started your logs.
// Implement a function totalBirdCount that accepts an array that contains the bird count per day. It should return the total number of birds that you counted.
let birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

let totalBirdCount = birdsPerDay.reduce((birdsPerDay, a) => {
return birdsPerDay + a;
})

console.log(totalBirdCount);


// Now that you got a general feel for your bird count numbers, you want to make a more fine-grained analysis.

// Implement a function birdsInWeek that accepts an array of bird counts per day and a week number. It returns the total number of birds that you counted in that specific week. You can assume weeks are always tracked completely.

// let birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];


birdsInWeek(birdsPerDay, 2);