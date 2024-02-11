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

//storage price
let storageAddedOnce = false;
function extraStoragePrice(storage){
    const extraStorage = document.getElementById('storage-price');
    const addExtraStorage = parseInt(extraStorage.innerText);
     // total price
     const totalPrice = document.getElementById('total-price');
     const newTotalPrice = parseInt(totalPrice.innerText);

     if (storage && (storageAddedOnce || storage === "storage-3")) { 
        extraStorage.innerText = addExtraStorage + 100; 
        totalPrice.innerText = newTotalPrice + 100; 
        storageAddedOnce = true;
    } 
     
     else if(storage && !storageAddedOnce){
         extraStorage.innerText = addExtraStorage + 60;
         totalPrice.innerText = newTotalPrice + 60;
         storageAddedOnce = true;
     }

    
     else if(!storage  && storageAddedOnce) {
        extraStorage.innerText = addExtraStorage - 60;
        totalPrice.innerText = newTotalPrice - 60;
        storageAddedOnce = false;
        
     }
     //total summary
     const otherTotalPriceElement = document.getElementById('other-total-price');
    if (otherTotalPriceElement) {
        totalPrice.innerText;
        otherTotalPriceElement.innerText = totalPrice.innerText;
    }
     
}

//memory price
document.getElementById('memory-1').addEventListener('click',function(){
    extraMemoryPrice(false);
})
document.getElementById('memory-2').addEventListener('click',function(){
    extraMemoryPrice(true);
})

//storage
document.getElementById('storage-1').addEventListener('click',function(){
    extraStoragePrice(false);
})
document.getElementById('storage-2').addEventListener('click',function(){
    extraStoragePrice(true);
})
document.getElementById('storage-3').addEventListener('click',function(){
    extraStoragePrice("storage-3");
})



