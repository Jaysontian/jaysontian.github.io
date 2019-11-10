



function loadbuttonextension() {
	var buttons = ['closenotify'];

	var i;
	var fnstring;
	var fn;
	var link;

	for (i=0; i < buttons.length;i++){

		// function we want to run
		fnstring = buttons[i];
		// find object
		fn = window[fnstring];


		link = document.getElementById('click' + buttons[i]);

		    // onClick's logic below:
	    link.addEventListener('click', function() {
			// is object a function?
			if (typeof fn === "function") fn();

	    });
	}
}


function ah(){
	data.milk++;
}

/*
if (buttons[i].includes("*")){
			var split = buttons[i].split('*');
			var fnstring = split[0];
			console.log(split);
			var fn = window[fnstring];
			var link = document.getElementById('click' + buttons[i]);
		    link.addEventListener('click', function() {
				if (typeof fn === "function") fn().apply(null, split[1]);;
		    });
		}*/