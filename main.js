$(document).ready(function() {

let calculator = {
	numberA:null,
	numberB:null,
	func:null,
	output:null,
	enter:null

}

$('#1').click(function() {
	if (calculator.numberA === null) {
		calculator.numberA = '1';
		calculator.output = '1';
		}
	else {
		if (calculator.numberA===String(calculator.numberA)) {
			calculator.numberA = calculator.numberA + '1'
			calculator.output = calculator.numberA
		}
		else {
			if (calculator.numberB === null) {
			calculator.numberB = '1';
			calculator.output = calculator.numberB;
			}
			else {
			calculator.numberB = calculator.numberB + '1';
			calculator.output = calculator.numberB;
			}

		}

	}
	output()
});

$('#2').click(function() {
	if (calculator.numberA === null) {
		calculator.numberA = '2';
		calculator.output = '2';
		}
	else {
		if (calculator.numberA===String(calculator.numberA)) {
			calculator.numberA = calculator.numberA + '2'
			calculator.output = calculator.numberA
		}
		else {
			if (calculator.numberB === null) {
			calculator.numberB = '2';
			calculator.output = calculator.numberB;
			}
			else {
			calculator.numberB = calculator.numberB + '2';
			calculator.output = calculator.numberB;
			}

		}

	}
	output()

});

$('#3').click(function() {
	if (calculator.numberA === null) {
		calculator.numberA = '3';
		calculator.output = '3';
		}
	else {
		if (calculator.numberA===String(calculator.numberA)) {
			calculator.numberA = calculator.numberA + '3'
			calculator.output = calculator.numberA
		}
		else {
			if (calculator.numberB === null) {
			calculator.numberB = '3';
			calculator.output = calculator.numberB;
			}
			else {
			calculator.numberB = calculator.numberB + '3';
			calculator.output = calculator.numberB;
			}

		}

	}
	output()

});

$('#4').click(function() {
	if (calculator.numberA === null) {
		calculator.numberA = '4';
		calculator.output = '4';
		}
	else {
		if (calculator.numberA===String(calculator.numberA)) {
			calculator.numberA = calculator.numberA + '4'
			calculator.output = calculator.numberA
		}
		else {
			if (calculator.numberB === null) {
			calculator.numberB = '4';
			calculator.output = calculator.numberB;
			}
			else {
			calculator.numberB = calculator.numberB + '4';
			calculator.output = calculator.numberB;
			}

		}

	}
	output()

});

$('#5').click(function() {
	if (calculator.numberA === null) {
		calculator.numberA = '5';
		calculator.output = '5';
		}
	else {
		if (calculator.numberA===String(calculator.numberA)) {
			calculator.numberA = calculator.numberA + '5'
			calculator.output = calculator.numberA
		}
		else {
			if (calculator.numberB === null) {
			calculator.numberB = '5';
			calculator.output = calculator.numberB;
			}
			else {
			calculator.numberB = calculator.numberB + '5';
			calculator.output = calculator.numberB;
			}

		}

	}
	output()

});

$('#6').click(function() {
	if (calculator.numberA === null) {
		calculator.numberA = '6';
		calculator.output = '6';
		}
	else {
		if (calculator.numberA===String(calculator.numberA)) {
			calculator.numberA = calculator.numberA + '6'
			calculator.output = calculator.numberA
		}
		else {
			if (calculator.numberB == null) {
			calculator.numberB = '6';
			calculator.output = calculator.numberB;
			}
			else {
			calculator.numberB = calculator.numberB + '6';
			calculator.output = calculator.numberB;
			}

		}

	}
	output()

});

$('#7').click(function() {
	if (calculator.numberA === null) {
		calculator.numberA = '7';
		calculator.output = '7';
		}
	else {
		if (calculator.numberA===String(calculator.numberA)) {
			calculator.numberA = calculator.numberA + '7'
			calculator.output = calculator.numberA
		}
		else {
			if (calculator.numberB === null) {
			calculator.numberB = '7';
			calculator.output = calculator.numberB;
			}
			else {
			calculator.numberB = calculator.numberB + '7';
			calculator.output = calculator.numberB;
			}

		}

	}
	output()

});

$('#8').click(function() {
	if (calculator.numberA === null) {
		calculator.numberA = '8';
		calculator.output = '8';
		}
	else {
		if (calculator.numberA===String(calculator.numberA)) {
			calculator.numberA = calculator.numberA + '8'
			calculator.output = calculator.numberA
		}
		else {
			if (calculator.numberB === null) {
			calculator.numberB = '8';
			calculator.output = calculator.numberB;
			}
			else {
			calculator.numberB = calculator.numberB + '8';
			calculator.output = calculator.numberB;

			}

		}

	}
	output()

});

$('#9').click(function() {
	if (calculator.numberA === null) {
		calculator.numberA = '9';
		calculator.output = '9';
		}
	else {
		if (calculator.numberA===String(calculator.numberA)) {
			calculator.numberA = calculator.numberA + '9'
			calculator.output = calculator.numberA
		}
		else {
			if (calculator.numberB === null) {
			calculator.numberB = '9';
			calculator.output = calculator.numberB;
			}
			else {
			calculator.numberB = calculator.numberB + '9';
			calculator.output = calculator.numberB;
			}

		}

	}
	output()

});

$('#0').click(function() {
	if (calculator.numberA === null) {
		calculator.numberA = '0';
		calculator.output = '0';
		}
	else {
		if (calculator.numberA===String(calculator.numberA)) {
			calculator.numberA = calculator.numberA + '0'
			calculator.output = calculator.numberA
		}
		else {
			if (calculator.numberB === null) {
			calculator.numberB = '0';
			calculator.output = calculator.numberB;
			}
			else {
			calculator.numberB = calculator.numberB + '0';
			calculator.output = calculator.numberB;
			}

		}

	}
	output()

});


$('#plus').click(function() {
	console.log('plus');
	if (calculator.enter) {
		calculator.func = 'plus'
		calculator.numberA=Number(calculator.numberA)
		calculator.numberB = null
	}

	else {
		calculator.func = 'plus'
		calculator.numberA=Number(calculator.numberA)
	}

});

$('#min').click(function() {
	console.log('min');
	if (calculator.enter) {
		calculator.func = 'min'
		calculator.numberA=Number(calculator.numberA)
		calculator.numberB = null
	}

	else {
		calculator.func = 'min'
		calculator.numberA=Number(calculator.numberA)
	}

});

$('#umn').click(function() {
	console.log('umn');
	if (calculator.enter) {
		calculator.func = 'umn'
		calculator.numberA=Number(calculator.numberA)
		calculator.numberB = null
	}

	else {
		calculator.func = 'umn'
		calculator.numberA=Number(calculator.numberA)
	}

});

$('#del').click(function() {
	console.log('del');
	if (calculator.enter) {
		calculator.func = 'del'
		calculator.numberA=Number(calculator.numberA)
		calculator.numberB = null
	}

	else {
		calculator.func = 'del'
		calculator.numberA=Number(calculator.numberA)
	}

});

$('#enter').click(function() {
	console.log('enter');
	calculator.numberB=Number(calculator.numberB)
	
	if (calculator.func === 'plus') {
		calculator.enter = (calculator.enter ? calculator.enter : calculator.numberA) + calculator.numberB;
		calculator.numberA = calculator.enter;
		calculator.numberA = String(calculator.numberA)
		calculator.output = calculator.enter;
	}



	if (calculator.func === 'del') {
		calculator.enter = (calculator.enter ? calculator.enter : calculator.numberA) / calculator.numberB;
		calculator.numberA = calculator.enter;
		calculator.numberA = String(calculator.numberA)
		calculator.output = calculator.enter;
	}

	if (calculator.func === 'umn') {
		calculator.enter = (calculator.enter ? calculator.enter : calculator.numberA) * calculator.numberB;
		calculator.numberA = calculator.enter;
		calculator.numberA = String(calculator.numberA)
		calculator.output = calculator.enter;
	}

	if (calculator.func === 'min') {
		calculator.enter = (calculator.enter ? calculator.enter : calculator.numberA) - calculator.numberB;
		calculator.numberA = calculator.enter;
		calculator.numberA = String(calculator.numberA)
		calculator.output = calculator.enter;
	}


	output();
});

$('#delete').click(function() {
	console.log('delete');
	calculator.numberA=null;
	calculator.numberB=null;
	calculator.func=null;
	calculator.output=0;
	output();
});


function output() {
	$('#output').text(calculator.output);


}



});