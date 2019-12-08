$(function() {

	var alphabetIcao = {
		a: 'Alfa',
		b: 'Bravo',
		c: 'Charlie',
		d: 'Delta',
		e: 'Echo',
		f: 'Foxtrot',
		g: 'Golf',
		h: 'Hotel',
		i: 'India',
		j: 'Juliett',
		k: 'Kilo',
		l: 'Lima',
		m: 'Mike',
		n: 'November',
		o: 'Oscar',
		p: 'Papa',
		q: 'Quebec',
		r: 'Romeo',
		s: 'Sierra',
		t: 'Tango',
		u: 'Uniform',
		v: 'Victor',
		w: 'Whiskey',
		x: 'X-ray',
		y: 'Yankee',
		z: 'Zulu',
		0: 'Zero',
		1: 'One',
		2: 'Two',
		3: 'Three',
		4: 'Four',
		5: 'Five',
		6: 'Six',
		7: 'Seven',
		8: 'Eight',
		9: 'Nine',
		100: 'Hundred',
		1000: 'Thousand',
		' ': '',
		'.': 'Stop',   
	};
	
	var userInput = prompt('Input your message', "");

	var splitedStringArr = userInput.split('');	// получаем массив разбитых строк

	for (var i = 0; i < splitedStringArr.length; i++) {	// инициадизируем проход по массиву
		var splitedValue = splitedStringArr[i];	// перем каждое значение элемента массива по его индексу

		splitedValue = splitedValue.toLowerCase(); // преоразовываем в нижний регистр

		var decodedValue = alphabetIcao[splitedValue];
		console.log('decodedValue', decodedValue);
	}





});
