const balance = document.getElementById('balance');
const moneyPlus = document.getElementById('money-plus');
const moneyMinus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const testData = [
    { id: 1, text: 'Cheese', amount: -2 },
    { id: 2, text: 'Dog Walks', amount: 20 },
    { id: 3, text: 'Kit-Kat', amount: -100 },
    { id: 4, text: 'Review', amount: 15 }
];

let transactions = testData;
console.log(transactions);

// Add to DOM list
function addTransactionDOM(transaction) {
    // Is it income or expense?
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    // Add class based on value
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span> 
        <button class="delete-btn">x</button>
    `;

    list.appendChild(item);
}

// Update the balance income and expense
function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    console.log("total balance: " + total);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    console.log("income:" + income);

    const expense = (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    console.log("outgoing expense:" + expense);

    balance.innerText = `€${total}`;
    money_plus.innerText = `€${income}`;
    money_minus.innerText = `€${expense}`;
}

// Initialization
function init() {
    list.innerHTML = '';

    transactions.forEach(addTransactionDOM);
    updateValues();
}

init();