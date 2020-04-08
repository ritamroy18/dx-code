// var select = document.getElementById("test");
var select = document.querySelectorAll('.test'); //Select by Class 

console.log(select);


// for (var i = 0; i < select.length; i++) {
select.forEach((value) => {
    var selectedText = value.options[value.selectedIndex].text;
    console.log(selectedText);
    var divCreate = document.createElement('div');
    // var span = document.createElement('span');
    var input = document.createElement('input');
    input.classList.add('custom-select');

    // input.value = selectedText;
    // span.innerText = selectedText
    divCreate.innerHTML= selectedText;
    // value.parentElement.append(input);
    value.parentElement.append(input);
    value.parentElement.append(divCreate);
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
    li.classList.add('li-list');
    li.setAttribute("data-value", index);
    li.setAttribute("value", index);
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
        var target = e.target.parentNode.children[3]; //Get Ul
        console.log(target);
        var targetDiv = e.target.parentNode.children[2]; //Get DIV
        console.log(targetDiv);
        if (target.style.display === 'none' || target.style.display === '')
        {
          target.style.display = 'block';
          targetDiv.style.display = 'block';
        }

        else
        {
          target.style.display = 'none';       
          targetDiv.style.display = 'block';
        }
    }
});

// 

document.addEventListener('click', function (e) {
    if (e.target.className == 'li-list') {
        var allElement = e.target.parentNode;
        // console.log(allElement);
      var input  = e.target.parentNode.previousSibling.previousElementSibling;
      console.log(input);
        var target =  e.target.parentNode.children;
        // console.log(target);
        let list = Array.from(target);
        // console.log(list);
        for (let i = 0; i < list.length; i++) {
            // console.log(list[i].value);
            // console.log(list[i].textContent);
            console.log(e.target.getAttribute('data-value'));
            if (list[i].value == e.target.getAttribute('data-value')) {
                target.textContent = list[i].textContent;
                // console.log(list[i].textContent);
                // console.log(target.textContent);
                input.value = list[i].textContent;
                allElement.style.display = 'none';
            }
        }
    }
});



//Filter data



// document.addEventListener('input', function (e) {
//   // document.querySelector('.custom-select');
//   var allElement = e.target.parentElement;//All Node
//   console.log(allElement);
//   var input = e.target.parentNode.children[1].value; //Get Input value
//   console.log(input);
//   var ul = e.target.parentNode.children[2]; //Get Ul
//   console.log(ul);
//   var filter = input.toLowerCase();
//   console.log(filter);

//   var select = e.target.parentNode.children[0]; //Get Select
//   console.log(select);
//   let dataArray = [];

//   var options = Array.from(select.children).slice(1);
//   console.log(options);
//   var li = document.getElementsByTagName("li");
//   for (i = 0; i < options.length; i++) {
//     txtValue = options[i].textContent;
//     console.log(txtValue);
//         if (txtValue.toLowerCase().includes(filter)) {
//         console.log("1");
//         li[i].style.display = "";
//       } else {
//         console.log("22");
//         li[i].style.display = "none";
//       }
//   }


// });


document.addEventListener('input', function (e) {
    // document.querySelector('.custom-select');
    
    var allElement = e.target.parentElement;//All Node
    console.log(allElement);
    var input = e.target.parentNode.children[1].value; //Get Input value
    console.log(input);
    var ul = e.target.parentNode.children[2]; //Get Ul
    console.log(ul);
    var filter = input.toLowerCase();

    var li = document.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      txtValue = li[i].textContent || li[i].innerText;
      console.log(txtValue);
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        console.log("1");
        li[i].style.display = "";
      } else {
        console.log("22");
        li[i].style.display = "none";
      }
    }
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
 

//div replace input
//selected value in div
//filter from input
//if any li clicks value willbe in the input and list hides
//if click outside of the input then ui li list hides 


