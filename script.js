/* =========================================
   CLASS SIX WEBSITE
   JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    welcomeMessage();
    revealElements();
    navbarEffect();
    buttonRipple();
    footerYear();

});

/* ===============================
   Welcome Message
================================ */

function welcomeMessage(){

    const hello = document.querySelector(".hello");

    if(!hello) return;

    const hour = new Date().getHours();

    let greeting = "Hello, Visitor 👋";

    if(hour >= 5 && hour < 12){

        greeting = "Good Morning ☀️";

    }

    else if(hour < 15){

        greeting = "Good Afternoon 🌤️";

    }

    else if(hour < 18){

        greeting = "Good Evening 🌇";

    }

    else{

        greeting = "Good Night 🌙";

    }

    hello.textContent = greeting;

}

/* ===============================
   Navbar Effect
================================ */

function navbarEffect(){

    const header = document.querySelector("header");

    if(!header) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 40){

            header.style.background = "rgba(8,12,25,.95)";
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";

        }

        else{

            header.style.background = "rgba(8,12,25,.70)";
            header.style.boxShadow = "none";

        }

        header{
    position: sticky;
    top: 0;
    z-index: 999;
    background: #050816;
    border-bottom: 1px solid rgba(255,255,255,.08);
    transition: .3s;
}
    });

}

/* ===============================
   Reveal Animation
================================ */

function revealElements(){

    const items = document.querySelectorAll(

        ".card,.menu-card,.student-card,.day-card"

    );

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.animate([

                    {

                        opacity:0,

                        transform:"translateY(35px)"

                    },

                    {

                        opacity:1,

                        transform:"translateY(0)"

                    }

                ],{

                    duration:700,

                    easing:"ease"

                });

                observer.unobserve(entry.target);

            }

        });

    });

    items.forEach(item=>observer.observe(item));

}

/* ===============================
   Ripple Button
================================ */

function buttonRipple(){

    document.querySelectorAll(".button").forEach(button=>{

        button.addEventListener("click",(e)=>{

            const ripple = document.createElement("span");

            const rect = button.getBoundingClientRect();

            const size = Math.max(rect.width,rect.height);

            ripple.style.width = size+"px";
            ripple.style.height = size+"px";

            ripple.style.left = e.clientX-rect.left-size/2+"px";
            ripple.style.top = e.clientY-rect.top-size/2+"px";

            ripple.className = "ripple";

            button.appendChild(ripple);

            setTimeout(()=>{

                ripple.remove();

            },600);

        });

    });

}

/* ===============================
   Footer Year
================================ */

function footerYear(){

    const footer = document.querySelector("footer p");

    if(!footer) return;

    footer.innerHTML =
    `© ${new Date().getFullYear()} Class VI • SD 1 Golantepus`;

}
