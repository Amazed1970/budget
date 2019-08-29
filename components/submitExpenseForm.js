//submit expense form
submitExpenseForm() {
    const expenseValue = this.expenseInput.value;
    const amountValue = this.amountInput.value;
    if (expenseValue === "" || amountValue === "" || amountValue < 0) {
        this.expenseFeedback.classList.add("showItem");
        this.expenseFeedback.innerHTML = '<p class="alert alert-danger" role="alert">Values cannot be empty or negative.</p>';
        const self = this;
        setTimeout(function() {
            self.expenseFeedback.classList.remove("showItem");
        }, 4000);
    } else {
        let amount = parseInt(amountValue);
        this.expenseInput.value = "";
        this.amountInput.value = "";

        let expense = {
            id: this.itemID,
            title: expenseValue,
            amount: amount

        };
        this.itemID++;
        this.itemList.push(expense);
        this.addExpense(expense);
this.showBalance();
        //show balance
    }
}
