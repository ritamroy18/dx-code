// var select = document.getElementById("test");
var select = document.querySelector('.test'); //Select by Class 
var options = Array.from(select.children);
console.log(options);
var ul = document.createElement('ul');
ul.classList.add('select-dropdown');


var data = '';
// for (var i = 0; i < options.length; i++) {
//     data += '<li  data-value="' + options[i].value + '">' + options[i].textContent + '</li>'
//     console.log( options[i].textContent)
// }

options.forEach((value, index) => {

    // console.log(`i value: ${index} | Value:`, value.textContent);
    // data += '<li  data-value="' + index + '">' + value.textContent + '</li>'
    data = value.textContent;
    var li = document.createElement('li');    //Create Element with li
    li.setAttribute("data-value", index);
    li.appendChild(document.createTextNode(data));
    ul.appendChild(li);

});
select.parentElement.append(ul);


//select
//option
//ul elemnt
//option loop
//append to li




