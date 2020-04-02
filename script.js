var select = document.getElementById("test");
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
<<<<<<< HEAD
=======

    // document.getElementsByTagName("li").setAttribute("data-value", index);
>>>>>>> aacc754dbe23c6d01fb5b430640ba2ca51ad20b7

    // console.log(`i value: ${index} | Value:`, value.textContent);
    // data += '<li  data-value="' + index + '">' + value.textContent + '</li>'
    data = value.textContent;
    var li = document.createElement('li');    //Create Element with li
    li.setAttribute("data-value", index);
    li.appendChild(document.createTextNode(data));
    ul.appendChild(li);
    select.parentElement.append(ul);
<<<<<<< HEAD
    
=======
>>>>>>> aacc754dbe23c6d01fb5b430640ba2ca51ad20b7

});

//select
//option
//ul elemnt
//option loop
//append to li




