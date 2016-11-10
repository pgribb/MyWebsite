//contact button functionality

var otw = document.getElementById('otw');
var otwType = otw.children[0].getElementsByTagName('li');
var otwHeader = document.getElementById('otwHeader');
var otwContent = document.getElementById('otwContent')
var contentToToggle = otw.children;

toggleContent(contentToToggle, otwType);

function toggleContent (contentToTog, contentType) {
  //adds click listener to li's for content nav
  for (var i = 0; i < contentType.length; i++) {
    contentType[i].addEventListener('click', revealContent);
  }

  //reveals the content type of whichever button was clicked
  function revealContent() {
    var correspondingClass = this.classList[0];
    var contentToReveal = document.getElementsByClassName(correspondingClass)[1];
    console.log(contentToReveal.classList)

    var correspondingDiv = [];
    for (var i = 0; i < contentType.length; i++) {
      correspondingDiv.push(document.getElementsByClassName(contentType[i].classList[0])[1]);

      if (correspondingDiv[i].classList[1] !== "hidden" && correspondingDiv[i].classList[1] !== contentToReveal) {
        correspondingDiv[i].classList.add("hidden");
      }
    }
    contentToReveal.classList.remove("hidden");

    document.addEventListener('click', isOutsideContentToTog);
  }

  //upon clicking outside, the conent goes to defaultView
  function goDefault (toHide) {
    console.log("clicked outsied");
    for (var i = 2; i < toHide.length; i++) {
      toHide[i].classList.add("hidden");
    }
    // otwHeader.style.border-bottom = "5px solid #333";

    document.removeEventListener('click', isOutsideContentToTog);
  }

  // Checks if the mouse target is in any element outside contentToTog
  function isOutsideContentToTog (e) {
    var node = e.target
    while (node !== document) {
      if ((node === contentToTog[0] || node === contentToTog[1] || node === contentToTog[2] || node === contentToTog[3])) {
        return;
      }
      else {
        node = node.parentNode;
      }
    }

    goDefault (contentToTog);
  }
};
