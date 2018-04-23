var task = [];

function result() {
	var result = document.getElementById('result');
	var str = '';
	for (var i = 0; i < task.length; i++) {
		str += '<li>' + task[i] + '</li>' + '<br>';
	}
	result.innerHTML = str;
};

result();

function add() {
	var i1 = document.getElementById('i1').value;
	task.push(i1);
	result();
};

function del() {
	task.pop();
	result();
};

