// toggle icon navbar

let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}
console.log("hello")





//scroll section active link

let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
       
        if(top>=offset && top<offset+height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });

    // sticky navbar

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    //remove toggle icon and navbar

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

// scroll reveal

ScrollReveal({ 
    distance:'80px',
    duration:2000,
    delay:200,
 });

ScrollReveal().reveal('.home-content, heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img, .frontend-skills',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content, .backend-skills',{origin:'right'});


// typed js

const typed=new Typed('.multiple-text',{
    strings:['Frontend Developer','Backend Developer','Web Developer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true
})

// tilt js

VanillaTilt.init(document.querySelector(".home-img"), {
    max: 25,
    speed: 400
});



// email js
console.log(document.getElementById('name').value)

function sendEmail(){
    console.log(document.getElementById('name').value)
    let params={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        mobile:document.getElementById('mobile').value,
        subject:document.getElementById('subject').value,
        message:document.getElementById('message').value
    }
    emailjs.send("service_zvzokz8","template_56bt7bv",params).then(alert("email sent!!"))
}