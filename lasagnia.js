// 1. Define the expected oven time in minutes
// Define the EXPECTED_MINUTES_IN_OVEN constant that represents how many minutes the lasagna should be in the oven. It must be exported. According to the cooking book, the expected oven time in minutes is 40.

const EXPECTED_MIN_IN_OVEN = 40;

// Implement the remainingMinutesInOven function that takes the actual minutes the lasagna has been in the oven as a parameter and returns how many minutes the lasagna still has to remain in the oven, based on the expected oven time in minutes from the previous task.

function remainingMinutesInOven(timeAlreadyInOven) {
    return EXPECTED_MIN_IN_OVEN - timeAlreadyInOven
};
console.log(remainingMinutesInOven(30));

// Implement the preparationTimeInMinutes function that takes the number of layers you added to the lasagna as a parameter and returns how many minutes you spent preparing the lasagna, assuming each layer takes you 2 minutes to prepare.

function preparationTimeInMinutes(layersAdded) {
    return layersAdded * 2
};
console.log(preparationTimeInMinutes(5));


// Implement the totalTimeInMinutes function that takes two parameters: the numberOfLayers parameter is the number of layers you added to the lasagna, and the actualMinutesInOven parameter is the number of minutes the lasagna has been in the oven. The function should return how many minutes in total you've worked on cooking the lasagna, which is the sum of the preparation time in minutes, and the time in minutes the lasagna has spent in the oven at the moment.


function totalTimeInMinutes(layersAdded, timeAlreadyInOven) {
    return  preparationTimeInMinutes(layersAdded) + timeAlreadyInOven
};

console.log(totalTimeInMinutes(3, 20));