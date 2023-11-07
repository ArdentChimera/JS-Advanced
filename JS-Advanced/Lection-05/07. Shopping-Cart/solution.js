function solve() {
   let addBtns = Array.from(document.querySelectorAll('div button.add-product'));
   let checkoutBtn = document.querySelector('button.checkout');
   let textArea = document.querySelector('textarea');

   let checkoutObj = {};
   for (const button of addBtns) {
      let currentPrice = 0;
      button.addEventListener('click', () => {
         let product = document.querySelectorAll('div.product-title')[addBtns.indexOf(button)].textContent;
         let price = Number(document.querySelectorAll('div.product-line-price')[addBtns.indexOf(button)].textContent);
         textArea.textContent += `Added ${product} for ${price.toFixed(2)} to the cart.\n`;
         console.log(price);
         currentPrice += price;
         checkoutObj[product] = currentPrice;
         
         
      });
   }
   
   checkoutBtn.addEventListener('click', () => {
      let productsArr = [];
      let totalPrice = 0;
      for (const key in checkoutObj) {
         
         if (!productsArr.includes(key)) {
            productsArr.push(key);
         }
         let price = checkoutObj[key];
         totalPrice += price;
      }
      textArea.textContent += `You bought ${productsArr.join(', ')} for ${totalPrice.toFixed(2)}.`;
   })
}