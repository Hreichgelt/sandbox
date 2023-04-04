// Some kinds of vehicles require a drivers license to operate them. Assume only the kinds 'car' and 'truck' require a license, everything else can be operated without a license.

// Implement the needsLicense(kind) function that takes the kind of vehicle and returns a boolean indicating whether you need a license for that kind of vehicle.

function needsLicense(vehicle) {
    if (vehicle == 'car'){
        return true
    } else if (vehicle == 'bike') {
        return false
    }
};
console.log(needsLicense('car'))