function init() {
  var h1tags = document.getElementsByTagName("h1");
  h1tags[0].onclick = changeColor;
  console.log('This is some text');

  // var hw = document.getElementById('hw');
  // hw.onclick = showHello;
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


//
// function showHello() {
//   alert('hello');
//   console.log('showHello');
// }


window.onload = function(){
    var hm = document.getElementById('hm');
    hm.addEventListener('click', function(){
        console.log('Show Text');
        alert('Hi~~~~');
    })
}
