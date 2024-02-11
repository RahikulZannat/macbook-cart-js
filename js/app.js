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
let selectedStorage= "";
let basePrice= 1299;

function extraStoragePrice(storage){
    const extraStorage = document.getElementById('storage-price');
    const addExtraStorage = parseInt(extraStorage.innerText);
     // total price
     const totalPrice = document.getElementById('total-price');
     const newTotalPrice = parseInt(totalPrice.innerText);

     if(selectedStorage === "storage-2"){
         totalPrice.innerText -= 60;
     }
     else if(selectedStorage === "storage-3"){
         totalPrice.innerText -= 100;
     }

     if (storage === "storage-1") {
        extraStorage.innerText = "0"; // Set storage price to 0

    } else if (storage === "storage-2") {
        extraStorage.innerText = "60"; // Display 60 in storage-price
        totalPrice.innerText = basePrice + 60;
       
    } else if (storage === "storage-3") {
        extraStorage.innerText = "100"; // Display 100 in storage-price
        totalPrice.innerText = basePrice + 100; // Remove previous value (60) and add 100
      
    }

          //total summary
          const otherTotalPriceElement = document.getElementById('other-total-price');
          if (otherTotalPriceElement) {
              totalPrice.innerText;
              otherTotalPriceElement.innerText = totalPrice.innerText;
          }

          selectedStorage = storage;
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
    extraStoragePrice("storage-1");
})
document.getElementById('storage-2').addEventListener('click',function(){
    extraStoragePrice("storage-2");
})
document.getElementById('storage-3').addEventListener('click',function(){
    extraStoragePrice("storage-3");
})



