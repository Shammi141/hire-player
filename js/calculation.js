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

document.getElementById('calculate-btn').addEventListener('click', function(){

    getSetExpenses('player-expenses', playersExpenses());

    document.getElementById('total-calculate-btn').addEventListener('click', function () {
        getSetExpenses('total-expenses', totalExpenses());
    });
});

