// Let us start analyzing the data by getting a high-level view. Find out how many birds you counted in total since you started your logs.
// Implement a function totalBirdCount that accepts an array that contains the bird count per day. It should return the total number of birds that you counted.
let birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

// totalBirdCount(birdsPerDay) {
// let totalBirds = 0;
// for (let i = 0; i < birdsPerDay.length; i++) {
//     totalBirds += birdsPerDay[i];
// } return totalBirds
// }
// console.log(totalBirdCount());


// Now that you got a general feel for your bird count numbers, you want to make a more fine-grained analysis.

// Implement a function birdsInWeek that accepts an array of bird counts per day and a week number. It returns the total number of birds that you counted in that specific week. You can assume weeks are always tracked completely.

// let birdsPerDay = [2, 5, 0, 7, 4, 1, 3,|||| 0, 2, 5, 0, 1, 3, 1];
// week 1 should run from 0-6 and week to from 7-13
function birdsInWeek(birdsPerDay, week){
    let totalBirdsInWeek = 0;
    for (let i = 7 * (week - 1); i < 7 * week; i++) {
        totalBirdsInWeek += birdsPerDay[i];
    } return totalBirdsInWeek
}

console.log(birdsInWeek(birdsPerDay, 2));