//contact button functionality

var contactBox = document.getElementById("contact");
var defaultView = document.getElementById('noHover');
var hoverView = document.getElementById('onHover');
var emailView = document.getElementById('email');
var phoneView = document.getElementById('phone');
var socialView = document.getElementById('social');
var contactOptions = hoverView.getElementsByTagName('li');

defaultView.addEventListener('mouseover', function () {
  defaultView.classList.add("hidden");
  hoverView.classList.remove("hidden");
});
//adds click listener to li's within onHover id
for (var i = 0; i < contactOptions.length; i++) {
  contactOptions[i].addEventListener('click', toggleContactMenu);
}

//reveals the contact info of whichever method was clicked
function toggleContactMenu() {
  onHover.classList.add("hidden");
  if (this == contactOptions[0]) {
    emailView.classList.remove("hidden");
    contactBox.style.height = '380px'; //resizes contact box to fit email form
  }
  else if (this == contactOptions[1]) {
    phoneView.classList.remove("hidden");
  }
  else if (this == contactOptions[2]) {
    socialView.classList.remove("hidden");
  }
}


//Go back to default view when unfocused from(clicked outside of) the contact box


//document.addEventListener("click", goDefault);
//contactBox.addEventListener("click", goDefault);
//document.addEventListener("mouseover", goDefault)

//function goDefault () {
//  if ((this == document) && (this != contactBox)) {
//    console.log(this);
//  }
//}
