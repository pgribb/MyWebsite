//contact button functionality

var contactBox = document.getElementById("contact");
var defaultView = document.getElementById('noHover');
var hoverView = document.getElementById('onHover');
var emailView = document.getElementById('email');
var phoneView = document.getElementById('phone');
var socialView = document.getElementById('social');
var contactOptions = hoverView.getElementsByTagName('li');

defaultView.addEventListener('mouseover', toggleContactMenu);

function toggleContactMenu () {
  document.addEventListener('mouseover', isOutsideContactBox);

  defaultView.classList.add("hidden");
  hoverView.classList.remove("hidden");

  //upon un-hovering or clicking outside, the contact-box goes back to original view
  function goDefault () {
    var contactDivs = contactBox.getElementsByTagName('div');
    for (var i = 0; i < contactDivs.length; i++) {
      contactDivs[i].classList.add("hidden");
    }
    defaultView.classList.remove("hidden");

    //reset height (incase emailView was shown)
    contactBox.style.height = "";

    document.removeEventListener('mouseover', goDefault);
    document.removeEventListener('click', goDefault);
  }

  function isOutsideContactBox (e) {
    var node = e.target
    while (node !== document) {
      if ((node === contactBox)) {
        return;
      }
      else {
        node = node.parentNode;
      }
    }

    goDefault ();
  }

  //adds click listener to li's within onHover id
  for (var i = 0; i < contactOptions.length; i++) {
    contactOptions[i].addEventListener('click', revealInfo);
  }

  //reveals the contact info of whichever button was clicked
  function revealInfo() {
    document.removeEventListener('mouseover', isOutsideContactBox);
    document.addEventListener('click', isOutsideContactBox);

    onHover.classList.add("hidden");

    if (this === contactOptions[0]) {
      emailView.classList.remove("hidden");
      contactBox.style.height = '380px'; //resizes contact box to fit email form
    }
    else if (this === contactOptions[1]) {
      phoneView.classList.remove("hidden");
    }
    else if (this === contactOptions[2]) {
      socialView.classList.remove("hidden");
    }
  }
};
