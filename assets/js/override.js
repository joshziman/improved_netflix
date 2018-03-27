
// simple element replace, not in use
$( ".element-old" ).replaceWith( '<div class="element-new">new</div>');




// display live clock
$(moment().format());
$( ".WatchNext-show-info" ).replaceWith( '<div id="status"><div id="the-end"></div><div id="clock"></div></div>');
function update() {
  $('#clock').html(moment().format('h:mm a'));
}
setInterval(update, 1000);



$( "#clock" ).before( '<div id="the-end">The End</div>');



//  simple text replace
$('.countdown-container').text('Play next episode');
