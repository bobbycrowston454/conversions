var liters = function(liters1) {
  return (liters1 * 4.2);
};
var grams = function(grams1) {
  return (grams1 * 0.00220462);
};
var pint = function(pint1) {
  return (pint1 * 2);
};
var gallons = function(gallons1) {
  return (gallons1 / 4);
};
$(document).ready(function() {
  $("form#liters").submit(function(event) {
    var liters1 = parseInt($("#liters1").val());
    var result = liters(liters1);
    $("#output").text(result);
    event.preventDefault();
  });
});
$(document).ready(function() {
  $("form#grams").submit(function(event) {
    var grams1 = parseInt($("#grams1").val());
    var result = grams(grams1);
    $("#output").text(result);
    event.preventDefault();
  });
});
$(document).ready(function() {
  $("form#pint").submit(function(event) {
    var pint1 = parseInt($("#pint1").val());
    var result = pint(pint1);
    $("#output").text(result);
    event.preventDefault();
  });
});
$(document).ready(function() {
  $("form#gallons").submit(function(event) {
    var gallons1 = parseInt($("#gallons1").val());
    var result = gallons(gallons1);
    $("#output").text(result);
    event.preventDefault();
  });
});
