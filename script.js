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
    { id: 3, text: 'Kit-Kat', amount: -1 },
    { id: 4, text: 'Review', amount: 15 }
];

let transactions = testData;

// Add to DOM list
function addTransactionDOM(transaction) {
    // Is it income or expense?
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    // Add class based on value
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span> 
        <button class="delete-btn">x</button>
    `;

    list.appendChild(item);
}

// Initialization
function init() {
    list.innerHTML = '';

    transactions.forEach(addTransactionDOM);
}

init();