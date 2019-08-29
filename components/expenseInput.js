//add expense
addExpense(expense) {
const div = document.createElement('div');
div.classList.add('expense');

//############ used backsticks and is working #############
div.innerHTML = `<div class="expense"><div class = "expense-item d-flex justify-content-between align-items-baseline"><h6 class="expense-title mb-0 list-item" >-${expense.title}</h6><h6 class="expense-amount mb-0 list-item">$${expense.amount}</h6><div class = "expense-icons list-item" ><a href = "#" class = "edit-icon mx-2" data-id = ${expense.id} ><i class = "fas fa-edit" > </i></a> <a href = "#" class = "delete-icon" data-id = "${expense.id}"><i class="fas fa-trash" > </i></a></div></div></div>`;

this.expenseList.appendChild(div);
//########## used backsticks and is working ##############// */

}
