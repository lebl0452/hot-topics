// GET THE REFERENCES
const content = "partials/content.xml";
const markup = "partials/markup.xml";
let url = window.location.href;
// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
function loadContent() {
   /*
   IMPORTANT NOTES:
   loadContent RUNS EVERY TIME A LINK IS CLICKED.
   loadContent REQUIRES THE INPUT. THIS INPUT IS
   THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK.
   EVERY TIME A LINK IS CLICKED, urlFeed WILL GET 
   THE UPDATED PATH TO THE REQUESTED CONTENT.
   */
   // RUN THE fetch(urlFeed).then().then().catch()
   fetch( url ).
   then().
   then().
   catch()
   // CLOSE YOUR FUNCTION loadContent HERE
};

loadContent(url);
// CALL loadContent WITH THE CURRENT VALUE OF url 

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
function selectContent() {
   // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
   // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
   // CALL THE FUNCTION loadContent PROVIDING THE href
   // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
   // OF loadContent FUNCTION.
   // CLOSE YOUR FUNCTION selectContent HERE
}

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
for (let i = 0; i < nodeList.length; i++) {
   nodeList[i].addEventListener('click', handleSelection);
}

//getting refference-------------------------------
let $dc = document.getElementById('dynamic-content');

//Initial Page markup----------------------------------
$dc.innerHTML = markup.home;

//Nodelist------------------------------------
var nodeList = document.querySelectorAll("a");