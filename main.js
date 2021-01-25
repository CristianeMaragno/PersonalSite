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