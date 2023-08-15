let alertWrapper = document.querySelector('.alerts')
let alertClose = document.querySelector('.close_alert')

if (alertWrapper) {
  alertClose.addEventListener('click', () =>{
    console.log('clicked!');
    alertWrapper.style.display = 'none';
    
  })
}