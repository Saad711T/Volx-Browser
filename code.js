var search;
onEvent("button2", "click", function( ) {
  search = getText("text_input2");
  output = "https://www.google.com/search?q="+search;
  open (output);
});
