
// build the nav
function fun() {
  const navi = document.getElementById('navbar__list');
  const secName = document.getElementsByTagName('section');
  const doc = document.createDocumentFragment();
  for (let i = 0; i < secName.length; i++) {

      const sec = document.createElement('li')
      const link=document.createElement('a');
      const n = secName[i].dataset.nav;
      const idSection = secName[i].id;
     // sec.innerHTML = `
 // <li> <a  href=#${idSection} class="menu__link" data-nav=${idSection} > ${n} </a> </li>`;
      link.href=`#${idSection}`;
      link.textContent=n;
      link.classList.add('menu__link');
      link.dataset.nav=idSection;
      // Scroll to section on link click
      link.addEventListener('click',(evt) =>{
        evt.preventDefault();
       
        secName[i].scrollIntoView({behavior: "smooth",  inline: "nearest"});
        
      })
      sec.appendChild(link)
      doc.append(sec);
  }
  navi.appendChild(doc);
 

}



// Add class 'active' to section when near top of viewport
// Begin Events
window.addEventListener('scroll', (e) => {
  e.preventDefault();
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {

      const topDistance = section.getBoundingClientRect().top;
      const secColor = section.querySelector('h2');

      if (topDistance > 0 && topDistance < 100) {
          section.classList.add('your-active-class');
          secColor.style.color = 'yellow';
      } else {
          section.classList.remove('your-active-class');
          secColor.style.color = 'white';

      }



  });


});







// Set sections as active
// Set active link when section is active

window.addEventListener('scroll', (event) => {
  event.preventDefault();
  const sectionss = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('li a');
  let active = "";
  sectionss.forEach(section => {
      const topDistance = section.getBoundingClientRect().top;

      if (topDistance > 0 && topDistance < 100) {
          active = section.id;
      }
     
  });

  navItems.forEach(nav => {
      nav.classList.remove("active");
      let navdata = nav.getAttribute('data-nav');
      if (navdata == active) {
          nav.classList.add("active");
      }

  });
});

//navigation bar in mobile view 
function toggleMobileMenu(menu){
  const navMob = document.querySelector('.mobile-menu');
  const navi = document.getElementById('navbar__list');
  navMob.appendChild(navi);
  
  menu.classList.toggle('open');
  let menuBar=menu.getAttribute('class')
  if(menuBar!='open'){
    menu.classList.toggle('close');
  }
    

  
}