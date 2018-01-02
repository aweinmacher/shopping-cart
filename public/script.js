var cart = [];

var updateCart = function () {
  $(".cart-list").empty();
  var cartData = {"cart": cart};
  console.log(cartData);
  var source = $("#cart-template").html();
  var template = Handlebars.compile(source);
  var newHTML = template(cartData);
  $(".cart-list").append(newHTML);
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
}


var addItem = function (item) {
  cart.push(item);
  console.log(cart);
}

var clearCart = function () {
  cart = [];
  updateCart();
}

$('.view-cart').on('click', function () {
  $(".shopping-cart").toggleClass('show'); 
});

$('.add-to-cart').on('click', function () {
  var item = {
    name: $(this).closest(".item").data().name,
    price: $(this).closest(".item").data().price
  }
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
