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
    input.classList.add('custom-select');

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

//Hide show ul and li on Click 

document.addEventListener('click', function (e) {
    if (e.target.className == 'custom-select') {
        var allElement = e.target.parentElement;
        console.log(allElement); //All Node
        var target = e.target.parentNode.children[2]; //Get Ul
        console.log(target);
        if (target.style.display === 'none' || target.style.display === '')
        target.style.display = 'block';
        else
        target.style.display = 'none';       
     
    }
});


//Filter data 


document.addEventListener('input', function (e) {
    // document.querySelector('.custom-select');
    var allElement = e.target.parentElement;//All Node
    // console.log(allElement);
    var input = e.target.parentNode.children[1].value; //Get Input value
    console.log(input)
    var ul = e.target.parentNode.children[2]; //Get Ul
    console.log(ul);
    var filter = input.toLowerCase();


    var li = document.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      txtValue = li[i].textContent || li[i].innerText;
      console.log(txtValue);
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
    // let list = Array.from(e.target.parentNode.children[0]).slice(1);
    // console.log(list);

    // list.forEach((value) => {
    //     let data = [];

    //     data = Array.from(value.textContent);
    //     console.log(data);
    //     if (data.toUpperCase().indexOf(filter) > -1) {
    //         value.style.display = "";
    //       } else {
    //         value.style.display = "none";
    //       }
    //     // data.filter(data=>data.toLowerCase().includes(input));

    
    // });

});

//select
//option
//ul elemnt
//option loop
//append to li



//new option select
//create div
//selcted value in the div
//ulhide
 




