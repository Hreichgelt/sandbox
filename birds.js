// Let us start analyzing the data by getting a high-level view. Find out how many birds you counted in total since you started your logs.
// Implement a function totalBirdCount that accepts an array that contains the bird count per day. It should return the total number of birds that you counted.
birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
function totalBirdCount(birdsPerDay) {
    let total = [];
    for (i = 0; i < birdsPerDay.length; i++) {
        return total + birdsPerDay[i];
    }
}

console.log(totalBirdCount(birdsPerDay));