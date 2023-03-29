// A client contacts the freelancer to enquire about their rates. The freelancer explains that they work 8 hours a day. However, the freelancer knows only their hourly rates for the project. Help them estimate a day rate given an hourly rate.
function dayRate(hourlyrate, hoursPerDay) {
    return hourlyrate * hoursPerDay
};
console.log(dayRate(75, 8));


// Another day, a project manager offers the freelancer to work on a project with a fixed budget. Given the fixed budget and the freelancer's hourly rate, help them calculate the number of days they would work until the budget is exhausted. The result must be rounded down to the nearest whole number.
    // const totalbudget = [20000];
    // hourly cost = $75
    // daily cost = $75 * 8h = $600
    // 20000 / 600 = 33.33 days 
    // Brads logic - 1: given budget and hourly rate return days based on 8 hour days - See how many hours youc an do per the budget 
    //  hours in budget = 
    // hours in budget 
function daysInBudget(budget, hourlyrate) {
    const HOURS_PER_DAY = 8;
    const hoursInBudget = budget / hourlyrate;
    const daysInBudget = hoursInBudget / HOURS_PER_DAY;

    return Math.floor(daysInBudget);

};
console.log(daysInBudget(20000, 75));

// Often, the freelancer's clients hire them for projects spanning over multiple months. In these cases, the freelancer decides to offer a discount for every full month, and the remaining days are billed at day rate. Every month has 22 billable days. Help them estimate their cost for such projects, given an hourly rate, the number of days the project spans, and a monthly discount rate. The discount is always passed as a number, where 42% becomes 0.42. The result must be rounded up to the nearest whole number.
// total days =230
// 1 month = 22 days
// total months = 230 / 22 = 10.45 (12 extra days) aka October 12ish
// 10 full months: $600 * 22 = $13,200 * .42(discount) = $5,544/fullmonth
// 12 extra days at full price = 12 * 600 = $7,200
// hourly cost = $75
// daily cost = $75 * 8h = $600

function priceWithMonthlyDiscount(dayRate, totalDays, discount) {
    let oneMonth = 22; 
    let oneMonthCost = dayRate * 22;
    let discountMonthCost = Math.floor(oneMonthCost * (1 - discount));
    let wholeMonths = Math.floor(totalDays / 22); 
    let remaining = totalDays % 22; 
    let remainingDaysCost = remaining * dayRate;

    return wholeMonths * discountMonthCost + remainingDaysCost;
}

console.log(priceWithMonthlyDiscount(1400, 230, 0.32));