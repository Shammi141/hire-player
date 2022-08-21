// Selection of players functions



// Expenses calculation functions
function playersExpenses(){
    const perPlayerAmount = parseFloat(document.getElementById('player-money').value);
    const playerExpenses = perPlayerAmount * 5;
    return playerExpenses;
}

function getSetExpenses(elementId, functionName) {
    const previousExpenses = document.getElementById(elementId);
    previousExpenses.innerText = functionName;
}

function totalExpenses(){
    const playerExpenses =playersExpenses();
    const managerExpense = parseFloat(document.getElementById('manager-money').value);
    const coachExpense = parseFloat(document.getElementById('coach-money').value);

    const totalExpenseAmount = playerExpenses + managerExpense + coachExpense;
    return totalExpenseAmount;
}


// Event starts from here 


document.getElementById('inside-card').addEventListener('click', function(){
    if (document.getElementById('player1-btn').addEventListener('click'), function(){

    }){

    }
});







// Calculation of Expensess
document.getElementById('calculate-btn').addEventListener('click', function(){
    getSetExpenses('player-expenses', playersExpenses());

    document.getElementById('total-calculate-btn').addEventListener('click', function () {
        getSetExpenses('total-expenses', totalExpenses());
    });
});

