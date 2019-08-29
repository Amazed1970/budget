//submit budget method
submitBudgetForm() {
    const value = this.budgetInput.value;
    if (value === "" || value < 0) {
        this.budgetFeedback.classList.add("showItem");
        this.budgetFeedback.innerHTML = '<p class="alert alert-danger" role="alert">Value cannot be empty or negative.</p>';
        const self = this;
        //console.log(this);

        setTimeout(function() {
            self.budgetFeedback.classList.remove("showItem");
        }, 4000);
    } else {
        this.budgetAmount.textContent = value;
        this.budgetInput.value = "";
        this.showBalance();
    }
}
