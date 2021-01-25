window.onload = function() {      

  // Define language reload anchors
  var dataReloadENG = document.querySelector("[data-reload-eng]");
  var dataReloadPT = document.querySelector("[data-reload-pt]");

  // Translations
  var language = {
    eng: {

    },
    pt: {
      aboutme: "Sobre mim",
      home: "INÍCIO",
      homemini:"INÍCIO", 
      about: "SOBRE MIM",
      aboutmini: "SOBRE MIM",
      projects: "PROJETOS",
      projectsmini: "PROJETOS",
      contact: "CONTATO",
      contactmini: "CONTATO",
      aboutmetext: "Texto sobre mim. Some text about me. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      projectstittle: "Projetos",
      project1desc: "Descrição: Aplicativo de web scraping que obtém as principais atrações de um destino turístico. O usuário pode criar uma conta, fazer login, adicionar um novo destino com as informações da viagem, visualizar uma check list das principais atrações de um determinado destino, receber notificações, separar destinos por favoritos, excluir sua conta etc.",
      project1techs: "Tecnologias: Kotlin, JSoup, Firebase Authentication and Firebase Realtime Database.",
      project2desc: "Descrição: Site de exposição de escola privada.",
      project2techs: "Tecnologias: HTML, CSS, JavaScript, W3.CSS e PHP",
      /*project3desc: "Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum, urna id ornare maximus, mauris justo viverra erat, fringilla rutrum quam massa eu erat.",
      project3techs: "Tecnologias: Firebase, Java, PHP, Python, MySql",
      project4desc: "Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum, urna id ornare maximus, mauris justo viverra erat, fringilla rutrum quam massa eu erat.",
      project4techs: "Tecnologias: Firebase, Java, PHP, Python, MySql",*/
      contacttittle: "Entre em Contato",
      contacttext: "Vamos entrar em contato. Me mande uma mensagem:",
      sendmessage: "ENVIAR MENSAGEM"
    }
  };

  //Define language via hash
  if(window.location.hash){
    if(window.location.hash === "#pt"){
      document.getElementById("home-bar").textContent = language.pt.home;
      document.getElementById("home-bar-mini").textContent = language.pt.homemini;
      document.getElementById("about-bar").textContent = language.pt.about; 
      document.getElementById("about-bar-mini").textContent = language.pt.aboutmini; 
      document.getElementById("projects-bar").textContent = language.pt.projects;
      document.getElementById("projects-bar-mini").textContent = language.pt.projectsmini;
      document.getElementById("contact-bar").textContent = language.pt.contact;
      document.getElementById("contact-bar-mini").textContent = language.pt.contactmini;
      document.getElementById("about-me-t").textContent = language.pt.aboutme; 
      document.getElementById("about-me-p").textContent = language.pt.aboutmetext;
      document.getElementById("projects-t").textContent = language.pt.projectstittle;
      document.getElementById("project-1-desc-t").textContent = language.pt.project1desc;
      document.getElementById("project-1-techs-t").textContent = language.pt.project1techs; 
      document.getElementById("project-2-desc-t").textContent = language.pt.project2desc;
      document.getElementById("project-2-techs-t").textContent = language.pt.project2techs;/*
      document.getElementById("project-3-desc-t").textContent = language.pt.project3desc;
      document.getElementById("project-3-techs-t").textContent = language.pt.projec31techs;
      document.getElementById("project-4-desc-t").textContent = language.pt.project4desc;
      document.getElementById("project-4-techs-t").textContent = language.pt.projec41techs;*/
      document.getElementById("contact-me-t").textContent = language.pt.contacttittle;
      document.getElementById("contact-me-text-t").textContent = language.pt.contacttext;
      document.getElementById("button-send-message-t").textContent = language.pt.sendmessage;
    }
  }

  // Define language on click illiteration
  dataReloadENG.onclick = function(){
    window.location.hash=''
    var noHashURL = window.location.href.replace(/#.*$/, '');
    window.location.href = window.location.href+"#eng";
    location.reload(true);
  };

  dataReloadPT.onclick = function(){
    window.location.hash=''
    var noHashURL = window.location.href.replace(/#.*$/, '');
    window.history.replaceState('', document.aboutme, noHashURL); 
    window.history.replaceState('', document.home, noHashURL);
    window.history.replaceState('', document.homemini, noHashURL);
    window.history.replaceState('', document.about, noHashURL);
    window.history.replaceState('', document.projects, noHashURL);
    window.history.replaceState('', document.contact, noHashURL);
    window.history.replaceState('', document.aboutmetext, noHashURL);
    window.history.replaceState('', document.projectstittle, noHashURL);
    window.history.replaceState('', document.project1desc, noHashURL);
    window.history.replaceState('', document.project1techs, noHashURL);
    window.history.replaceState('', document.project2desc, noHashURL);
    window.history.replaceState('', document.project2techs, noHashURL);/*
    window.history.replaceState('', document.project3desc, noHashURL);
    window.history.replaceState('', document.project3techs, noHashURL);
    window.history.replaceState('', document.project4desc, noHashURL);
    window.history.replaceState('', document.project4techs, noHashURL);*/
    window.history.replaceState('', document.contacttittle, noHashURL);
    window.history.replaceState('', document.contacttext, noHashURL);
    window.history.replaceState('', document.sendmessage, noHashURL);
    window.location.href = window.location.href+"#pt";
    location.reload(true);
  };

};
