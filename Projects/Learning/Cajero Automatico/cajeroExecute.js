
class Bill {
    constructor (value, quantity) {
        this.value = value;
        this.quantity = quantity;
    }
}

let billsAvailableInBox = [];
billsAvailableInBox.push (new Bill (100, 5));
billsAvailableInBox.push (new Bill (50, 20));
billsAvailableInBox.push (new Bill (20, 60));
billsAvailableInBox.push (new Bill (10, 15));
billsAvailableInBox.push (new Bill (5, 200));

let billsToDeliver = [];
let requestedAmount;

let requestButton = document.getElementById ("Solicitar")
requestButton.addEventListener ("click", executeOperation)

let spaceForWriting = document.getElementById ("result")

function executeOperation () {
    
    requestedAmount = document.getElementById ("cantidadSolicitada")
    let remainingRequestedQuantity = requestedAmount.value;
    let counter = 0
    for (let billV2 of billsAvailableInBox) {
        if (remainingRequestedQuantity > 0){
            let billsQuantityToDeliverOfTheValueInThisCycle = parseInt(remainingRequestedQuantity/billV2.value);
            if (billsQuantityToDeliverOfTheValueInThisCycle > billV2.quantity) {
                billsQuantityToDeliverOfTheValueInThisCycle = billV2.quantity
                }
            billsToDeliver.push (new Bill (billV2.value, billsQuantityToDeliverOfTheValueInThisCycle));
            billsAvailableInBox[counter].quantity = billsAvailableInBox[counter].quantity - billsQuantityToDeliverOfTheValueInThisCycle
            remainingRequestedQuantity = remainingRequestedQuantity - billsQuantityToDeliverOfTheValueInThisCycle*billV2.value;
            counter = counter + 1
        }
    }
    if (remainingRequestedQuantity > billsAvailableInBox[4].value) {spaceForWriting.innerHTML ="Sorry, actually this box don't have that amount of money, we can deliver up to " +
    (requestedAmount.value-remainingRequestedQuantity) + " dollars"
    }else if (remainingRequestedQuantity > 0) {spaceForWriting.innerHTML = "Sorry, we couldn't display bill lesser than " + billsAvailableInBox[4].value + " dollars"}
    spaceForWriting.innerHTML = spaceForWriting.innerHTML + "<br/> Then you will be given " + (requestedAmount.value-remainingRequestedQuantity) + " dollars: ";
    for (let bill of billsToDeliver) {
        spaceForWriting.innerHTML = spaceForWriting.innerHTML + "<br/> -" + bill.quantity + "bills of " + bill.value
    }
    console.log (billsAvailableInBox)
    
}
