//contact button functionality

var otw = document.getElementById('otw');
var otwType = otw.children[0].getElementsByTagName('li');
var otwHeader = document.getElementById('otwHeader');
var otwContent = document.getElementById('otwContent')
var contentToToggle = otw.children;

otwDefault();
toggleContent(contentToToggle, otwType, otwDefault);

// gets called by goDefault to reset the of-the-week window
function otwDefault() {
  // resets otw nav bar
  for(var i = 0; i < otwType.length; i++) {
    otwType[i].children[0].classList.remove("currentSelection");
    otwType[i].children[0].style.border = "";
  }
  otwType[1].children[0].style.borderRight = "1px solid #333";
  otwType[1].children[0].style.borderLeft = "1px solid #333";

  otwHeader.style.borderBottom = "5px solid #333";

  // hide the content types and the containing div
  for (var i = 0; i < contentToToggle[3].children[i].length; i++) {
    contentToToggle[3].children[i].classList.add("hidden");
  }
  contentToToggle[2].classList.add("hidden");
  contentToToggle[3].classList.add("hidden");
}

function otwReveal(clicked) {
  // first remove the border-bottom and make sure the content's container div is displayed
  otwHeader.style.borderBottom = "";
  otwContent.classList.remove("hidden");
  contentToToggle[2].classList.remove("hidden");

  // changes otw nav bar bases on what is displayed
  for(var i = 0; i < otwType.length; i++) {
    otwType[i].children[0].classList.remove("currentSelection");
    otwType[i].children[0].style.border = "";
  }
  clicked.children[0].classList.add("currentSelection");
  switch (clicked) {
    case otwType[0]:
      otwType[1].children[0].style.borderLeft = "1px solid #333";
      otwType[2].children[0].style.borderLeft = "1px solid #333";
      break;
    case otwType[1]:
      otwType[1].children[0].style.borderRight = "1px solid #333";
      otwType[1].children[0].style.borderLeft = "1px solid #333";
      break;
    case otwType[2]:
      otwType[0].children[0].style.borderRight = "1px solid #333";
      otwType[1].children[0].style.borderRight = "1px solid #333";
      break;
  }

  // Reveals OTW content
  var correspondingClass = clicked.classList[0];
  var contentToReveal = document.getElementsByClassName(correspondingClass)[1];

  var correspondingDiv = [];
  for (var i = 0; i < otwType.length; i++) {
    correspondingDiv.push(document.getElementsByClassName(otwType[i].classList[0])[1]);

    if (correspondingDiv[i].classList[1] !== "hidden" && correspondingDiv[i].classList[1] !== contentToReveal) {
      correspondingDiv[i].classList.add("hidden");
    }
  }
  contentToReveal.classList.remove("hidden");

  // properly sizes the top border of the content div based on what is displayed
  var borderTopWidth = otw.offsetWidth - contentToToggle[1].offsetWidth;
  contentToToggle[2].style.width = borderTopWidth + "px";
}

function toggleContent (contentToTog, contentType, goDefaultFn) {
  // make sure contentToTog exists and check whether or not it's an array
  var isArray = false;
  if (contentToTog === null || contentToTog === undefined) {
    throw ("The conent trying to be toggled is either null or undefined");
  }
  else if (contentToTog.length !== undefined) {
    isArray = true;
  }

  //adds click listener to li's for content nav
  for (var i = 0; i < contentType.length; i++) {
    contentType[i].addEventListener('click', revealContent);
  }

  //reveals the content type of whichever button was clicked
  function revealContent() {
    otwReveal(this);

    document.addEventListener('click', isOutsideContentToTog);
  }

  //upon clicking outside, the conent goes to defaultView
  function goDefault () {
    goDefaultFn();

    document.removeEventListener('click', isOutsideContentToTog);
  }

  // Checks if the mouse target is in any element outside contentToTog
  function isOutsideContentToTog (e) {
    var node = e.target

    if (isArray) {
      while (node !== document) {
        for(var i = 0; i < contentToTog.length; i++) {
          if (node === contentToTog[i]) {
            return;
          }
        }
        node = node.parentNode;
      }
    }
    else {
      while (node !== document) {
        if (node === contentToTog) {
          return;
        }
        else {
          node = node.parentNode;
        }
      }
    }

    goDefault();
  }
};
