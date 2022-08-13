$(document).ready(function() {
    var banner = $(".about");
    var imgs = $(".parallax");
// /////////////////////////////////////////////////////////////
function showAllObjects (object) {
		object.fadeIn(900);
}
// /////////////////////////////////////////////////////////////
function moving (object, speed) {
	banner.on('mousemove', function(event) {
		var X = Math.floor((event.pageX)/speed-20) + "px";
    	var Y = Math.floor((event.pageY)/speed) + "px";	
    	object.css('transform', 'translate('+X+' , '+Y+')');
	});
}
// /////////////////////////////////////////////////////////////
function moveAll (object) {
	moving($(object[0]),22);
	moving($(object[1]),22);
	moving($(object[2]),22);
	moving($(object[3]),22);
	moving($(object[4]),22);	
}
// /////////////////////////////////////////////////////////////
showAllObjects(imgs);
moveAll(imgs);
// /////////////////////////////////////////////////////////////
});

jQuery(document).ready(function(){
    $('.circle').mousemove(function(e){
      var rXP = (e.pageX - this.offsetLeft-$(this).width()-1);
      var rYP = (e.pageY - this.offsetTop-$(this).height()-1);
      $('.circle').css('text-shadow', +rYP/60+'px '+rXP/60+'px rgba(0,0,0,0.3), '+rXP/60+'px '+rYP/60+'px #B0EAEA');
    });
 });