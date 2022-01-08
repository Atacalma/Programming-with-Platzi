function executeOperation () {
    let billsToDeliver = [];
    let requestedAmount = document.getElementById ("cantidadSolicitada");
    let remainingRequestedQuantity = requestedAmount;
    calculateBillsToDeliver (remainingRequestedQuantity, billsAvailableInBox)
    document.write (billsToDeliver)
    
}

function calculateBillsToDeliver (remainingRequestedQuantity, billsAvailableInBox) {
    for (bill of billsAvailableInBox) {
        if (remainingRequestedQuantity > 0){
            let billsQuantityToDeliverOfTheValueInThisCycle = parseInt(remainingRequestedQuantity/bill.value);
            if (billsQuantityToDeliverOfTheValueInThisCycle > bill.quantity) {
                billsQuantityToDeliverOfTheValueInThisCycle = bill.quantity
                }
            billsToDeliver.push = new Billete (bill.value, billsQuantityToDeliverOfTheValueInThisCycle)
            billsAvailableInBox[bill].quantity = billsAvailableInBox[bill].quantity - billsQuantityToDeliverOfTheValueInThisCycle
            remainingRequestedQuantity = remainingRequestedQuantity - billsValueQuantity.last*bill;
        } else { return 
        }
    }
}
