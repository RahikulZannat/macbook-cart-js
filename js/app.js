//memory price calculation
let memoryAddedOnce = false;
function extraMemoryPrice(memory){
    const extraMemory = document.getElementById('memory-price');
    const addExtraMemory = parseInt(extraMemory.innerText);
    // total price
    const totalPrice = document.getElementById('total-price');
    const newTotalPrice = parseInt(totalPrice.innerText);

    if(memory && !memoryAddedOnce){
        extraMemory.innerText = addExtraMemory + 20;
        totalPrice.innerText = newTotalPrice + 20;
        memoryAddedOnce = true;
    }
    else if(!memory && memoryAddedOnce){
        extraMemory.innerText = addExtraMemory -20;
        totalPrice.innerText = newTotalPrice - 20;
        memoryAddedOnce = false;
    }
      //total summary
    const otherTotalPriceElement = document.getElementById('other-total-price');
    if (otherTotalPriceElement) {
        totalPrice.innerText;
        otherTotalPriceElement.innerText = totalPrice.innerText;
    }
    
}


//storage price calculation
let selectedStorage = "";

function extraStoragePrice(storage) {
    const extraStorage = document.getElementById('storage-price');
    const totalPrice = document.getElementById('total-price');
    const otherTotalPriceElement = document.getElementById('other-total-price');
    
    // Reset the previous selection
    if (selectedStorage === "storage-2") {
        totalPrice.innerText = parseInt(totalPrice.innerText) - 60;
    } else if (selectedStorage === "storage-3") {
        totalPrice.innerText = parseInt(totalPrice.innerText) - 100;
    }

    // Update based on the current selection
    if (storage === "storage-1") {
        extraStorage.innerText = "0";
        // No change in total price for storage-1
    } else if (storage === "storage-2") {
        extraStorage.innerText = "60";
        totalPrice.innerText = parseInt(totalPrice.innerText) + 60;
    } else if (storage === "storage-3") {
        extraStorage.innerText = "100";
        totalPrice.innerText = parseInt(totalPrice.innerText) + 100;
    }

    // Update the other total price element
    if (otherTotalPriceElement) {
        otherTotalPriceElement.innerText = totalPrice.innerText;
    }

    // Update the selected storage
    selectedStorage = storage;
}

//delivery price calculation
let deliveryCostAdded = false;
function fastDeliveryPrice(delivery){
    const extraDelivery = document.getElementById('delivery-cost');
    const addFastDelivery = parseInt(extraDelivery.innerText);
    // total price
    const totalPrice = document.getElementById('total-price');
    const newTotalPrice = parseInt(totalPrice.innerText);

    if(delivery && !deliveryCostAdded){
        extraDelivery.innerText = addFastDelivery + 10;
        totalPrice.innerText = newTotalPrice + 10;
        deliveryCostAdded = true;
    }
    else if(!delivery && deliveryCostAdded){
        extraDelivery.innerText = addFastDelivery - 10;
        totalPrice.innerText = newTotalPrice - 10;
        deliveryCostAdded = false;
    }
      //total summary
    const otherTotalPriceElement = document.getElementById('other-total-price');
    if (otherTotalPriceElement) {
        totalPrice.innerText;
        otherTotalPriceElement.innerText = totalPrice.innerText;
    }
    
}

//memory buttons event listeners
document.getElementById('memory-1').addEventListener('click',function(){
    extraMemoryPrice(false);
})
document.getElementById('memory-2').addEventListener('click',function(){
    extraMemoryPrice(true);
})

// Storage buttons event listeners
document.getElementById('storage-1').addEventListener('click',function(){
    extraStoragePrice("storage-1");
});
document.getElementById('storage-2').addEventListener('click',function(){
    extraStoragePrice("storage-2");
});
document.getElementById('storage-3').addEventListener('click',function(){
    extraStoragePrice("storage-3");
});
//delivery buttons event listeners
document.getElementById('delivery-1').addEventListener('click',function(){
    fastDeliveryPrice(false);
})
document.getElementById('delivery-2').addEventListener('click',function(){
    fastDeliveryPrice(true);
})

// promo calculation 
document.getElementById('apply').addEventListener('click', function () {
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = parseInt(totalPriceElement.innerText);
    const inputCode = document.getElementById('code-input');
    let promo = inputCode.value;
    
    if (promo === "Rahik") {
        const discount = totalPrice * 0.20; // 20% discount
        totalPrice -= discount;
        totalPriceElement.innerText = totalPrice;
    }

    inputCode.value = '';

    const otherTotalPriceElement = document.getElementById('other-total-price');
    if (otherTotalPriceElement) {
        totalPrice.innerText;
        otherTotalPriceElement.innerText = totalPriceElement.innerText;
    }
});
