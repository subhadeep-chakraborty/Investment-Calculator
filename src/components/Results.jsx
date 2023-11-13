import {calculateInvestmentResults} from '../util/investment.js'
import { formatter } from '../util/investment.js';

export default function Results({rawInvestmentData}) {
   const resultsData =  calculateInvestmentResults(rawInvestmentData);
   const initialInvestment = 
   resultsData[0].valueEndOfYear -
   resultsData[0].interest -
   resultsData[0].annInv;
    return (
       <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultsData.map(yearData => {
                const totalInterest =
                yearData.valueEndOfYear - yearData.annInv * yearData.year - initialInvestment;
                const totalAmountInvested = yearData.valueEndOfYear -
                totalInterest;
                return <tr key ={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            })}
        </tbody>
       </table>

    )
}