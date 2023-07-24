/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


      /*== MENU SHOW === */
      /* Validate ifconstants exists  */
      if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
      }

      /*==MENU HIDDEN ===*/
      if(navClose){
      navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')

      })
      }
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
const navMenu = document.getElementById('nav-menu')
//when we click nav__link we remove show__menu
navMenu.classList.remove('show-menu')
    }
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
     this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
 }
 window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset
     
     section.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetHeight - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else{
          sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                         : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__data, .footer__container, .footer__group')
sr.reveal('.home__img', {delay: 700, origin: 'bottom'})
sr.reveal('.logos__img, .program__card, .pricing__card', {interval: 100})
sr.reveal('.choose__img, .calculate__content', {origin: 'left'})
sr.reveal('.choose__content, .calculate__img', {origin: 'right'})
/*=============== CALCULATE JS ===============*/

const calculateForm = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm'),
      calculateKg = document.getElementById('calculate-kg'),
      calculateMessage = document.getElementById('calculate-message')


      const calculateBmi = (e) => {
        e.preventDefault()

        //check the fields have a value

        if(calculateCm.value === '' || calculateKg.value === ''){
              //Add and remove color
              calculateMessage.classList.remove('color-green')
              calculateMessage.classList.add('color-red') 

              //show message
             calculateMessage.textContent = 'Fill in the height and weight 🧔‍♂️'
      
          //remove message three seconds
          setTimeout(() => {
            calculateMessage.textContent = ''
           }, 3000)
      } else {
        //BMI Formula
        const cm = calculateCm.value /100,
            kg = calculateKg.value,
            bmi = Math.round(kg / (cm * cm))

       
       //showing health status
       if(bmi < 18.5){
        calculateMessage.classList.add('color-green')
        calculateMessage.textContent = 'your BMI is ${bmi} and you are skinny 😒'
       } else if(bmi < 25){
        calculateMessage.classList.add('color-green')
        calculateMessage.textContent = 'your BMI is ${bmi} and you are healthy 😁'
       } 
       else{
        calculateMessage.classList.add('color-green')
        calculateMessage.textContent = 'your BMI is ${bmi} and you are overweight 😔'
       } 
  //clear input field
  calculateCm.value = ''
  calculateKg.value = ''

  //remove message four seconds

  setTimeout(() =>{
    calculateMessage.textContent = ''
  }, 4000)
  
      }
      }

      calculateForm.addEventListener('submit', calculateBmi)
/*=============== EMAIL JS ==============*/

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user')

      const sendEmail = (e) =>{
        e.preventDefault()

        //check  the field has a value
  
        if(contactUser.value === ''){
            //Add and remove colour
            contactMessage.classList.remove('color-green')
            contactMessage.classList.add('color-red')

            //show message
            contactMessage.textContent = 'you must enter your email ☝️'
        
        //Remove message three seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
           }, 3000)
        } else{
            //serviceID - templateID - #form - publicKey
            emailjs.sendForm('service_nttt0xg','template_d17820j','#contact-form','uQBCZj6U2o_fuCMhc')
                
            .then(() => {
                //show message
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'you registered successfully 💪' 
          
             //Remove message after three seconds
             setTimeout(() => {
                contactMessage.textContent = ''

             }, 3000)
            }, (error) => {
                // mail sending error
                alert('OOPS! SOMETHING HAS FAILED...', error)
            
            })
            //TO clear the input field
            containerUser.value = ''
        }
      }
      contactForm.addEventListener('submit', sendEmail)