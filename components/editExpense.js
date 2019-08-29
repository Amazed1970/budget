// edit expense
editExpense(element){
let id = parseInt(element.dataset.id);
let parent = element.parentElement.parentElement.parentElement;
// remove from DOM
this.expenseList.removeChild(parent);
// remove from the list
let expense = this.itemList.filter(function(item){
return item.id === id;
})
// show value
this.expenseInput.value = expense[0].title;
this.amountInput.value = expense[0].amount;
//remove from the list
let tempList = list.itemList.filter(function(item){
return item.id !==id;
})
this.itemList = tempList;
this.showBalance()

}
