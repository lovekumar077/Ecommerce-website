let heartitemsobject;
onload();

function onload() {
    loadwishItemObjects();
     continuePayment();
    displayHeartItem();
    displayHeartIcon();
   
}

function loadwishItemObjects() {
    console.log(wishlist_items);
    heartitemsobject = wishlist_items.map(itemId => {
        for (let i = 0; i < items.length; i++) { // Assuming items is defined somewhere
            if (itemId == items[i].id) {
                return items[i];
            }
        }
    });
    console.log(heartitemsobject);
}
function displayHeartItem() {
  let containerBox = document.querySelector('.bag-items-containers');

  if (heartitemsobject && heartitemsobject.length > 0) {
      let innerHTML = '  ';
      heartitemsobject.forEach(heartItem => {
          innerHTML += createItemHTML(heartItem);
      });
      containerBox.innerHTML = innerHTML;
  } else{
    containerBox.innerHTML =' <p> No items in wishlist</p>';
  }
}

function continuePayment(){
let payment  = document.querySelector('.continue');
innerHTML=' ';
if(heartitemsobject.length>0 &&heartitemsobject){
  innerHTML +=createpayment();

  payment.innerHTML =innerHTML;
}
else{
  payment.innerHTML =` <button class="continueShopping" onclick=" homepage()" ">CONTINUE SHOPPING</button>`;


}
loadwishItemObjects();
  displayHeartIcon();
 displayHeartItem();



}

function createpayment(){
  return `<div class=" payment_details" >continue to pay...... 
  <button class="button">PAY</button>
  </div>`;
}

// let Frontpageredirect = homepage();
// document.querySelector('.continueShopping').addEventListener("click",Frontpageredirect);

function homepage(){
 let redirect= document.querySelector('.continue');
 innerHTML=' ';
 
  redirect.innerHTML =  `<a href="front.html">homepage</a>`  ;

 

 }





function removeFromWish(itemId){
  wishlist_items = wishlist_items.filter(wishlist_itemsId => wishlist_itemsId != itemId);
  localStorage.setItem('wishlist_items', JSON.stringify(wishlist_items));
  loadwishItemObjects();
  displayHeartIcon();
 displayHeartItem();
  
}


function createItemHTML(item) {
    return `<div class="bag-item-container">
        <div class="item-left-part">
            <img class="bag-item-img" src="../${item.image}">
        </div>
        <div class="item-right-part">
            <div class="company">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price-container">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${item.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item.delivery_date}</span>
      </div>
        </div>
        <div class="remove-from-cart" onclick="removeFromWish(${item.id})">X</div>


        
    </div>`;
}


