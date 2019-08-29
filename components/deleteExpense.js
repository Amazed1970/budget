// delete expense
deleteExpense(element){

let id = parseInt(element.dataset.id);
let parent = element.parentElement.parentElement.parentElement;
// remove from DOM
this.expenseList.removeChild(parent);
// remove from list
let tempList = this.itemList.filter(function(item){
return item.id === id;
});

this.itemList = tempList;
this.showBalance();



}
