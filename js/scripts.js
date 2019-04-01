$(document).ready(function() {
  $("#groceries").submit(function(event) {
  var groceries = [$("#item1").val(), $("#item2").val(), $("#item3").val(), $("#item4").val(), $("#item5").val()];


  var groceryList = groceries.map(function(grocery) {
    return grocery.toUpperCase();

    });
  $(".result").text(groceryList.sort());

  $("button").click(function(){
    $("form").addClass(".display")
});
  event.preventDefault();

  });
});
