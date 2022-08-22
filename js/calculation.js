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

function getPlayersName(item){
    const playerParentNode = item.parentNode;
    const playerChildNodeName = playerParentNode.firstElementChild.innerText;
    return playerChildNodeName;
}



// player selection Event starts from here

const items = document.getElementsByClassName('list-btn');

for(const item of items){
    item.addEventListener('click', function(){
        
        item.disabled = true;

        //get players name
        const playerChildNodeName= getPlayersName(item);

        //set the name in selected v section
        const listContainer = document.getElementById('list-container');
        const lengths = listContainer.children.length;
        if(lengths <5){
            const li = document.createElement('li');
            li.innerText = playerChildNodeName;
            listContainer.appendChild(li);
        }
        else{
            item.disabled = false;
        }
        
        
        
        


    });
}








// Calculation of Expensess
document.getElementById('calculate-btn').addEventListener('click', function(){
    getSetExpenses('player-expenses', playersExpenses());

    document.getElementById('total-calculate-btn').addEventListener('click', function () {
        getSetExpenses('total-expenses', totalExpenses());
    });
});

