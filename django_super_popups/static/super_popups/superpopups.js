
var html_template = "<div><div class='topalert'>"+
"<i class='fa fa-times closebtn'></i>"+
"	<div class='icoarea'>"+
"		<i class='ico'></i>"+
"	</div>"+
"	<div class='textarea'>{{ message }}</div>"+
"</div><div>"

function show_alert(message, type, autohide){
	var $html = $(html_template);
	$html.find(".topalert").addClass(type);
	$html.find(".topalert .textarea").html(message);	
	$html.find(".topalert").removeClass("hide");
	// Adding the message to the top of the website
	$("body").prepend($html.html());
	// Add
	$(".topalert .closebtn").click(function(){
		$(this).parent().fadeOut( "slow", function() {
			$(this).remove();
		});
	})

	// Closing th emessage after some time when defined.
	if (typeof autohide != 'undefined'){
		setInterval(function(){
			$(".topalert").fadeOut( "slow", function() {
				$(this).remove();
			});
		}, autohide)
	}
}

function get(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}
// Message defined from GET variables.
if( typeof get("tyT") != 'undefined' && get("msT") != 'undefined'){
	show_alert(get("msT"), get("tyT"), get("autohide"));		
}
// Message defined from dictionary.
if ( typeof superpopups != 'undefined' ){
	if ( typeof superpopups.tyT != 'undefined' && 
		 typeof superpopups.msT != 'undefined'){
		show_alert(superpopups.msT, superpopups.tyT, superpopups.autohide);
	}
}