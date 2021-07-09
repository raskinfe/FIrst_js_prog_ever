function register() {




	var first_name = document.getElementById('first_name').value;
	var	last_name = document.getElementById('last_name').value;
	var username = document.getElementById('username').value;
	var email = document.getElementById('email').value;
	var	password = document.getElementById('newPassword').value;
	var	company = document.getElementById('company_name').value;
	var department = document.getElementById('department').value;
	var position = document.getElementById('position').value

	if(localStorage.getItem('data')==null) {
		localStorage.setItem('data', '[]');
	}

	var old_data = JSON.parse(localStorage.getItem('data'));
	old_data.push(first_name, last_name, username, email, password, company, department, position);

	localStorage.setItem('data', JSON.stringify(old_data));
	document.getElementById('successful').innerHTML = "**You have registered succesfully!"

	//var frm = document.getElementsByName('contact-form')[0];
		//frm.submit(); // Submit the form
		//frm.reset();  // Reset all form data
		
		
		
		//window.location.href = '../index.html'
		//return false; // Prevent page refresh


}	
	

function display() {

	if(localStorage.getItem('data')!=null) {

		let first_name = JSON.parse(localStorage.getItem('data'));
		let first = first_name.slice(0,8);

		
		//window.localStorage.clear();
		document.getElementById('output').innerHTML = first;

	}
}


function verifyPassword() {

	var pass1 = document.getElementById('newPassword').value;
	var pass2 = document.getElementById('password_confirm').value;

	if(pass1!=pass2) {
		document.getElementById('message').innerHTML = "**Password doesn't match";
		return false;
	}

	//minimum length 

	if(pass1.length<8){
		document.getElementById('message-length').innerHTML = "Minimum length required is 8";
		return false;
	}

	if(pass2.length<8){
		document.getElementById('message').innerHTML = "Minimum length required is 8";
		return false;
	}




	
	return true;
}



function back() {

	// body...
	window.location.reload(true);
	window.location.replace("../login.html");

}

