$(function() {

	var alphabetIcao = {
		A: 'Alfa',
		a: 'Alfa',
		B: 'Bravo',
		b: 'Bravo',
		C: 'Charlie',
		c: 'Charlie',
		D: 'Delta',
		d: 'Delta',
		E: 'Echo',
		e: 'Echo',
		F: 'Foxtrot',
		f: 'Foxtrot',
		G: 'Golf',
		g: 'Golf',
		H: 'Hotel',
		h: 'Hotel',
		I: 'India',
		i: 'India',
		J: 'Juliett',
		j: 'Juliett',
		K: 'Kilo',
		k: 'Kilo',
		L: 'Lima',
		l: 'Lima',
		M: 'Mike',
		m: 'Mike',
		N: 'November',
		n: 'November',
		O: 'Oscar',
		o: 'Oscar',
		P: 'Papa',
		p: 'Papa',
		Q: 'Quebec',
		q: 'Quebec',
		R: 'Romeo',
		r: 'Romeo',
		S: 'Sierra',
		s: 'Sierra',
		T: 'Tango',
		t: 'Tango',
		U: 'Uniform',
		u: 'Uniform',
		V: 'Victor',
		v: 'Victor',
		W: 'Whiskey',
		w: 'Whiskey',
		X: 'X-ray',
		x: 'X-ray',
		Y: 'Yankee',
		y: 'Yankee',
		Z: 'Zulu',
		x: 'Zulu',
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

		var decodedValue = alphabetIcao[splitedValue];
		console.log('decodedValue', decodedValue);
	}





});
