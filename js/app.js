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
}

//memory price
document.getElementById('memory-1').addEventListener('click',function(){
    extraMemoryPrice(false);
})
document.getElementById('memory-2').addEventListener('click',function(){
    extraMemoryPrice(true);
})