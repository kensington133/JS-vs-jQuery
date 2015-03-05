$(function(){

	console.log('Test 1 Looping - jQuery');
	console.time('test1');
		test1();
	console.timeEnd('test1');

	console.log('Test 2 Getting Text - jQuery');
	console.time('test2');
		test2();
	console.timeEnd('test2');

	console.log('Test 3 Getting Input Value - jQuery');
	console.time('test3');
		test3();
	console.timeEnd('test3');

	console.log('Test 4 Changing Text - jQuery');
	console.time('test4');
		test4();
	console.timeEnd('test4');

	console.log('Test 5 Changing Input Value - jQuery');
	console.time('test5');
		test5();
	console.timeEnd('test5');

	console.log('Test 6 Create and Load Image - jQuery');
	console.time('test6');
		test6();
	console.timeEnd('test6');

	console.log('Test 7 AJAX - jQuery');
	console.time('test7');
		test7();
	console.timeEnd('test7');
});

var testArray = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'Vivamus', 'pharetra', 'enim', 'sit', 'amet', 'justo', 'imperdiet', 'elementum', 'Morbi', 'nec', 'efficitur', 'sapien', 'Integer', 'vel', 'scelerisque', 'dolor', 'Ut', 'at', 'massa', 'quam', 'Aenean', 'cursus', 'sed', 'eros', 'vitae', 'laoreet', 'Pellentesque', 'vel', 'ante', 'massa', 'Sed', 'id', 'magna', 'id', 'ipsum', 'volutpat', 'condimentum', 'id', 'eu', 'leo', 'Vivamus', 'erat', 'purus', 'cursus', 'in', 'mauris', 'ut', 'ultricies', 'lobortis', 'lectus', 'Vestibulum', 'cursus', 'blandit', 'ex', 'vel', 'hendrerit', 'Praesent', 'viverra', 'lacus', 'eu', 'cursus', 'blandit', 'dolor', 'ex', 'interdum', 'sapien', 'non', 'venenatis', 'metus', 'tellus', 'eget', 'nisl', 'Aenean', 'at', 'massa', 'nulla', 'Mauris', 'nulla', 'ante', 'finibus', 'at', 'tempor', 'in', 'dignissim', 'et', 'eros', 'Vivamus', 'blandit', 'ex', 'non', 'enim', 'mollis'];

function test1(){
	$.each(testArray, function(index){
		console.log(index);
	});
}

function test2(){
	var text = $('#text').text();
	console.log(text);
}

function test3(){
	var input = $('#inputGet').val();
	console.log(input);
}

function test4(){
	$('#changMe').text("This text has changed!");
}

function test5(){
	$('#inputSet').val('This value has changed!');
}

function test6(){
	var image = $('<img />').attr('src', 'img/test-image.jpg');
	$('#imageAppend').append(image);
}

function test7(){
	$.getJSON('http://reqr.es/api/users', function(response){
		$('#userID').text('User ID: '+ response.data[0].id);
		$('#userName').text('User Name: '+response.data[0].first_name +' '+ response.data[0].last_name);
	});
}