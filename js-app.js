// Add a scroll to top button on the page...
const myButton = document.getElementById('goUp');
window.onscroll = function(){
    "use strict";
    if(window.pageYOffset >= 1550){
    myButton.style.display = "block";
    }
    else{
        myButton.style.display = "none";
    }
}
 
myButton.onclick = function (){
    "use strict";
    window.scrollTo(0, 0)
}




// create dynamically navigation menu...
// query all sections and navbar list...
const myAllSec= document.querySelectorAll('section');
const myList= document.getElementById('navbar__list');
// use createDocumentFragment() to reduce reflow...
const myFragment = document.createDocumentFragment();

// Use forEach() method... 
myAllSec.forEach((myAllSec, index) => {
const myElement = document.createElement('li');
const myLink = document.createElement('a');
// Extract the data-nav value from the section and store it in variable...
let link_text = myAllSec.getAttribute('data-nav');
const myText = document.createTextNode(link_text);
let myId = myAllSec.getAttribute('id');
// add event to the link to scroll smoothly to the appropriate section...
myLink.addEventListener('click',  (event)=> {
    event.preventDefault();
    myAllSec.scrollIntoView({behavior:'smooth'});
});
// use appendChild...
myElement.appendChild(myLink);
myLink.appendChild(myText);
myFragment.appendChild(myElement);
myLink.setAttribute('href',myId);
});
myList.appendChild(myFragment);





// a function for checking if the element in viewport...

// query the all sections and links...
const myAllSection = document.querySelectorAll('section');
const myActiveLink = document.querySelectorAll('a');
// for loop...
for (let i = 0; i < myAllSection.length; i++) {

function checkViewPort(element) {
// Use the getBoundingClientRect on the element parameter...
    const myViewPort = element.getBoundingClientRect();
    
    return (
        myViewPort.top >= 0 &&
        myViewPort.left >= 0 &&
        myViewPort.bottom <= (window.innerHeight || visualViewport.height) &&
        myViewPort.right <= (window.innerWidth || visualViewport.width)
    );
    };
    
/* afunction to add a class "active" to the section when being in viewport
and add aclss "active" to the link...  */
// add event to document...
document.addEventListener('scroll',  function () {
    
    if (checkViewPort(myAllSection[i])) {
        myAllSection[i].classList.add("your-active-class");
        myAllSection[i].style.backgroundColor ="yellow";
        myActiveLink[i].classList.add("active-link"); 
        myActiveLink[i].style.backgroundColor ="yellow";
    } else {
        myAllSection[i].classList.remove("your-active-class");
        myActiveLink[i].classList.remove("active-link");
       
    }  
    })
}








  





























