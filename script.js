var select = document.getElementById("test");
var options = select.children;
console.log(options);
<<<<<<< HEAD
var ul = document.createElement('ul');
ul.classList.add('select-dropdown');
var li = document.createElement('li');
li.classList.add('select-dropdown-item');

var data = '';
for (var i = 0; i < options.length; i++) {
    data += '<li  data-value="' + options[i].value + '">' + options[i].textContent + '</li>'
    console.log( options[i].textContent)
}
// li.appendChild = data;
ul.innerHTML = data;
select.parentElement.append(ul);


=======
// var text = stateSelect.options[stateSelect.selectedIndex].text;

var node = document.createElement('div');
node.classList.add('select-dropdown__button');
select.parentElement.appendChild(node);

var ul = document.createElement('ul');
ul.classList.add('select-dropdown');

var data = '';
for (var i = 0; i < options.length; i++) {
    data += '<li class="select-dropdown-item" data-value="' + options[i].value + '">' + options[i].textContent + '</li>'
    console.log( options[i].textContent)
}

ul.innerHTML = data;
select.parentElement.append(ul);

>>>>>>> b7114d3efaebffa93ab5b913f13959a7c9002f0a
//select
//option
//ul elemnt
//option loop
//append to li




