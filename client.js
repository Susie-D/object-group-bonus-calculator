// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];

console.log('array of employee data: ', employees);

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

let employee = {
  name: 'Atticus',
  employeeNumber: '2405', // 5%
  annualSalary: '67000', // -1%
  reviewRating: 3,  // 4%
};

// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus(employee) {
  let rating = employee.reviewRating;
  let employeeNumber = Number(employee.employeeNumber);
  let annualIncome = Number(employee.annualSalary);

  let ratingBonus;
  let bonusPercentage;
  switch (rating) {
    // rating of a 3 should receive a base bonus of 4% of their base annual income
    case 3:
      bonusPercentage = 0.04;
      ratingBonus = annualIncome * bonusPercentage;
    // rating of a 4 should receive a base bonus of 6% of their base annual income
    case 4:
      bonusPercentage = 0.06;
      ratingBonus = annualIncome * bonusPercentage;
      break;
    // rating of a 5 should receive a base bonus of 10% of their base annual income
    case 5:
      bonusPercentage = 0.1;
      ratingBonus = annualIncome * bonusPercentage;
      break;
  }
  //  Test that you're receiving rating bonus
  console.log('Rating Bonus:', ratingBonus);
  console.log('Rating Bonus Percentage', bonusPercentage);

  // If their employee number is 4 digits long, this means they have been with the company for longer than 15 years, and should receive an additional 5%.

  let employeeNumberLength = employeeNumber.toString().length;

  if (employeeNumberLength === 4) {
    let employeeNumBonusPercentage = 0.05;
    let employeeNumberBonus = annualIncome * employeeNumBonusPercentage;
    console.log('Number Bonus:', employeeNumberBonus);
    console.log('Number Bonus Percentage', employeeNumBonusPercentage);
  }
  if (annualIncome > 65000) {
    let employeeNegativeAdjustmentPercentage = 0.01;
    let negativeAdjustment =
      annualIncome * employeeNegativeAdjustmentPercentage;
    negativeAdjustment - annualIncome;
    console.log('Negative Adjustment:', negativeAdjustment);
    console.log(
      'Negative Adjustment Percentage:',
      employeeNegativeAdjustmentPercentage
    );
    return;     // What are we returning!?
  }
  // No bonus can be above 13% or below 0% total.
}

calculateIndividualEmployeeBonus(employee);
