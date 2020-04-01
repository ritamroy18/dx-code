var select = document.getElementById("test");
var options = select.children;
console.log(options);
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


//select
//option
//ul elemnt
//option loop
//append to li




