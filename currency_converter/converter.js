#!/usr/bin/node

function converter () {
  const currency_from = document.getElementById('fromCurrency').value;
  const currency_to = document.getElementById('toCurrency').value;
  const amount = parseFloat(document.getElementById('amount').value);

  const currencies = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75,
    RWF: 9.86,
    NRA: 1200,
    SHL: 2900
  };

  if (currencies[currency_from] && currencies[currency_to]) {
    const conv = (amount * currencies[currency_to]) / currencies[currency_from];
    document.getElementById('result').value = conv.toFixed(2);
  } else {
    alert(`Currency ${currency_from} or ${currency_to} not supported`);
  }
}

function available_currencies () {
  alert('Here is a list of available currencies: USD, EUR, GBP, JPY, RUB, RWF, NRA, SHL');
}
