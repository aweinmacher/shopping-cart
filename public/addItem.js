var itemsList = [];

var addItem = function (name, price, imageLink) {
  itemsList.push({
    name: name,
    price: price,
    imageLink: imageLink
  });
  console.log(itemsList);
}

var postItem = function () {
  $(".new-items").empty();
  var source = $("#newitem-template").html();
  var template = Handlebars.compile(source);
  var itemsData = { items: itemsList };
  var newHTML = template(itemsData);
  $(".new-items").append(newHTML);
};


$(".add-item").on("click", function () {
  var name = $(this).closest("form").find("#name").val();
  var price = $(this).closest("form").find("#price").val();
  var imageLink = $(this).closest("form").find("#imageLink").val();
  addItem(name, price, imageLink);
  postItem();
  $(this).closest("form").find("#name").val("");
  $(this).closest("form").find("#price").val("");
  $(this).closest("form").find("#imageLink").val("");
});
