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
      aboutmetext: "Olá, eu sou Cristiane e minha trajetória com programação começa em 2016, quando iniciei o curso de mecatrônica, de lá para cá tenho tido interesse e me envolvido com diversas tecnologias. Inicialmente, eu aprendi C e C++ para a programação de microcontroladores (como Arduino) tendo como objetivo a participação em competições de robótica nacionais e internacionais(RoboCup 2017, cediada em Nagoya-Japão). Posteriormente, adquiri conhecimento sobre as tecnologias para o desenvolvimento web (HTML, CSS, JavaScript, PHP e MySQL) que utilizei para atuar como freelancer. O desenvolvimento Android também despertou o meu interesse (Java, Kotlin e Firebase) e mais recentemente tenho buscado me aprofundar sobre Machine Learning(Python, Pandas, Matplotlib, Sciki Learn). Eu sou uma pessoa naturalmente curiosa, que gosta de desafios e que sempre busca aprimorar suas abilidades.",
      projectstittle: "Projetos",
      project1desc: "Descrição: Aplicativo de web scraping que obtém as principais atrações de um destino turístico. O usuário pode criar uma conta, fazer login, adicionar um novo destino com as informações da viagem, visualizar uma check list das principais atrações de um determinado destino, receber notificações, separar destinos por favoritos, excluir sua conta etc.",
      project1techs: "Tecnologias: Kotlin, JSoup, Firebase Authentication and Firebase Realtime Database.",
      project2desc: "Descrição: Site de exposição de escola privada.",
      project2techs: "Tecnologias: HTML, CSS, JavaScript, W3.CSS e PHP",
      project3desc: "Descrição: Três aplicativos para a interação de uma escola. Contendo a versão do aluno, do professor e da diretoria. Cada aplicaticativo pode excutar tarefas distintas, estando dentre elas criar, vizualizar ou deletar posts, agendar eventos no calendário, fazer upload ou download de boletos bancários, enviar mensagens etc",
      project3techs: "Tecnologias: Java, Picasso, Firebase Authentication, Firebase Realtime Database and Firebase Storage",
      /*project4desc: "Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum, urna id ornare maximus, mauris justo viverra erat, fringilla rutrum quam massa eu erat.",
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
      document.getElementById("project-2-techs-t").textContent = language.pt.project2techs;
      document.getElementById("project-3-desc-t").textContent = language.pt.project3desc;
      document.getElementById("project-3-techs-t").textContent = language.pt.projec3techs;/*
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
    window.history.replaceState('', document.project2techs, noHashURL);
    window.history.replaceState('', document.project3desc, noHashURL);
    window.history.replaceState('', document.project3techs, noHashURL);/*
    window.history.replaceState('', document.project4desc, noHashURL);
    window.history.replaceState('', document.project4techs, noHashURL);*/
    window.history.replaceState('', document.contacttittle, noHashURL);
    window.history.replaceState('', document.contacttext, noHashURL);
    window.history.replaceState('', document.sendmessage, noHashURL);
    window.location.href = window.location.href+"#pt";
    location.reload(true);
  };

};
