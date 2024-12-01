const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
const port = 3000;
// app.use(express.static('static'));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to Stock Portfolio');
});

// Endpoint 1: Calculate the Returns of the Stocks added
// <http://localhost:3000/calculate-returns?boughtAt=300&marketPrice=400&quantity=2>

app.get('/calculate-returns', (req, res) => {
  const { boughtAt, marketPrice, quantity } = req.query;

  try {
    let returns =
      (parseFloat(marketPrice) - parseFloat(boughtAt)) * parseFloat(quantity);

    res.send(`${returns}`);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }

  let returns =
    (parseFloat(marketPrice) - parseFloat(boughtAt)) * parseFloat(quantity);
});

// Endpoint 2: Calculate the Total Returns
// <http://localhost:3000/total-returns?stock1=100&stock2=200&stock3=200&stock4=400>

app.get('/total-returns', (req, res) => {
  const { stock1, stock2, stock3, stock4 } = req.query;

  try {
    let totalReturns =
      parseFloat(stock1) +
      parseFloat(stock2) +
      parseFloat(stock3) +
      parseFloat(stock4);

    res.send(`${totalReturns}`);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});

// Endpoint 3: Calculate the Return Percentage
// <http://localhost:3000/calculate-return-percentage?boughtAt=400&returns=200>

app.get('/calculate-return-percentage', (req, res) => {
  const { boughtAt, returns } = req.query;

  try {
    let returnPercentage = (parseFloat(returns) / parseFloat(boughtAt)) * 100;
    res.send(`${returnPercentage}`);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});

// Endpoint 4: Calculate the Total Return Percentage
// <http://localhost:3000/total-return-percentage?stock1=10&stock2=20&stock3=20&stock4=40>

app.get('/total-return-percentage', (req, res) => {
  const { stock1, stock2, stock3, stock4 } = req.query;

  try {
    let totalReturnsPercentage =
      parseFloat(stock1) +
      parseFloat(stock2) +
      parseFloat(stock3) +
      parseFloat(stock4);

    res.send(`${totalReturnsPercentage}`);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});

// Endpoint 5: Identify the Status of Stocks based on their Return Value
// <http://localhost:3000/status?returnPercentage=90>

app.get('/status', (req, res) => {
  const { returnPercentage } = req.query;

  try {
    let status = parseFloat(returnPercentage) > 0 ? 'profit' : 'loss';
    res.send(status);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to Stock Portfolio');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
