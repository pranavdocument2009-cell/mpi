```javascript id="zcvz0o"
// ================= COUNTER ANIMATION =================

let counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    let updateCounter = () => {

        let target = +counter.getAttribute("data-target");
        let count = +counter.innerText;

        let increment = target / 100;

        if(count < target){

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target + "+";

        }

    }

    updateCounter();

});


// ================= SCROLL REVEAL =================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.2
});


document.querySelectorAll(
".product-card,.equipment-card,.step,.industry-card,.about-card,.testimonial-card"
).forEach((el)=>{

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 1s ease";

    observer.observe(el);

});


// ================= FLOATING EFFECT =================

document.querySelectorAll(".equipment-card").forEach((card,index)=>{

    card.style.animationDelay = `${index * 0.3}s`;

});


// ================= BUTTON EFFECT =================

document.querySelectorAll("button,.primary-btn,.quote-btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform = "translateY(-5px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform = "translateY(0px)";

    });

});


// ================= NAVBAR SHADOW ON SCROLL =================

window.addEventListener("scroll",()=>{

    let header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.1)";

    }

    else{

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.08)";

    }

});


// ================= CONTACT FORM =================

let form = document.querySelector(".contact-form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you! Your enquiry has been submitted successfully.");

    form.reset();

});
```

