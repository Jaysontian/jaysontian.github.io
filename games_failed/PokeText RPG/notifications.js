var Notifications = {

	n: 0,
	
	init: function() {
		
		elem = $('<div>').attr({ 	// Create the notifications box, id and class name of notifications
			'id': 'notifications',
			'class': 'notifications'});
		
		$('<div>').attr('id', 'notifyGradient').appendTo(elem); // Create the transparency gradient
		
		elem.appendTo('div#wrapper'); // add to html

	},
	
	
	notify: function(text) { // Allow notification to the player
		Notifications.printMessage(text);
	},
	
	
	printMessage: function(t) {
		
		var text = $('<div>').addClass('notifications').css({'opacity': '0', 'margin-top':'20px'}).text(t).prependTo('div#notifications');

		text.animate({opacity: 1}, 600, 'linear', function() {
			// Do this every time we add a new message, this way we never have a large backlog to iterate through. Keeps things faster.
			Notifications.clearHidden();
		});
	},
	
	clearHidden: function() {
	
		// To fix some memory usage issues, we clear notifications that have been hidden.
		
		// We use position().top here, because we know that the parent will be the same, so the position will be the same.
		var bottom = $('#notifyGradient').position().top + $('#notifyGradient').outerHeight(true);
		
		$('.notification').each(function() {
		
			if($(this).position().top > bottom){
				$(this).remove();
			}
		
		});
		
	},

	printQueue: function(module) {
		if(typeof this.notifyQueue[module] != 'undefined') {
			while(this.notifyQueue[module].length > 0) {
				Notifications.printMessage(this.notifyQueue[module].shift());
			}
		}
	}
};
