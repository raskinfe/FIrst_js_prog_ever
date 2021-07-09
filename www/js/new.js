
function back(){
	window.history.back();
}


function create() {

	var date = document.getElementById('start').value;
	var time = document.getElementById('appt').value;
	var rooms =document.getElementById('rooms').value;
	var	desk= document.getElementById('desk').value;
	var monitor = document.getElementById('monitor').value;
	var port = document.getElementById('display').value;
	var additional = document.getElementById('additional').value;

	if(localStorage.getItem('element')==null) {

		localStorage.setItem('element', '[]');
	}

	var old_data = JSON.parse(localStorage.getItem('element'));
	old_data.push(date, time, rooms, desk, monitor, port, additional);

	localStorage.setItem('element', JSON.stringify(old_data));
	
	document.getElementById('message').innerHTML = "**You have succesfully booked**"

	return false;
}

function show() {

	if(localStorage.getItem('element')!=null) {
		

	let elements = JSON.parse(localStorage.getItem('element'));
	let element = elements.slice(6,12)

	document.getElementById('disp').innerHTML = element;
}

	
}

 