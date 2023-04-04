// Some kinds of vehicles require a drivers license to operate them. Assume only the kinds 'car' and 'truck' require a license, everything else can be operated without a license.

// Implement the needsLicense(kind) function that takes the kind of vehicle and returns a boolean indicating whether you need a license for that kind of vehicle.

function needsLicense(vehicle) {
    if (vehicle == 'car'){
        return true
    } else if (vehicle == 'bike') {
        return false
    }
};
console.log(needsLicense('car'));

// You evaluate your options of available vehicles. You manage to narrow it down to two options but you need help making the final decision. For that implement the function chooseVehicle(option1, option2) that takes two vehicles as arguments and returns a decision that includes the option that comes first in alphabetical order.

// chooseVehicle('Wuling Hongguang', 'Toyota Corolla');
// chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf');

function chooseVehicle(option1, option2) {
    if (option1 > option2) {
        return option1
    } else {
        return option2
    };
};
console.log(chooseVehicle('Corolla', 'Infiniti'))