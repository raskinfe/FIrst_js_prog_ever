function Event_create() {

	if(localStorage.getItem('event') == null) {

		localStorage.setItem('event', '[]');
	}

	let category = document.getElementById('category').value;
	let event_title = document.getElementById('event-title').value;
	let start = document.getElementById('start').value;
	let appt = document.getElementById('appt').value;
	let end= document.getElementById('end').value;
	let endt = document.getElementById('endt').value;
	let rooms = document.getElementById('location').value;
	let addr = document.getElementById('address').value;
	let priv = document.getElementById('privacy').value;

	console.log( event_title, start, appt, end, endt, addr, priv);

	var old_data = JSON.parse(localStorage.getItem('event'));
	
	//old_data.pop()
	

	old_data.push(category, event_title, start, appt, end, endt, rooms, addr, priv);
	console.log(old_data)

	localStorage.setItem('event', JSON.stringify(old_data));
	document.getElementById('msg').innerHTML = "** You have booked your next event succesfully**"

	return false;
}

function cancel_event() {

	document.getElementById('frm').value = "";
	window.location.replace('../html/tabs.html');
}