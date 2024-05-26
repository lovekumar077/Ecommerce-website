let bagItems;
let wishItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
 bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
  // displayHeartIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    console.log('I am here');
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector('.items-container');
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';
  items.forEach(item => {
    innerHtml += `
    <div class="item-container">
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
          <span class="material-symbols-outlined action_icon  heart" onclick="addtoWishlist(${item.id})" >favorite</span>

      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`
  });
  itemsContainerElement.innerHTML = innerHtml;
}



let wishlist_items;
// onReload();
onReLoad();

function onReLoad() {
  let wishlist_itemsStr = localStorage.getItem('wishlist_items');
  wishlist_items = wishlist_itemsStr ? JSON.parse(wishlist_itemsStr) : [];
  displayItemsOnHomePage();
  displayHeartIcon();
}


function addtoWishlist(itemId){
  wishlist_items.push(itemId);
  localStorage.setItem('wishlist_items', JSON.stringify(wishlist_items));

  displayHeartIcon();
}
function displayHeartIcon() {
  let wishlistItemCount = document.querySelector('.wishList-item-count');
  if (wishlistItemCount) { // Check if the element exists
      if (wishlist_items.length > 0) {
          console.log('i am there');
          wishlistItemCount.style.visibility = 'visible';
          wishlistItemCount.innerText = wishlist_items.length;
      } else {
          wishlistItemCount.style.visibility = 'hidden';
      }
  } else {
      console.log("Element with class 'wishList-item-count' not found.");
  }
}


// function displayHeartIcon(){
//   let wishlistItemCount = document.querySelector('.wishList-item-count'); // Changed the selector to target the class
//   if(wishlistItemCount && wishlist_items.length > 0){ // Added a check for wishlistItemCount
//     console.log(' i am there');
//     wishlistItemCount.style.visibility = 'visible';
//     wishlistItemCount.innerText = wishlist_items.length;
//   } else if (wishlistItemCount) {
//     wishlistItemCount.style.visibility = 'hidden';
//   }
// }
