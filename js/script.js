function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function queryMessage() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var message = document.getElementById('msg').value;

	if (name.length > 1) {
		document.getElementById("printName").innerHTML= "Thank you for contacting our Capo, " + name;
	} 
		else if (name.length < 1) {
			alert("Don't try to hide from Capo. Enter your name.");
			document.getElementById("printEmail").innerHTML= " ";
			document.getElementById("printName").innerHTML= "You can't remain anonymous within Family territory. ";
			document.getElementById("printMsg").innerHTML= " ";
		}

	if (email.length > 3 && name.length > 1) {
		document.getElementById("printEmail").innerHTML= "He will send his coded reply to: " + email;
	} 
		else if (email.length < 1) {
				alert("Enter a valid email address or Capo will find you.");
				document.getElementById("printEmail").innerHTML= " ";
				document.getElementById("printName").innerHTML= "Even the Mob is in the cloud nowadays... ;)";
				document.getElementById("printMsg").innerHTML= " ";
	}

	if (message.length > 1 && email.length > 1 && name.length > 1) {
		document.getElementById("printMsg").innerHTML= "If your message is deemed worthy you may receive a response from a Don personally. Good luck.";
	} 
		else if (message.length < 1) {
				alert("Please enter a valid message, or risk swift retribution from Capo.");
				document.getElementById('printName').innerHTML= "Do not make the same mistake again; no-one likes angry Capo.";
				document.getElementById("printEmail").innerHTML= "  ";
				document.getElementById("printMsg").innerHTML= " ";
	}

	if (message == "I AM SASSY") {
		alert("Your SASSiness has attracted the attention of our Dons. They will be in touch.");
		document.getElementById("printName").innerHTML="Thank you for contacting the Capo, " + name;
		document.getElementById("printEmail").innerHTML= "We hope your supplied email; " + email + ", is secure.";
		document.getElementById("printMsg").innerHTML= "Your discretion is much appreciated by the Family.";

		}
};
