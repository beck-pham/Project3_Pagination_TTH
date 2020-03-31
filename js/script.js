/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
//create a variable that store student list from the DOM
//set limitation for 10 items per page
const studentList = document.getElementsByClassName('student-item');
const item = 10;



//create the showPage function to hide all the list items to only show 10 per page
//function contains two parameters (list and page)
   // set start index and end index
   // inerate over the list of student
      //if the index => 0 && < 10
         //display item as block
      // else
         // hide
function showPage(list, page) {
   let startIndex = (page * item) - item;
   let endIndex = page * item;
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         studentList[i].style.display = 'block';
      } else {
         studentList[i].style.display = 'none';
      }
   }
}

//call the showPage function here to display only 10 name for the first page initially
showPage(studentList, 1);


//create a function 'appendPageLinks'
//create div element to order to append it to the parent <div class='page'>
function appendPageLinks(list) {
   const numberOfPages = Math.floor(list.length / item)
   const div = document.createElement('div');
   div.className = 'pagination';
//create element base on order from largest item to smallest item in the DOM as the following
   const page = document.querySelector('.page');
   page.appendChild(div);
   
   const ul = document.createElement('ul');
   div.appendChild(ul);
//iterate through list of pages
//create anchor with href attribute
   for (let i = 0; i < numberOfPages; i++) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = i + 1;
      ul.appendChild(li);
      li.appendChild(a);
      //'#' place holder to make the page automatically scroll to the top of the page. MDN reference.
      a.href = '#';
      const anchor = document.getElementsByTagName('a');
      for (let i = 0; i < anchor.length; i++) {
         //add an 'active' class name to the first <a> 
         anchor[0].className = 'active';
         a.addEventListener('click', (e) => {
            anchor[i].classList.remove('active');
            e.target.className = 'active';
            showPage(studentList, e.target.textContent);
         });  
      }
   }
}

appendPageLinks(studentList);


