function open_resume(){
  var x = document.getElementById("about-me-t").textContent;
  var file_name;

  if(x == "About me"){
    file_name = "pdf/Resume_eng.pdf";
    console.log(file_name);
  }else if (x == "Sobre mim") {
    file_name = "pdf/Resume_pt.pdf";
    console.log(file_name);
  }

  window.open(file_name);

}


function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";   
}

function plusSlides2(n, no) {
  showSlides2(slideIndex2[no] += n, no);
}

function showSlides2(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId2[no]);
  if (n > x.length) {slideIndex2[no] = 1}    
  if (n < 1) {slideIndex2[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex2[no]-1].style.display = "block";  
}