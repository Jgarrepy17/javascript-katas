/*1.1- Conditionals with Prompt */

//Conditional where flavor = chocalate or vanilla
//Prompt for flavor, then output "here's your"+ flavor
//if strawberry alert 'all out of strawberry'
//else alert no such flavor
flavor = prompt('Please enter the kind of ice cream you want either vanilla chocalate or strawberry')

if (flavor == 'chocalate'){
	alert('you have selected chocalate')
	
}
else if (flavor == 'strawberry'){
	alert('You have selected Strawberry')
}
else if (flavor == 'vanilla'){
	alert('I am so sorry but all the vanilla is gone')
}
else{
	alert('No such flavor exists')
}