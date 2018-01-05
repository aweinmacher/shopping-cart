var cart = [];

var updateCart = function () {
  $(".cart-list").empty();
  var cartData = { "cart": cart };
  console.log(cartData);
  var source = $("#cart-template").html();
  var template = Handlebars.compile(source);
  var newHTML = template(cartData);
  $(".cart-list").append(newHTML);

  $(".total").empty();
  var totalPrice = 0;
  for (var item in cart) {
    totalPrice += cart[item].price * cart[item].quantity;
  }
  $(".total").append(totalPrice);
}

var addToCart = function (name, price) {
  for (var item in cart) {
    if (cart[item].name === name && cart[item].price === price) {
      cart[item].quantity++;
      console.log(cart);
      return;
    }
  }
  cart.push({
    name: name,
    price: price,
    quantity: 1
  });
  console.log(cart);
}

var removeFromCart = function (itemToRemove) {
  var itemIndex = itemToRemove.index();
  cart.splice(itemIndex, 1);
  console.log(cart);
  updateCart();
}


var clearCart = function () {
  cart = [];
  updateCart();
}



$('.view-cart').on('click', function () {
  $(".shopping-cart").toggleClass('show');
});

$('.container').on('click', '.add-to-cart', function () {
  var name = $(this).closest(".item").data().name;
  var price = $(this).closest(".item").data().price;
  addToCart(name, price);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

$('.shopping-cart').on('click', '.remove-from-cart', function () {
  var itemToRemove = $(this).closest('p');
  removeFromCart(itemToRemove);
})

updateCart();
