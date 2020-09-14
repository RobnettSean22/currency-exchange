# Currency Exchange

## Description

[Currency Exchange](https://cchange.netlify.app/) web application that uses an [exchangerate api](https://api.exchangeratesapi.io/latest) to calculate the current country's currency amount in to another specified country's currency. There is also a graph that give maps out the currency rates within that time period. The automatically updates so the currency exchange outputs stay accurate.

## Framework

- React.js

## Dependencies

- [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2)
  - For displaying the chart
- axios

## Components

### Chart

This component houses the line chart graph of currency exchange rates.

### Currency

This component houses the results and calculations. After the calculations are finished the currency rate for each country are shown as well as the comparable "1\$" equivalent between both of the selected countries.

## Motivation

Currently I live in Japan, and I used to look up the how much a certain amount in USD was in comparison to YEN. So, I figured I would just make a conversion calculator.
