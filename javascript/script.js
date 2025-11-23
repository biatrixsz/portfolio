let mbutton = document.querySelector('#mobileMenu'); 
let mprincipallist = document.querySelector('#primary-menu')
let msociallist = document.querySelector('.social-media')

mbutton.addEventListener('click', () => {

  if (!mprincipallist.classList.contains('active'))
    mprincipallist.classList.add('active'); else {
    mprincipallist.classList.remove('active')  
  }

  if (!msociallist.classList.contains('active'))
    msociallist.classList.add('active'); else {
    msociallist.classList.remove('active')  
  }
  

});








