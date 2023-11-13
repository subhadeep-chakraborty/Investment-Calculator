// This function expects a JS object as an argument
// The object should contain the following properties
// - initInv: The initial investment amount
// - annInv: The amount invested every year
// - expRet: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initInv,
  annInv,
  expRet,
  duration,
}) {
  const annualData = [];
  let investmentValue = initInv;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expRet / 100);
    investmentValue += interestEarnedInYear + annInv;
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annInv: annInv, // investment added in this year
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
