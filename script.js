
let web_project = document.querySelector(".web-prject-js");
let web_project_section = document.querySelector(".projects");
let project_content_section = document.querySelector(".project-content");
let go_back_btn = document.getElementById('go-back');

web_project.addEventListener('click',()=>{
  
   web_project_section.style.display = 'none';
   project_content_section.style.display= 'grid';
});

go_back_btn.addEventListener('click',()=>{
  
  web_project_section.style.display= 'grid';
  project_content_section.style.display = 'none';
});