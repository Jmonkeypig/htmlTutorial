function init() {
  var h1tags = document.getElementsByTagName("h1");
  h1tags[0].onclick = changeColor;
  console.log('This is some text');
}


function changeColor() {
  this.innerHTML = "Click Again";

  var randomcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  this.style.color = randomcolor;

}

function toggleImg() {
  console.log('toggle !!');
  var img = document.getElementById("danceImg");
  var isImgVisible = img.style.visibility != "visible";
  img.style.visibility = isImgVisible ? "visible" : "hidden";
}
