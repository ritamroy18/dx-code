// var select = document.getElementById("test");
var select = document.querySelectorAll('.test'); //Select by Class 
console.log(select);




// for (var i = 0; i < select.length; i++) {
select.forEach((value) => {

    var selectedText = value.options[value.selectedIndex].text;
    console.log(selectedText);
    // var divCreate = document.createElement('div');
    // var span = document.createElement('span');
    var input = document.createElement('input');

    input.value = selectedText;
    // span.innerText = selectedText
    // divCreate.innerHTML= selectedText;
    // value.parentElement.append(input);
    value.parentElement.append(input);
    input.style.display= 'block';
    // divCreate.style.display= 'block';
    value.style.display = 'none';   
    

var options = Array.from(value.children).slice(1);
console.log(options);



var ul = document.createElement('ul');
ul.classList.add('select-dropdown');

var data = '';

options.forEach((value, index) => {
    data = value.textContent;
    var li = document.createElement('li');    //Create Element with li
    li.setAttribute("data-value", index);
    li.appendChild(document.createTextNode(data));
    ul.appendChild(li);
    ul.style.display = 'none'; //add display none to ul
    
});
// select[i].parentElement.append(ul);
value.parentElement.append(ul);

});

// }



//select
//option
//ul elemnt
//option loop
//append to li



//new option select
//create div
//selcted value in the div
//ulhide
 




