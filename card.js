
//cupon 










document.getElementById('CardOne').addEventListener('click', function() {
     const heading = document.getElementById('cardName');
     const newName = heading.innerText;
     

     const setContainer = document.getElementById('container');
     const li = document.createElement('li');
     li.innerText = newName;
     setContainer.appendChild(li);   




     //total price 
     
     const newPrice = getElementValuById('getPrice');
    
     const prevTotal = getElementValuById('totalPrice');

     const currentPrice = prevTotal + newPrice;
     const applyBtn = getElementValuById('cuponBtn');

     if(currentPrice >= 200) {    
          applyBtn.cl
     }
     
     setTextElementById('totalPrice', currentPrice);

     //discount price 

     const discountPrice = getElementValuById('discount')
     if(currentPrice >= 200) {
     totalDiscount = currentPrice / 20;
     setTextElementById('discount', totalDiscount);
     }
     else{
        const currentGrandTotal = prevTotal + newPrice;
        setTextElementById('grandTotal', currentGrandTotal) ;
     }
     

     //grand total 

     const grandTotal = getElementValuById ('grandTotal');
     const currentGrandTotal = currentPrice - totalDiscount;
     setTextElementById('grandTotal', currentGrandTotal);

     //cupon

    

})








document.getElementById('cuponBtn').addEventListener('click', function() {
const button = document.getElementById('cuponBtn');
    const inputField = document.getElementById ('cuponCode');

    if(inputField.value == 'SELL200'){
     
      button.classList.remove('disabled:bg-gray-300');
      button.removeAttribute('disabled');
      
       
    }
     


     
})



 
























// document.getElementById('CardTow').addEventListener('click', function() {
//      const heading = document.getElementById('secondCard');
//      const newName = heading.innerText;
     

//      const setContainer = document.getElementById('container');
//      const li = document.createElement('li');
//      li.innerText = newName;
//      setContainer.appendChild(li);    


// })