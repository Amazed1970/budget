//total expense
totalExpense() {
    let total = 0;
if(this.itemList.length > 0){
//console.log(this.itemList);//
total = this.itemList.reduce(function(acc,curr) {
//console.log('Total is ${acc} and the current value is ${curr.amount}');


acc += curr.amount;
return acc;

},0);
}
this.expenseAmount.textContent = total;
    return total;

}
