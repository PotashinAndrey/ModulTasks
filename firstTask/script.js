
"use strict";

var N = 0;

var elem = document.getElementById('tabelM');
var input = document.getElementById("input");
var button = document.getElementById('button');

button.addEventListener('click', getValue);
input.addEventListener('change', getValue);

document.body.onmouseover = document.body.onmouseout = changeBackGround;

function tableCreate(element, N) {
  remove();
  var table = document.createElement('table');
  table.id = 'remove';
  table.style.textAlign = 'center';
  table.style.width = '100%';
  table.style.height = '100%';

  for (var i = 1; i <= N; i++) {
    var tr = document.createElement('tr');

    for (var j = 1; j <= N; j++) {
      var td = document.createElement('td');
      td.innerHTML = (i * j).toString();
      tr.appendChild(td);
      td.setAttribute('data-value', j);
      td.setAttribute('class', 'title');
      td.setAttribute('data-title',  ' = ' + i + " * " + j);
    }

    table.appendChild(tr);
  }

  element.appendChild(table);
}

function remove() {
  var table = document.getElementById('remove');
  if (table) table.remove();
}

function check(number, a, b) {
  if (number < Math.min(a, b)) {number = Math.min(a, b)}
  if (number > Math.max(a, b)) {number = Math.max(a, b)}
  return number;
}

function getValue(event) {
  N = input.value;

  N = check(N, 10, 20);
  tableCreate(elem, N);

  return N;
}


