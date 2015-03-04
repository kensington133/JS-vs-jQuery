window.onload = function(){

	console.log('Test 1 - JavaScript');
	console.time('test1');
		test1();
	console.timeEnd('test1');

	console.log('Test 2 - JavaScript');
	console.time('test2');
		test2();
	console.timeEnd('test2');

	console.log('Test 3 - JavaScript');
	console.time('test3');
		test3();
	console.timeEnd('test3');

	console.log('Test 4 - JavaScript');
	console.time('test4');
		test4();
	console.timeEnd('test4');

	console.log('Test 5 - JavaScript');
	console.time('test5');
		test5();
	console.timeEnd('test5');

	console.log('Test 6 - JavaScript');
	console.time('test6');
		test6();
	console.timeEnd('test6');

	console.log('Test 7 - JavaScript');
	console.time('test7');
		test7();
	console.timeEnd('test7');

}


var testArray = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'Vivamus', 'pharetra', 'enim', 'sit', 'amet', 'justo', 'imperdiet', 'elementum', 'Morbi', 'nec', 'efficitur', 'sapien', 'Integer', 'vel', 'scelerisque', 'dolor', 'Ut', 'at', 'massa', 'quam', 'Aenean', 'cursus', 'sed', 'eros', 'vitae', 'laoreet', 'Pellentesque', 'vel', 'ante', 'massa', 'Sed', 'id', 'magna', 'id', 'ipsum', 'volutpat', 'condimentum', 'id', 'eu', 'leo', 'Vivamus', 'erat', 'purus', 'cursus', 'in', 'mauris', 'ut', 'ultricies', 'lobortis', 'lectus', 'Vestibulum', 'cursus', 'blandit', 'ex', 'vel', 'hendrerit', 'Praesent', 'viverra', 'lacus', 'eu', 'cursus', 'blandit', 'dolor', 'ex', 'interdum', 'sapien', 'non', 'venenatis', 'metus', 'tellus', 'eget', 'nisl', 'Aenean', 'at', 'massa', 'nulla', 'Mauris', 'nulla', 'ante', 'finibus', 'at', 'tempor', 'in', 'dignissim', 'et', 'eros', 'Vivamus', 'blandit', 'ex', 'non', 'enim', 'mollis'];

function test1(){
	testArray.forEach( function(item, index){
		console.log(index);
	});
}

function test2(){
	var text = document.getElementById('text').innerHTML;
	console.log(text);
}

function test3(){
	var input = document.getElementById('inputGet').value;
	console.log(input);
}

function test4(){
	document.getElementById('changeMe').innerHTML = "This text has changed!";
}

function test5(){
	document.getElementById('inputSet').value = "This value has changed!";
}

function test6(){
	var divToAppend = document.getElementById('imageAppend');
	var image = document.createElement('img');
	image.src = "img/test-image.jpg";
	divToAppend.appendChild(image);
}

function test7(){
	xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4){
			json = eval('('+xhr.response+')');
			document.getElementById('userID').innerHTML = 'User ID: '+ json.data[0].id;
			document.getElementById('userName').innerHTML = 'User Name: '+json.data[0].first_name +' '+ json.data[0].last_name;
		}
	}

	xhr.open('GET', 'http://reqr.es/api/users', true);
	xhr.send('');
}