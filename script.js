var select = document.getElementById("test");
var options = select.children;
console.log(options);
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

//select
//option
//ul elemnt
//option loop
//append to li




