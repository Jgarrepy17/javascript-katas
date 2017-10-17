/*1.1- Conditionals with Prompt */

//Conditional where flavor = chocalate or vanilla
//Prompt for flavor, then output "here's your"+ flavor
//if strawberry alert 'all out of strawberry'
//else alert no such flavor
//Continue while flavor does not equal coffee
//xxThen Write "No Coffee Allowed in School!!"
//Put in a for loop aksing for 3 scoops.
//After each scoop, alert"Here's your" flavor

for (i = 0; i <3; i++){
	flavor = prompt('Please enter the kind of ice cream you want either vanilla chocalate or strawberry');
	if (flavor == 'chocolate' || flavor == 'strawberry'){
		alert('you have selected '+flavor);
	}
	else if (flavor == 'vanilla'){
		alert('I am so sorry but all the vanilla is gone');
		i= i-1
	}
	else{
		alert('No such flavor exists');
		i= i-1
		}
}
while (flavor != 'coffee');
