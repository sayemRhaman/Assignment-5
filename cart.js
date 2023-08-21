


let total = 0;
function handelClickBtn(target){
    const selectedItemContainer = document.getElementById('selectedItem');
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);

    const price = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    
     total = parseFloat(total) + parseFloat(price);

     const numberPrice = parseFloat(price);
  
     
     
     
    
    
    
    
     const totalPrice =  document.getElementById('total')
     const firstTotalPriceString = totalPrice.innerText;
     totalPrice.innerText = total;
    

    
    

    
    

    const applyButton = document.getElementById('cuponBtn');

    if(total > 200 ){
        applyButton.removeAttribute('disabled');
    }   
    
    const makePurces = document.getElementById('makeSure');

    if(total > 0) {
        makePurces.removeAttribute('disabled');
    }

     
    const discountAmount = document.getElementById('discount')
    const grandtotal = getElementValuById('grandTotal');
    
  
   
    
  
   
    if( total >= 200 ) {
        const totalDiscountAmount = total / 20 ;
        const totalDiscount = totalDiscountAmount;
        setTextElementById('discount', totalDiscount);

        const myTotal = total - totalDiscount;
    
        setTextElementById ('grandTotal', myTotal); 
   
         
    }
    else {
        discountPrice = discountAmount.innerText;
         setTextElementById('discount', discountPrice)

        const lowGrandTotal = grandtotal;
        const firstGrandTotal = lowGrandTotal + numberPrice;
         
         setTextElementById('grandTotal', firstGrandTotal);
    }
   

}

document.getElementById('makeSure').addEventListener('click', function() {
    const modalPage = document.getElementById('modalCard');
     modalPage.classList.remove('hidden');
})

document.getElementById('home').addEventListener('click', function(){
    window.location.href = 'index.html';
})


