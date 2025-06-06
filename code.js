var search;
onEvent("button2", "click", function() {
  search = getText("text_input2");
  var output = "https://www.google.com/search?q=" + encodeURIComponent(search);
  open(output);
});
