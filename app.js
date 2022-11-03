// shipping and total price
const totalPrice = document.querySelector("#totalPrice");
const shippingCharges = document.querySelector("#shippingCharges");

// CART
const cart = {
  items: [
    { name: "Vintage Backbag", qty: 1, price: 94.99, discountPrice: 54.99 },
    {
      name: "Levis Shoes",
      qty: 1,
      price: 124.99,
      discountPrice: 74.99,
    },
  ],
  shippingCharges: function () {
    if (this.items[0].qty > 0 || this.items[1].qty > 0) {
      return 19;
    } else return 0;
  },
  totalPrice: function () {
    let result =
      this.items[0].qty * this.items[0].discountPrice +
      this.items[1].qty * this.items[1].discountPrice +
      this.shippingCharges();
    return Math.round(result);
  },
};

// ITEM 1 VINTAGE BACKBAG
const item_1_Qty = document.querySelector("#item_1_Qty");
const item_1_Qty_Plus = document.querySelector("#item_1_Qty_Plus");
const item_1_Qty_Minus = document.querySelector("#item_1_Qty_Minus");

item_1_Qty_Minus.addEventListener("click", () => {
  if (cart.items[0].qty === 1) {
    cart.items[0].qty = 0;
    item_1_Qty_Minus.setAttribute("disabled", "");
  } else {
    cart.items[0].qty = cart.items[0].qty - 1;
  }
  item_1_Qty_Plus.removeAttribute("disabled");
  item_1_Qty.textContent = cart.items[0].qty;
  totalPrice.textContent = `$${cart.totalPrice()}`;
  shippingCharges.textContent = `$${cart.shippingCharges()}`;
});

item_1_Qty_Plus.addEventListener("click", () => {
  if (cart.items[0].qty === 4) {
    cart.items[0].qty = 5;
    item_1_Qty_Plus.setAttribute("disabled", "");
  } else {
    cart.items[0].qty = cart.items[0].qty + 1;
  }
  item_1_Qty_Minus.removeAttribute("disabled");
  item_1_Qty.textContent = cart.items[0].qty;
  totalPrice.textContent = `$${cart.totalPrice()}`;
  shippingCharges.textContent = `$${cart.shippingCharges()}`;
});

// ITEM 2 LEVIS SHOES
const item_2_Qty = document.querySelector("#item_2_Qty");
const item_2_Qty_Plus = document.querySelector("#item_2_Qty_Plus");
const item_2_Qty_Minus = document.querySelector("#item_2_Qty_Minus");

item_2_Qty_Minus.addEventListener("click", () => {
  if (cart.items[1].qty === 1) {
    cart.items[1].qty = 0;
    item_2_Qty_Minus.setAttribute("disabled", "");
  } else {
    cart.items[1].qty = cart.items[1].qty - 1;
  }
  item_2_Qty_Plus.removeAttribute("disabled");
  item_2_Qty.textContent = cart.items[1].qty;
  totalPrice.textContent = `$${cart.totalPrice()}`;
  shippingCharges.textContent = `$${cart.shippingCharges()}`;
});

item_2_Qty_Plus.addEventListener("click", () => {
  if (cart.items[1].qty === 4) {
    cart.items[1].qty = 5;
    item_2_Qty_Plus.setAttribute("disabled", "");
  } else {
    cart.items[1].qty = cart.items[1].qty + 1;
  }
  item_2_Qty_Minus.removeAttribute("disabled");
  item_2_Qty.textContent = cart.items[1].qty;
  totalPrice.textContent = `$${cart.totalPrice()}`;
  shippingCharges.textContent = `$${cart.shippingCharges()}`;
});
