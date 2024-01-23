function go(){
    return document.location='HTMLCours.html'
}

function goTo(){
    return document.location='still.html'
}

var listVideo=document.querySelectorAll('.video-list .vid');
var mainVideo=document.querySelector('.main-video video');
var tll=document.querySelector('.main-video .tll');



for (var i = 0; i < listVideo.length; i++) {
    listVideo[i].addEventListener('click', function () {
      for (var j = 0; j < listVideo.length; j++) {
        listVideo[j].classList.remove('active');
      }
  
      this.classList.add('active');
  
      if (this.classList.contains('active')) {
        var src = this.children[0].getAttribute('src');
        var text = this.children[1].innerHTML;
  
        mainVideo.src = src;
        tll.innerHTML = text;
      }
    });
  }